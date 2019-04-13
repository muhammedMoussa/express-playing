const express = require('express')
const path = require('path')

const data = require('./data')
const logger = require('./middleware/logger')

const app = express()

app.use(logger)

app.get('/api/members', (req, res) => {
    res.json(data.members)
})

// SET STATIC FOLDER
app.use(express.static(path.join(__dirname, 'public')))

const PORT = process.env.PORT || 5000

app.listen(PORT, () => console.log(`Server Runinng ${PORT}`)
)