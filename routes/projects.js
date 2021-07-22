//jshint esversion:9

const express = require("express");
const router = express.Router();
const catchAsync = require("../utils/catchAsync");
const multer = require("multer");
const Project = require("../models/projects");
const { storage } = require("../cloudinary");
const upload = multer({ storage });
const isLoggedIn = require("../utils/middleware");



router.get("/new", isLoggedIn, (req, res) => {
    res.render("projects/new");
});
router.post("/new", upload.single("image"), catchAsync(async (req, res) => {
    const project = new Project(req.body.project);
    ;
    project.images = { url: req.file.path, filename: req.file.filename };
    console.log(project.images.url)
    await project.save();
    res.redirect("/");
}));

router.get("/:projectId", catchAsync(async (req, res) => {
     const id = req.params;
    console.log(id)
   const project = await Project.findById(id)
   
    res.render("projects/project", {project});
}));




module.exports = router;
