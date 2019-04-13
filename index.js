const express = require('express')
const path = require('path')

const data = require('./data')
const logger = require('./middleware/logger')

const app = express()

// app.use(logger)

/* Get All */
app.get('/api/members', (req, res) => {
    res.json(data.members)
})

/* Get One */
app.get('/api/members/:id', (req, res) => {
    const found = data.members.some(member => member.id === parseInt(req.params.id))

    if (found) {
      res.json(data.members.filter(member => member.id === parseInt(req.params.id)))
    } else {
      res.status(400).json({ msg: `No member with the id of ${req.params.id}` })
    }
})

// SET STATIC FOLDER
app.use(express.static(path.join(__dirname, 'public')))

const PORT = process.env.PORT || 5000

app.listen(PORT, () => console.log(`Server Runinng ${PORT}`)
)