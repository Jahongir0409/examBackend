const express = require('express')
const path = require('path')
const cookie = require('cookie-parser')
const fileUpload = require('express-fileupload')
const {host, PORT} = require('./config')
const app = express()

app.use(cookie())
app.use( express.static(path.join( __dirname , 'public')))
app.use(express.static(path.join(__dirname, 'uploads')))
app.use(express.json())
app.use(fileUpload({
    limits: {fileSize: 1024 * 1024 * 1024}
}))

//  modules
const modules = require('./modules')
app.use(modules)


app.listen( PORT , ( ) => console.log( 'Server is running on http://' + host + ':' + PORT))