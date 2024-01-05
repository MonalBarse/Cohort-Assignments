const jwt = require('jsonwebtoken');
const { JWT_SECRET } = require('./../config');

async function adminMiddleware(req, res, next) {
    try {
        // Implement admin auth logic
        // You need to check the headers and validate the admin from the admin DB.
        // Check readme for the exact headers to be expected

        let authTokens = req.headers.authorization; // Corrected typo here
        const token = authTokens.split(' ')[1];
        

        let decoded = jwt.verify(token, JWT_SECRET);

        if (decoded.username) {
            // If decoded.username exists, then the user is an admin
            req.user = decoded;
            next();
        } else {
            res.status(401).send("Unauthorized");
        }
    } catch (error) {
        res.status(401).send("Unauthorized");
    }
}

module.exports = adminMiddleware;
