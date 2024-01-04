
const { User, Course } = require("../db")

const express = require("express");
const router = express.Router(); // Create a router object which is a mini app that only handles routes.
const userMiddleware = require("../middleware/user");

// User Routes
router.get('/courses', (req, res) => {
    // Implement listing all courses logic

    Course.find({}) // Returns a promise, {} - empty object means find all courses
        .then((courses) => {
            res.status(200).send(courses);
        })
        .catch((err) => {
            res.status(500).send("Internal Server Error", err.message);
        });
});

router.post('/signup', (req, res) => {
    // Implement user signup logic
    let username = req.body.username;
    let password = req.body.password;
    let email = req.body.email;

    User.create({
        username: username,
        password: password,
        email: email
    })
        .then((user) => {
            res.status(201).json({ message: "User created successfully " });
        })
        .catch((err) => {
            res.status(500).send("Internal Server Error", err);
        });
});

router.get('/purchasedCourses', userMiddleware, async (req, res) => {
    try {
        // Fetch the user
        const username = req.headers.username;
        const user = await User.findOne({ username: username });

        if (!user) {
            return res.status(404).json({ error: 'User not found' });
        }

        // Fetch purchased courses
        const courseIDs = user.purchasedCourses;
        const courses = await Course.find({ _id: { $in: courseIDs } }); // Syntax is field: { $in: [<value1>, <value2>, ... <valueN> ] } where field is the field to check, and the array holds the values to match against. $in is an operator that selects the documents where the value of a field equals any value in the specified array.

        res.status(200).json({ courses });
    } catch (error) {
        console.error('Error fetching purchased courses:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});


router.post('/courses/:courseId', userMiddleware, (req, res) => {
    // Implement course purchase logic
    let username = req.headers.username;
    let password = req.headers.password;
    //to purchase the course of the id courseID, we push the course of id courseID into purchasedCourses array of the user which has refrence to the Course model i.e it also has the courseID

    let courseID = req.params.courseId;
    //console.log(courseID);
    User.updateOne( // Syntax is Model.updateOne(conditions, update) where conditions is the query, and callback is the callback function here {username: username, password: password} is the query, and {$push: {purchasedCourses: courseID}} is the update
        { username: username, password: password },
        { $push: { purchasedCourses: courseID } }
    )
        .then((user) => {
            res.status(201).send("Course purchased successfully");
        })
        .catch((err) => {
            res.status(500).send("Internal Server Error", err);
        });

});


module.exports = router