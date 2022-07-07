const express = require('express')
const router = express.Router()
const bookingControl = require('../controller/bookingControl')

router.get('/', (req,res)=>{
    res.render('../views/booking.ejs')
})

router.post('/booked',(req,res)=>{
  bookingControl(req,res);
})

module.exports=router