const express = require('express')
const cors = require('cors')
const { dbConnect } = require('../config/db.js')
const app = express()
const PORT = process.env.PORT || 3001

app.get('/', (req, res) => {
  res.send('¡Bienvenido a nuestra API!')
})

app.get('/api', (req, res) => {
  res.send('wlcome home')
})

app.use(cors())
app.use(express.json())

app.use('/api', require('../src/routes/index.js'))

dbConnect()
app.listen(PORT, () => {
  console.log(`Ready on port ${PORT}`)
})