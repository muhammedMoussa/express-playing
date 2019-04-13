const express = require('express')
const path = require('path')

const logger = require('./middleware/logger')

const app = express()
app.use(logger)

// SET STATIC FOLDER
app.use(express.static(path.join(__dirname, 'public')))

// Api Router
app.use('/api/members', require('./routes/api/members'))

const PORT = process.env.PORT || 5000
app.listen(PORT, () => console.log(`Server Runinng ${PORT}`))