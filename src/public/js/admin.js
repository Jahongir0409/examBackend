const form      = document.querySelector('#formAdd')
const inputTitle  = document.querySelector('#inputTitle')
const inputVideo = document.querySelector('#inputVideo')
const title       = document.querySelector('.title')

inputVideo.addEventListener('change', () => {
    let file = inputVideo.files[0].name
    file = file.length > 25 ? file.slice(0, 15) + '...' + file.slice(file.length - 5, file.length) : file
})

form.addEventListener('submit', async (e) => {
    e.preventDefault()
    let formData = new FormData()
    
    formData.append('title', inputTitle.value)
    formData.append('file', inputVideo.files[0])

    let response = await fetch('/admin', {
        method: 'POST',
        body: formData
    })
    response = await response.json()
    if (response) {
        title.textContent = response.message
        setTimeout(() => {
            title.textContent = 'Upload a video'
        }, 1000)
        inputTitle.value = null
    }
})
