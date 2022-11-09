const express = require('express')
const app = express()
const MongoClient = require('mongodb').MongoClient
require('dotenv').config({path: './config.env'})
const port = process.env.PORT 

let db,
    dbConnectionStr = process.env.DB_STRING,
    dbName = 'Date-Ideas'
console.log(dbConnectionStr)
MongoClient.connect(dbConnectionStr, { useUnifiedTopology: true})
    .then(client => {
        console.log(`connected to ${dbName} database`)
        db = client.db(dbName)
    })

app.set('view engine', 'ejs')
app.use(express.static('public'))
app.use(express.urlencoded({ extended: true }))
app.use(express.json())




app.listen(process.env.PORT || port, ()=>{
    console.log(`Server running on port ${port}`)
})
