const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const morgan = require('morgan')

const app = express()
app.use(morgan('dev'))
app.use(bodyParser.json())
app.use(cors())
require('dotenv')

// const HOST = process.env.HOST
// const PORT = process.env.PORT

app.get('/status', (req, res) => {
  res.send('OK')
})

app.listen(8088, () => {
  console.log('Server running on http://localhost:8088')
})
