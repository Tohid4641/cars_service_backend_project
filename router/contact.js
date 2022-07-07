const express = require('express')
const router = express.Router()
const contactControl = require('../controller/contactControl')


router.get('/', (req,res)=>{
    res.render('../views/contact.ejs')
})

router.post('/send',(req,res)=>{
    contactControl(req,res);
})

module.exports=router;