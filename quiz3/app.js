const path = require('path');
const express = require("express");

const bodyParser = require('body-parser');

const app = express();

app.use(express.static(path.join(__dirname, 'public')))


app.use('/users', (req, res, next) => {
    res.sendFile(path.join(__dirname, 'views', 'usersPage.html'))
})



app.use('/', (req, res, next) => {
    res.sendFile(path.join(__dirname, 'views', 'homePage.html'))
})



app.listen(3000)