const render = require('../../lib/render.js')
const jwt = require('jsonwebtoken')
const path = require('path')
const SECRET_KEY = 'key'
const {addVid} = require('./model')

const GET = (req, res) => {
	res.sendFile(render('admin.html'))
}

const POST = (req, res) => {
    let file = req.files.file
    let payload = jwt.verify(req.cookies.token, SECRET_KEY)
    let fileName = new Date().getTime() + file.name.replace(/\s/g, "_").trim()
    file.mv(path.join(process.cwd(), 'src', 'uploads', 'vids', fileName))
    addVid(req.body, payload, fileName)
    res.status(200).send({
        message: 'New video uploaded '
    })
}
module.exports = {GET, POST}