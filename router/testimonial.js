const express = require('express')
const router = express.Router()

router.get('/', (req,res)=>{
    res.render('../views/testimonial.ejs')
})

module.exports=router