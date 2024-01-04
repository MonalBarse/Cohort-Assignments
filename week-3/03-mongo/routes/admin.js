
const { Router } = require("express");
const adminMiddleware = require("../middleware/admin");
const router = Router();
const { Admin, Course } = require("../db")

// Admin Routes
router.post('/signup', async (req, res) => {
    // Implement admin signup logic
    let username = req.body.username;
    let password = req.body.password;

    try {
        await Admin.create({ username: username, password: password });
        res.status(201).send("Admin created successfully");
    } catch (err) {
        res.status(500).send("Internal Server Error");
    }
});

router.post('/courses', adminMiddleware, async (req, res) => {
    // Implement course creation logic
    let title = req.body.title;
    let description = req.body.description;
    let imageLink = req.body.imageLink;
    let price = req.body.price;

    try {
        const course = await Course.create({
            title: title,
            description: description,
            imageLink: imageLink,
            price: price
        });
        res.status(201).json({message: "Course created successfully", courseID: course._id} );
    } catch (err) {
        res.status(500).send("Internal Server Error");
    }
});

router.get('/courses', adminMiddleware, async (req, res) => {
    // Implement fetching all courses logic
    try {
        const courses = await Course.find({});
        res.status(200).send(courses);
    } catch (err) {
        res.status(500).send("Internal Server Error");
    }
});

module.exports = router;