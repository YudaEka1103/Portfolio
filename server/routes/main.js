const express = require('express')
const router = express.Router()

router.get('', (req, res) => {
    const locals = {
        title: "NodeJs",
        description: "Simple blog with NodeJs, Express & MongoDb."
    }
    res.render('index', {locals})
})

router.get('/about', (req,res)=>{
    res.render('about')
})
module.exports = router
