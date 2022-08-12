const express = require("express");
const courseRouter = require('./routes/courseHandler');
const userRouter = require('./routes/userHandler');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
require('dotenv').config();
const cors = require('cors');

const app = express();

app.use(cors())

// send json body
app.use(bodyParser.json());

// creating corse route
app.use("/api/v1", courseRouter);
app.use("/api/v1", userRouter);

const errorHandler = (err, req, res, next) => {
    if (res.headersSent) {
        return next(err);
    }

    res.status(500).json({
        error: err
    });
};
app.use(errorHandler);

mongoose.connect(process.env.DB_CONNECTION_URL, () => {
    console.log('Connected DB at ' + process.env.DB_CONNECTION_URL);
});

app.listen(process.env.PORT, () => {
    console.log('Server is running at port', process.env.PORT);
});