const jwt = require('jsonwebtoken');
const { JWT_SECRET } = require('./../config');

async function userMiddleware(req, res, next) {
    try {
        // Implement user auth logic
        // You need to check the headers and validate the user from the user DB.
        // Check readme for the exact headers to be expected

        let authTokens = req.headers.authorization; // Corrected typo here
        const token = authTokens.split(' ')[1];
        

        let decoded = jwt.verify(token, JWT_SECRET);

        if (decoded.username) {
            req.user = decoded;
            next();
        } else {
            res.status(401).send("Unauthorized");
        }
    } catch (error) {
        res.status(401).send("Unauthorized");
    }
}

module.exports = userMiddleware;
