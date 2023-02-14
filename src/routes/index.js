const { Router } = require("express")
const router = Router()
const { db } = require('../firebase')

router.get('/artistas', (req, res)=>{
    res.send('Probando artistas')
})

module.exports=router