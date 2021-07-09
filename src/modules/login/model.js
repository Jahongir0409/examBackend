const path = require('path')
const fs = require('fs')

const checkUser = ({username, password}) => {
    let users = fs.readFileSync(path.join(process.cwd(), 'src', 'database', 'users.json'), 'utf-8')
    users = users ? JSON.parse(users) : []
    let found = users.find(u => u.username == username && u.password == password)
    return found
}

module.exports = {checkUser}