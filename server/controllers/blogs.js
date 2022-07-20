const Blog = require('../models/blog');

async function create(req, res) {
    try {
        const blog = await Blog.create(req.body);
        res.status(201).json(blog)
    } catch (err) {
        red.status(422).json({err})
    }
}

async function show (req, res) {
    try {
        const blog = await Blog.findById(req.params.id);
        res.status(204).json({...blog});
    } catch (err) {
        res.status(404).json({err});
    };
}

module.exports = { create, show}