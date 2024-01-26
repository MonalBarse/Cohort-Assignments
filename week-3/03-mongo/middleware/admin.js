
const { Admin }= require('../db/index'); 

// Middleware for handling auth;
// Implement admin auth logic
// You need to check the headers and validate the admin from the admin DB. Check readme for the exact headers to be expected
// If the admin is valid, call next() to pass control to the next middleware function
// If the admin is invalid, send a 401 response with the message "Invalid admin" and end the response 
async function adminMiddleware(req, res, next) {
    try {
        let username = req.headers.username;
        let password = req.headers.password;

        let admin = await Admin.findOne({ username: username, password: password }); // Here we are checking if the admin is valid or not by checking that the username and password are correct or not

        if (!admin) {
            res.status(401).send("Invalid admin");
        } else {
            next();
        }
    } catch (err) {
        res.status(500).send("Internal Server Error");
    }}
module.exports = adminMiddleware;