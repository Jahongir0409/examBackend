const homeRouter = require('./home')
const adminRouter = require('./admin')
const registerRoute = require('./register')
const loginRoute = require('./login')
const videoRoute = require('./video')
const userRoute = require('./user')
const downloadRoute = require('./download')

module.exports = [homeRouter, adminRouter, registerRoute, videoRoute, userRoute, downloadRoute, loginRoute]
