require('dotenv').config()
const express = require('express')
const app = express()
const port = process.env.PORT || 3000
const route = require('./routes')
//const db = require('./config/db')

//db.connect();


const mongoose = require('mongoose')

mongoose.connect(process.env.MONGO_URL, {
  useNewUrlParser: true,
})
.then(() => console.log('Connected'))
.catch(() => console.log('failed'))

//middleware (body)
app.use(express.urlencoded({
  extended: true
}))
app.use(express.json())

route(app)

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})