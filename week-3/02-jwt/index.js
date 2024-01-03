/* 
# JWTs
 - Write a function that takes in a username and password and returns a JWT token with the username encoded. 
    Should return null if the username is not a valid email or if the password is less than 6 characters. Try using the zod library here
 - Write a function that takes a jwt as input and returns true if the jwt can be DECODED (not verified). Return false otherwise
 - Write a function that takes a jwt as input and returns true if the jwt can be VERIFIED. Return false otherewise
 - To test, go to the 02-jwt folder and run `npx jest ./tests`
*/
const jwt = require('jsonwebtoken');
const jwtPassword = 'secret';
const zod = require('zod');


/**
 * Generates a JWT for a given username and password.
 *
 * @param {string} username - The username to be included in the JWT payload.
 *                            Must be a valid email address.
 * @param {string} password - The password to be included in the JWT payload.
 *                            Should meet the defined length requirement (e.g., 6 characters).
 * @returns {string|null} A JWT string if the username and password are valid.
 *                        Returns null if the username is not a valid email or
 *                        the password does not meet the length requirement.
 */
function signJwt(username, password) {
    // Your code here
    const schema = zod.object({             // defining the zod schema
        username: zod.string().email(),
        password: zod.string().min(6),
    });
    const data = {                       
        username: username,
        password: password,
    };
    try {
        schema.parse(data);                 // schema.parse what it does is it validates the data and throws an error if it doesn't match the schema
        const token = jwt.sign(data, jwtPassword); // jwt.sign takes in the data and the secret key and returns a token if the data is valid and if the data is invalid it throws an error
        return token;
    }
    catch (error) { 
        return null;
    }

}

/**
 * Verifies a JWT using a secret key.
 *
 * @param {string} token - The JWT string to verify.
 * @returns {boolean} Returns true if the token is valid and verified using the secret key.
 *                    Returns false if the token is invalid, expired, or not verified
 *                    using the secret key.
 */
function verifyJwt(token) {
    // Your code here
    try {
        if (jwt.verify(token, jwtPassword)) { // jwt.verify takes in a token and the secret key and returns the payload if the token is valid and throws an error if the token is invalid
            return true;
        }
        return false;
    }
    catch (error) {
        return false;
    }

}

/**
 * Decodes a JWT to reveal its payload without verifying its authenticity.
 *
 * @param {string} token - The JWT string to decode.
 * @returns {object|false} The decoded payload of the JWT if the token is a valid JWT format.
 *                         Returns false if the token is not a valid JWT format.
 */
function decodeJwt(token) {
    // Your code here
    try {
        const decoded = jwt.decode(token); // jwt.decode takes in a token and returns the decoded payload for example : For a token of {username: 'test', password: 'test'} it returns {username: 'test', password: 'test'} it returns null if the token is invalid and returns the payload if the token is valid but it doesn't verify the token.
        if (decoded === null) {
            return false;
        }
        return true
    }
    catch (error) {
        return false;
    }
}


module.exports = {
    signJwt,
    verifyJwt,
    decodeJwt,
    jwtPassword,
};
