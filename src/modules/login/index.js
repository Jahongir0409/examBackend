const express = require('express')
const {GET, POST, tokenAnlys} = require('./controller')

const loginRoute = express.Router()
loginRoute.route('/login')
    .get(tokenAnlys, GET)
    .post(POST)

module.exports = loginRoute