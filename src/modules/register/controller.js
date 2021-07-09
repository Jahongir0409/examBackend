const render = require('../../lib/render.js')
const path = require('path')
const fs = require('fs')
const jwt = require('jsonwebtoken')
const SECRET_KEY = 'key'
const {addUser} = require('./model')

function tokenAnlys (req, res, next) {
    try {
        if (req.cookies.token) {
            let users = fs.readFileSync(path.join(process.cwd(), 'src', 'database', 'users.json'), 'utf-8')
            users = users ? JSON.parse(users) : []
            let payload = jwt.verify(req.cookies.token, SECRET_KEY)
            let found = users.find(user => user.user_id == payload)
            if (found) {
                res.redirect('/admin')
            } else throw 'error'
        } else throw 'error'
    } catch (err) {
        next()
    }
}
const GET = (req, res) => {
    res.sendFile(render('register.html'))
}

const POST = (req, res) => {
    let file = req.files.file
    let fileName = new Date().getTime() + file.name.replace(/\s/g, "_").trim()
    file.mv(path.join(process.cwd(), 'src', 'uploads', 'imgs', fileName))
    let newUser = addUser(req.body, fileName)
    if (newUser) {
        res.cookie('token', jwt.sign(newUser.user_id, SECRET_KEY))
        res.status(200).send({
            message: 'New user added !',
            body: newUser
        })
    } else {
        res.status(404).send({
            message: 'user already exists!'
        })
    }
}



module.exports = {GET, POST, tokenAnlys}