const express = require('express');
const app = express();
const cors = require('cors')
const ejs = require('ejs')
//require router

app.use(cors())
app.use(express.json())
app.set('view engine','ejs')
app.use(express.static(__dirname + '/public'))

app.get('/', (req,res) => {
    res.send('Hello World')
})

module.exports = app
