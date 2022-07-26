const express = require('express');
const app = express();
const cors = require('cors')
const ejs = require('ejs')
const blogsController = require('./controllers/blogs')
//require router

app.use(cors())
app.use(express.json())
app.set('view engine','ejs')
app.use(express.static(__dirname + '/public'))

app.get('/', (req,res) => {
    res.sendFile('index.html')
})

app.post('/blogs', blogsController.create)

app.get('/blogs/:id', blogsController.show)

app.get('/blogs', blogsController.index)


module.exports = app
