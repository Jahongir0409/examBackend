const inputUsername  = document.querySelector('#inputUsername')
const inputPassword    = document.querySelector('#inputPassword')

const formLogin = document.querySelector('#formLogin')
const loginTitle = document.querySelector('#loginTitle')

formLogin.onsubmit = async (event) => {
    event.preventDefault()
    let response = await request('/login', 'POST', {
        username: inputUsername.value,
        password: inputPassword.value
    })
    if (response.body) {
        loginTitle.textContent = response.message
        setTimeout(() => {
            window.location = '/admin'
        }, 1000)
    } else {
        loginTitle.textContent = response.message
    }
}
