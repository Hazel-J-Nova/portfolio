//jshint esversion:9

const express = require("express");
const router = express.Router();
const catchAsync = require("../utils/catchAsync");
const Project = require("../models/projects");


router.get("/", catchAsync(async (req, res) => {
    const projects = await Project.find();
    console.log(projects)
    
    res.render("index", {projects} );
}));


module.exports = router;