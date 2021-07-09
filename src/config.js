const ip = require('./lib/ip')

const host = ip({internal: false})
const PORT = process.env.PORT || 4009

module.exports = {host, PORT}