const mongoose = require('mongoose');

// Connect to MongoDB
mongoose.connect('mongodb+srv://username:password@newcluster.mu1yfjh.mongodb.net/?retryWrites=true&w=majority');

// Define schemas
const AdminSchema = new mongoose.Schema({
    // Schema definition here
    username: String,
    password: String,
    
});

const UserSchema = new mongoose.Schema({
    // Schema definition here
    username: String,
    password: String,
    purchasedCourses: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Course'
    }]
});

const CourseSchema = new mongoose.Schema({
    // Schema definition here
    title: String,
    description: String,
    imageLink: String,
    price: Number
});

const Admin = mongoose.model('Admin', AdminSchema); // This will create a collection called admins in the database
const User = mongoose.model('User', UserSchema); // This will create a collection called users in the database
const Course = mongoose.model('Course', CourseSchema); // This will create a collection called courses in the database

module.exports = {
    Admin,
    User,
    Course
}