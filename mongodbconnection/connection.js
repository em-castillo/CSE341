const mongoose = require('mongoose');

const URI = "mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@cluster0.jjximnf.mongodb.net/?retryWrites=true&w=majority";

const connectDB = async() => {
    await mongoose.connect(URI);
    console.log('db connected!');
};

module.exports = connectDB;