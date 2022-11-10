const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const MongoClient = require('mongodb').MongoClient
require('dotenv').config({ path: './config.env' })
const port = process.env.PORT

let db, ideasCollection
const dbConnectionStr = process.env.DB_STRING,
  dbName = 'Date-Ideas'

MongoClient.connect(dbConnectionStr, { useUnifiedTopology: true }).then(
  client => {
    console.log(`connected to ${dbName} database`)
    db = client.db(dbName)
    ideasCollection = db.collection('ideas')
  }
)

app.set('view engine', 'ejs')
app.use(express.static('public'))
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

app.get('/', (request, response) => {
  try {
    db.collection('ideas')
      .find()
      .toArray()
      .then(results => {
        console.log(results)
        response.render('index.ejs', { ideas: results })
      })
  } catch (error) {
    console.error(error)
  }
})

app.post('/addIdea', (request, response) => {
  ideasCollection
    .insertOne(request.body)
    .then(result => {
      console.log(`successful post of ${result}`)
      response.redirect('/')
    })
    .catch(error => console.error(error))
})

app.listen(process.env.PORT || port, () => {
  console.log(`Server running on port ${port}`)
})
