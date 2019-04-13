const moment = require('moment')

const logger = (req, res, next) => {
    console.log('Response Here')
    console.log(`${req.protocol}://${req.get('host')}${req.originalUrl}:${moment().format()}`)
}

module.exports = logger