const { Router } = require("express");
const router = Router();
const userMiddleware = require("../middleware/user");
const { User , Course } = require("../db");
const jwt = require('jsonwebtoken');
const { JWT_SECRET } = require('./../config');
const z = require("zod")

// User Routes
router.post('/signup', async (req, res) => {
    // Implement user signup logic
    const userSchema = z.object({
        username: z.string().email(),
        password: z.string().min(6).max(15),
    });

    try {
        const { username, password } = userSchema.parse(req.body);

        // Check if the user already exists with the given username
        const existingUser = await User.findOne({ username: username });
        if (existingUser) {
            return res.status(400).send("User with this username already exists");
        }

        // Create the user
        await User.create({ username: username, password: password });
        res.status(201).send("User created successfully");
    } catch (error) {
        if (error instanceof z.ZodError) {
            res.status(400).json({ error: 'Validation Error', details: error.errors });
        } else {
            res.status(500).send("Internal Server Error");
        }
    }
});


router.post('/signin', async (req, res) => {
    // Implement user signin logic
    const userSchema = z.object({
        username: z.string().email(),
        password: z.string().min(6).max(15),
    });

    try {
        const { username, password } = userSchema.parse(req.body);
        const user = await User.findOne({ username: username });

        if (!user) {
            return res.status(400).send("User with this username does not exist");
        }

        if (user.password !== password) {
            return res.status(400).send("Incorrect password");
        }

        const token = jwt.sign({ username: username }, JWT_SECRET);
        res.status(200).json({ token: token });
    } catch (error) {
        if (error instanceof z.ZodError) {
            res.status(400).json({ error: 'Validation Error', details: error.errors });
        } else {
            res.status(500).send("Internal Server Error");
        }
    }
});



router.post('/courses/:courseId', userMiddleware, async (req, res) => {
    // Implement course purchase logic
    const courseId = req.params.courseId;

    try {
        const user = req.user; // req.user has the authenticated user object set by userMiddleware,  (here, we get user object as { username: 'user1', password: 'password1', purchasedCourses: []})

        // Check if the course exists
        const course = await Course.findById(courseId);
        if (!course) {
            return res.status(404).send("Course not found");
        }

        // Check if the user has already purchased the course
        if (user.purchasedCourses.includes(courseId)) {
            return res.status(400).send("User has already purchased this course");
        }

        User.updateOne( 
            { username: user.username }, // Filter
            { $push: { purchasedCourses: courseId } } // Update
        )
        .then(user => { res.status(200).send("Course purchased successfully") })
        .catch(err => { res.status(500).send("Internal Server Error") }) // User.updateOne() returns a promise, so we can use .then() and .catch()

        } catch (error) {
        res.status(500).send("Internal Server Error");
    } 
});
router.get('/courses', async (req, res) => {
    // Implement listing all courses logic
    try {
        const courses = await Course.find();
        res.status(200).json({ courses: courses });
    } catch (error) {
        res.status(500).send("Internal Server Error");
    }
});


router.get('/purchasedCourses', userMiddleware, async (req, res) => {
    // Implement fetching purchased courses logic
    const user = req.user; // Assuming userMiddleware sets req.user with the authenticated user

    try {
        const courseIDs = user.purchasedCourses;
        const purchasedCourses = await Course.find({ _id: { $in: courseIDs } });
        res.status(200).json({ purchasedCourses: purchasedCourses });
    } catch (error) {
        res.status(500).send("Internal Server Error");
    }
});


module.exports = router