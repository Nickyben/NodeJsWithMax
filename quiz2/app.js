const http = require('http');

//const routes =  require('./routes')//relative path to this project

const express = require("express");

const app = express();

// app.use((req,res, next)=>{
//   console.log("first middleware:just a dummy log to the console")
//   next();
  
// })

// app.use((req, res, next) => {
//   console.log("second middleware: just another crappy text on the console")
//   next();

// })
app.use('/users', (req, res, next) => {
  console.log("in the fourth middleware")
  res.send(`
  <ul>
    <li>Nicholas</li>
    <li>Ikechukwu</li>
    <li>@IkNickyben</li>
    <li>on twitter</li>
    <li>@IkNickyben</li>
    <li>on Instagram</li>
  </ul>
  `)
})



app.use('/', (req, res, next) => {
 console.log("in the third middleware")
  res.send(`
  <h1>I'm Nicholas Ikechukwu</h1>
  <h2>Follow me on twitter @IkNickyben</h2>
  `)
})




//http.createServer(app).listen(3000);
app.listen(3000)