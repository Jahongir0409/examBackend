const render = require('../../lib/render.js')
const path = require('path')
const fs = require('fs')
const jwt = require('jsonwebtoken')
const SECRET_KEY = 'key'
const {checkUser} = require('./model')

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
    res.sendFile(render('login.html'))
    
}

const POST = (req, res) => {
    let user = checkUser(req.body)
    if (user) {
        res.cookie('token', jwt.sign(user.user_id, SECRET_KEY))
        res.status(200).send({
            message: "Logged in successfully",
            body: user
        })
    } else {
        res.status(404).send({
            message: "Username or Password wrong"
        })
    }
}



module.exports = {GET, POST, tokenAnlys}