const express = require('express')
const {GET, POST, tokenAnlys} = require('./controller')

const registerRoute = express.Router()
registerRoute.route('/register')
    .get(tokenAnlys, GET)
    .post(POST)

module.exports = registerRoute