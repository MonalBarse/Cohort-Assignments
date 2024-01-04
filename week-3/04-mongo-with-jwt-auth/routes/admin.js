const { Router } = require("express");
const adminMiddleware = require("../middleware/admin");
const router = Router();
const { Admin, Course } = require("../db")
const jwt = require('jsonwebtoken');
const { JWT_SECRET } = require('./../config');
const z = require("zod");
// Admin Routes
router.post('/signup', async (req, res) => {
    // Implement admin signup logic

    const adminSchema = z.object({
        username: z.string().email(),
        password: z.string().min(6).max(15)
    });

    try {
        const { username, password } = adminSchema.parse(req.body);

        // Check if the admin already exists with the given username
        const existingAdmin = await Admin.findOne({ username: username });
        if (existingAdmin) {
            return res.status(400).send("Admin with this username already exists");
        }

        // Create the admin
        await Admin.create({ username: username, password: password });

        res.status(201).send("Admin created successfully");
    } catch (error) {
        if (error.errors) {
            // Handle Zod validation errors
            res.status(400).json({ error: 'Validation Error', details: error.errors });
        } else {
            // Handle other errors
            console.error(error); // Log the error for debugging

            // Send an appropriate error response
            res.status(500).send("Internal Server Error");
        }
    }
});



// routes/admin.js
router.post('/signin', async (req, res) => {
    // Implement admin signin logic
    const adminSchema = z.object({
        username: z.string().email(),
        password: z.string().min(6).max(15)
    });

    try {
        const { username, password } = adminSchema.parse(req.body);

        const admin = await Admin.findOne({ username: username });
        if (!admin) {
            return res.status(400).send("Admin with this username does not exist");
        }

        if (admin.password !== password) {
            return res.status(400).send("Incorrect password");
        }

        const token = jwt.sign({ username: username }, JWT_SECRET);
        res.status(200).json({ token: token });
    } catch (error) {
        console.error(error);  // Log the error for debugging
        if (error instanceof z.ZodError) {
            res.status(400).json({ error: 'Validation Error', details: error.errors });
        } else {
            res.status(500).send("Internal Server Error");
        }
    }
});


router.post('/courses', adminMiddleware, async (req, res) => {
    // Implement course creation logic
    const courseSchema = z.object({
        title: z.string(),
        description: z.string(),
        imageLink: z.string(),
        price: z.number(),
    });

    try {
        const { title, description, imageLink, price } = courseSchema.parse(req.body);

        const newCourse = await Course.create({
            title: title,
            description: description,
            imageLink: imageLink,
            price: price,
        });

        res.status(201).json({ message: "Course created successfully", course: newCourse });
    } catch (error) {
        if (error instanceof z.ZodError) {
            res.status(400).json({ error: 'Validation Error', details: error.errors });
        } else {
            res.status(500).send("Internal Server Error");
        }
    }
});


router.get('/courses', adminMiddleware, async (req, res) => {
    // Implement fetching all courses logic
    try {
        const courses = await Course.find();
        res.status(200).json({ courses: courses });
    } catch (error) {
        res.status(500).send("Internal Server Error");
    }
});


module.exports = router;