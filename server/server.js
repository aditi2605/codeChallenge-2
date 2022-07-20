const express = require('express');
const app = express();
const cors = require('cors')
const ejs = require('ejs')
const Blog = require('./models/blog')
//require router

app.use(cors())
app.use(express.json())
app.set('view engine','ejs')
app.use(express.static(__dirname + '/public'))

app.get('/', (req,res) => {
    res.send('Hello World')
})

app.post('/blogs', (req, res) => {
    const data = req.body;
    const newBlog = Blog.create(data);
    res.status(201).send({message: `${newBlog.title} successfully added`})
})

app.get('/blogs', (req, res) => {
    const blogs = Blog.all;
    res.status(200).send(blogs);
})

app.get('/blogs/:id', (req,res) => {
    const blogId = parseInt(req.params.id);
    const numOfBlogs = Blog.all.length;
    res.status(200).send(selectedBlog);
})

module.exports = app
