const express = require('express')
const app = express()
require('dotenv').config()
const routes=require('./src/routes/index')

app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.use(routes)

app.listen(process.env.PORT, () => {
  console.log(`Escuchando puerto: ${process.env.PORT}`)
})
