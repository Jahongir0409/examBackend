const express = require('express')
const {GET, POST} = require('./controller')

const adminRouter = express.Router()
adminRouter.route('/admin')
    .get(GET)
    .post(POST)

module.exports = adminRouter