const express = require('express');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require("../models/user");

const router = express.Router();

// SIGNUP

router.post("/signup", async (req, res) => {
    const hashedPassword = await bcrypt.hash(req.body.password, 10);
    const newUser = new User({
        name: req.body.name,
        username: req.body.username,
        password: hashedPassword,
        status: req.body.status,
        date: req.body.date,
    });
    try {
        const user = await newUser.save();
        res.json({
            "data": user,
            "message": "Signup was Successfull"
        });
    } catch (error) {
        res.json(error);
    }
});

// LOGIN

router.post("/signin", async (req, res) => {

    try {
        // at first find user byusername
        const user = await User.findOne({ username: req.body.username });

        if (user) {
            // check password is valid or not
            const isValid = await bcrypt.compare(req.body.password, user.password);
            if (isValid) {
                // generate token
                const token = jwt.sign({
                    id: user._id,
                    username: user.username,
                }, process.env.JWT_SECRET, {
                    expiresIn: "10h"
                });

                res.status(200).json({
                    "access_token": token,
                    "message": "Login Successfull"
                })


            } else {
                res.status(401).json({
                    "error": "Authentication failed!"
                });
            }
        } else {
            res.status(401).json({
                "error": "Authentication failed!"
            });
        }

    } catch (error) {
        res.json(error);
    }
});


module.exports = router;