const express = require('express')
const app = express()
require('dotenv').config()
const routes=require('./src/routes/index')

const cors = require('cors');
app.use(cors({
origin: ['http://localhost:5173']
}));

app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.use(routes)

app.listen(process.env.PORT, () => {
  console.log(`Escuchando puerto: ${process.env.PORT}`)
})
