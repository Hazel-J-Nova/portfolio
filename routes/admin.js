//jshint esversion:9

const express = require("express");
const router = express.Router();
const catchAsync = require("../utils/catchAsync");
const passport = require("passport");
const User = require("../models/users");



router.get("/login", (req, res) => {

    res.render("admin/login" )
});



router.post("/login", passport.authenticate("local", { failureRedirect: "/login" }), catchAsync(async (req, res) => {
    res.redirect("/")
}))

router.get("/register", (req, res) => {
    res.render("admin/register");
});

router.post("/register", catchAsync(async (req, res, next) => {
    try {
        console.log(req.body);
        const { email, username, password } = req.body;
        const user = new User({ email, username });
        console.log(user)
        const registerdUser = await User.register(user, password);
        req.login(registerdUser, err => {
            if (err) return next(err);
        });
        res.render("index");
    } catch (e) {
        res.redirect("register");
    }
}))




module.exports = router;