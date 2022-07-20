const Blog = require('../models/blog');

<<<<<<< HEAD
async function index (req, res) {
    try {
        const books = await Blog.all;
        res.status(200).json(blog)
=======
async function index(req,res) {
    try {
        const blogs = await Blog.all
        res.status(200).json({blogs})
>>>>>>> ce6f039af9723296b4a24b9f54d1da2ff7e36a2a
    } catch (err) {
        res.status(500).json({err})
    }
}

async function create(req, res) {
    try {
        const blog = await Blog.create(req.body);
        res.status(201).json(blog)
    } catch (err) {
        res.status(422).json({err})
    }
}

async function show(req, res) {
    try {
        const blog = await Blog.findById(req.params.id);
        res.status(204).json({...blog});
    } catch (err) {
        res.status(404).json({err});
    };
}

module.exports = { index, create, show}