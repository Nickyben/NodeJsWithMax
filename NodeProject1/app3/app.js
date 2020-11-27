const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');


const app = express();

//SETTING APP GLOBAL VARIABLES WITH EXPRESS for out templating engine and templates folder
app.set('view engine', 'pug');
app.set('views', 'views'); //2nd param is our templates folder

const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');

app.use(bodyParser.urlencoded({ extended: true }));

//TO SERVE A FILE STATICALLY
app.use(express.static(path.join(__dirname, 'public')));
//you can add more static folders

app.use('/admin', adminRoutes.routes);
app.use('/', shopRoutes);


//IF THE REQUEST IS NOT MET BY ANY OF THE ROUTES ABOVE
app.use((req, res, next) => {

    res.status(404).sendFile(path.join(__dirname, 'views', '404.html')); //the './' is optional

    // res.status(404).send(`
    // <h1>Ouch!! Page Not Found...</h1>
    // `)
})

app.listen(3000)