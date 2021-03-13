require('dotenv').config()
const express = require('express')
const app = express()
const port = process.env.PORT || 3000
const route = require('./routes')
const db = require('./config/db')


db.connect();

//middleware (body)
app.use(express.urlencoded({
  extended: true
}))
app.use(express.json())

route(app)

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})