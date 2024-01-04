// This is the main file which will be used to run the server. It will import the admin and user routers, what they do is 
// they will handle the routes for the admin and user respectively. The admin router will handle the routes for the admin and the user router will handle the routes for the user.

const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const adminRouter = require("./routes/admin");   // Import the admin router which contains all the routes for the admin ( which are post admin/signup, post admin/courses, get admin/courses)
const userRouter = require("./routes/user");     // Import the user router which contains all the routes for the user ( which are post user/signup, get user/courses, post user/courses/:courseId, get user/purchasedCourses)
const PORT = 3000;

// Middleware for parsing request bodies
app.use(bodyParser.json()); 
app.use(bodyParser.urlencoded({ extended: true })); // This will allow us to access the request body in the request object
app.use("/admin", adminRouter) // This will tell express to use the admin router for all routes that start with /admin
app.use("/user", userRouter)   // This will tell express to use the user router for all routes that start with /user

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
