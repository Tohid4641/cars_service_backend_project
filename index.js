//Require Express Func
const express = require('express')
const app = express()
const path = require('path')

// Require BodyParser
const bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json()) //-->  { extended:true }


//Require Mongoose
const mongoose = require("mongoose");

//Require Config
const config = require('./config')

// Accesssing Environment Variables
const PORT = config.PORT
const DB_URL = config.DB_URL

//Mongo Database Connection
mongoose.connect(DB_URL).then(() => {
  console.log("Database Connected...");
}).catch((err)=>{
    console.log("Connection Failed! to Database");
})

// Requiring Routers
const error = require('./router/404');
const about = require('./router/about');
const booking = require('./router/booking');
const contact = require('./router/contact');
const service = require('./router/service');
const team = require('./router/team');
const testimonial = require('./router/testimonial');

// Requiring Controllers
const bookingControl = require('./controller/bookingControl')

// Static Path
const staticPath = path.join(__dirname)
app.use(express.static(staticPath))

// Set Template Engine
app.set('view engine','ejs')

//Handdle Get request in Homepage
app.get('/home',(req,res)=>{
  res.render(path.join(__dirname,'./views/index.ejs'))
})

//Handdle Post request in Homepage
app.post('/home/booked',(req,res)=>{
  bookingControl(req,res);
})

// Use all Routers
app.use('/error',error);
app.use('/about',about);
app.use('/booking',booking);
app.use('/contact',contact);
app.use('/service',service);
app.use('/team',team);
app.use('/testimonial',testimonial);

// Creating Server
app.listen(PORT, () => {
  console.log(`Example app listening on port http://localhost:${PORT}/home`)
})


