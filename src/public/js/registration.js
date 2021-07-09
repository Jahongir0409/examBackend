const inputUsername  = document.querySelector('#inputUsername')
const inputEmail       = document.querySelector('#inputEmail')
const inputPassword    = document.querySelector('#inputPassword')
const formReg = document.querySelector('#formReg')
const headingTop = document.querySelector('#headingTop')
const imgInput = document.querySelector('#imgInput')

imgInput.addEventListener('change', () => {
    let file = imgInput.files[0].name
    file = file.length > 25 ? file.slice(0, 15) + '...' + file.slice(file.length - 5, file.length) : file
})

formReg.onsubmit = async (event) => {
    event.preventDefault()
    let formData = new FormData()
    formData.append('username', inputUsername.value)
    formData.append('password', inputPassword.value)
    formData.append('email', inputEmail.value)
    formData.append('file', imgInput.files[0])
    let response = await fetch('/register', {
        method: 'POST',
        body: formData
    })
    response = await response.json()
    if (response.body) {
        headingTop.textContent = response.message
        setTimeout(() => {
            window.localStorage.setItem('user', JSON.stringify(response.body))
            window.location = '/admin'
        }, 1000)
    } else {
        headingTop.textContent = response.message
    }
}
