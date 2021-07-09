const render = require('../../lib/render.js')
const GET = (req, res) => {
	res.sendFile(render('index.html'))
}
module.exports = { GET }
