const express = require('express');
const connectDB = require('./Connection');
const app = express();

connectDB();

app.use('/api/userModel', require('./api/user'));
const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log(`Running on port ${port}`)
})