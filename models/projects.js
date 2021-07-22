//jshint esversion:9


const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ImageSchema = new Schema({
    url: String,
    filename: String
});

ImageSchema.virtual('thumbnail').get(function () {
    return this.url.replace('/upload', '/upload/w_480/h_480');
});


const ProjectSchema = new Schema({
    title: String,
    subtitle: String,
    images: ImageSchema,
    body: String,
});


module.exports = mongoose.model("Project", ProjectSchema);