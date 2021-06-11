const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');
const { get404Page } = require('./controllers/error');

const app = express();


//SETTING APP GLOBAL VARIABLES WITH EXPRESS for out templating engine and templates folder
app.set('view engine', 'ejs');
app.set('views', 'views'); //2nd param is our templates folder

app.use(bodyParser.urlencoded({ extended: true }));

//TO SERVE A FILE STATICALLY
app.use(express.static(path.join(__dirname, 'public')));
//you can add more static folders

app.use('/admin', adminRoutes);
app.use('/', shopRoutes);


//IF THE REQUEST IS NOT MET BY ANY OF THE ROUTES ABOVE
app.use(get404Page)

app.listen(3000)