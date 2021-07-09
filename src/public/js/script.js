let listVideos = document.querySelector('.list-videos')
const profileImg  = document.querySelector('#profileImg')
const listPages   = document.querySelector('.list-blogs')

let user = window.localStorage.getItem('user')
user = user ? JSON.parse(user) : {}

if (user.profile_link) profileImg.src = 'imgs/' + user.profile_link

function videosRenderer(array, username, profile_link) {
	let string = ""
	array.map(video => {
		string += `
		<li class="list-videos-item">
		<video class="div-video" src=${'/vids/' + video.video_link} controls></video>
		<div class="wrap">
		<h3 class="heading-tertiary">${video.user.username[0].toUpperCase() + video.user.username.slice(1, video.user.username.length)}</h3>
		</div>                  
		<div class="wrapper">
		<h3 class="heading-name" >${video.title}</h3>
		<a  href="download?link=${video.video_link}"><img class="download-png" src="./img/download.png" /></a>
		</div>
		</li> 
		`
	})
	listVideos.innerHTML = string
}
function usersRenderer(array) {
	let string = `
	<li class="list-blogs-item home" data_id="main"><a href="#" class="item-link-channels">
	<ion-icon class="page-icon" name="home"></ion-icon>
	<span class="pages-title">Home</span>
	</a></li>
	`
	array.map(user => {
		string += `
		<li class="list-blogs-item" data-id=${user.user_id}><a href="#" class="item-link-channels">
		<img src=${'imgs/' + user.profile_link} alt="channel-icon" width="30px" height="30px" class"img-following-pages">
		<span class="title-following-pages">${user.username}</span>
		<div class="online-follwing-icon"></div>
		</a></li>
		`
	})
	listPages.innerHTML = string
	const listBlogs = document.querySelectorAll('.list-blogs-item')
	listBlogs.forEach((listBlog) => {
        listBlog.addEventListener('click', () => {
            if (listBlog.dataset.id) {
                let currentUser = array.find(user => user.user_id == listBlog.dataset.id)
                videosRenderer(currentUser.videos, currentUser.username, currentUser.profile_link)
            } else getData()
        })
    })
}
async function getData () {
	let response = await request('/videos')
	videosRenderer(response)
}
async function getUsers () {
	let response = await request('/users') 
	usersRenderer(response)
}
getData()
getUsers()


	// modalOpen.onclick = () => {
	// 		elWrapper.classList.remove('plus-remove')
	// 	}
	// 	modalExit.onclick = () => {
	// 		elWrapper.classList.add('plus-remove')
	// 	}
	// 	imgIframe.onclick =  () => {
	// 		imgIframe.classList.add('plus-remove')
	// 		modalBox.classList.remove('remove')
	// 	}		
	// 	modalCloser.onclick =  () => {
	// 		imgIframe.classList.remove('plus-remove')
	// 		modalBox.classList.add('remove')
	// 	}


