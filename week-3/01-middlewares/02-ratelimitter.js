const request = require('supertest');
const assert = require('assert');
const express = require('express');
const app = express();
// You have been given an express server which has a few endpoints.
// Your task is to create a global middleware (app.use) which will
// rate limit the requests from a user to only 5 request per second
// If a user sends more than 5 requests in a single second, the server
// should block them with a 404.
// User will be sending in their user id in the header as 'user-id'
// You have been given a numberOfRequestsForUser object to start off with which
// clears every one second

app.use((req, res, next) => {
 
  const userId = req.headers['user-id'];              // This line is just to get the user-id from the headers
  if (userId) {                                       // if the user-id is present in the headers then we will check if the user has made more than 5 requests in the last one second and if user-id is not present in the headers then we will just call next() and move on to the next middleware
    if (numberOfRequestsForUser[userId]) {            // if the user has made a request before then we will check if the user has made more than 5 requests in the last one second
      if (numberOfRequestsForUser[userId] >= 5) {     // if the user has made more than 5 requests in the last one second then we will send a 404 response
        res.status(404).json({ msg: 'Too many requests' });
        return;
      }
      numberOfRequestsForUser[userId]++;              // if the user has made less than 5 requests in the last one second then we will increment the number of requests by 1
    } else {                                          // if the user has not made a request before then we will set the number of requests to 1
      numberOfRequestsForUser[userId] = 1;            // We write numberOfRequestsForUser[userId] = 1 instead of numberOfRequestsForUser.userId = 1 because the user-id is a key in the object and not a property so we cannot use dot notation to access it
    }
  }
  next();
});

let numberOfRequestsForUser = {}; // this object will keep track of the number of requests made by each user in the last one second
setInterval(() => {
  numberOfRequestsForUser = {}; // reset the object every one second (will be used for the test that says  if user sends more than 5 requests in a single second then server should block them with a 404)
}, 1000)


app.get('/user', function (req, res) {
  res.status(200).json({ name: 'john' });
});

app.post('/user', function (req, res) {
  res.status(200).json({ msg: 'created dummy user' });
});

module.exports = app;