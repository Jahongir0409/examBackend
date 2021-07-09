// let searchInput = document.querySelector('#searchInput')
// let btnMic = document.querySelector('.btn-microphone')

// searchInput.onkeyup = (event) => {
// 	if (searchInput.value != '') {
// 		listVideos.innerHTML = null
// 		let str  = event.target.value.toLowerCase()
// 		for( let index in films) {
// 			let startIndex = films[index].title.toLowerCase().search(str)
// 			if (films[index].title.toLowerCase().includes(str)) {
// 				let searchedWord = films[index].title.slice( startIndex, startIndex + str.length)
// 				let initWord     = films[index].title.slice( films[index].title[0], startIndex)
// 				let endWord      = films[index].title.slice(startIndex + str.length, films[index].title.length)
// 				let li = document.createElement('li')
// 				let divVideo = document.createElement('div')
// 				let modalBox = document.createElement('div')
// 				let modalCloser = document.createElement('ion-icon')
// 				let imgIframe = document.createElement('img')
// 				let divTxWr = document.createElement('div')
// 				let imgVideo = document.createElement('img')
// 				let h3 = document.createElement('h3')
// 				let modalOpen = document.createElement('ion-icon')
// 				let elWrapper = document.createElement('div')
// 				let modalExit = document.createElement('ion-icon')
// 				let modalEl = document.createElement('div')
// 				let removeCircle = document.createElement('ion-icon')
// 				let spanDel = document.createElement('span')
// 				let divTxExtra = document.createElement('div')
// 				let vidText1 = document.createElement('span')
// 				let vidText2 = document.createElement('span')
// 				let vidText3 = document.createElement('span')

// 				li.classList.add('list-videos-item')
// 				divVideo.classList.add('div-video')
// 				modalBox.classList.add('modal-box')
// 				modalBox.classList.add('remove')
// 				modalBox.classList.add('none')
// 				modalCloser.classList.add('modal-icon')
// 				imgIframe.classList.add('iframe-image')
// 				divTxWr.classList.add('videos-text-wrapper')
// 				imgVideo.classList.add('img-videos')
// 				h3.classList.add('heading-tertiary')
// 				modalOpen.classList.add('icon-ellipsis')
// 				elWrapper.classList.add('elipsis-wrapper')
// 				elWrapper.classList.add('plus-remove')
// 				modalExit.classList.add('modal-icon')
// 				modalEl.classList.add('modal-elipsis')
// 				removeCircle.classList.add('modal-icon')
// 				divTxExtra.classList.add('videos-text-extra')
// 				vidText1.classList.add('videos-watching')
// 				vidText2.classList.add('videos-watching')
// 				vidText3.classList.add('videos-watching')

// 				modalOpen.id = "modalOpen"
// 				modalExit.id = "modalExit"

// 				modalOpen.setAttribute('name', 'ellipsis-vertical')
// 				modalCloser.setAttribute('name', 'close')
// 				modalExit.setAttribute('name', 'close')
// 				removeCircle.setAttribute('name', 'remove-circle')
		
				
// 				divVideo.innerHTML = films[index].sourceLink
// 				modalBox.innerHTML = films[index].sourceLink
// 				imgIframe.setAttribute("src" , films[index].img)
// 				imgVideo.setAttribute("src" , films[index].img)
		
// 				h3.innerHTML = initWord +`<mark>${searchedWord}</mark>` + endWord
// 				spanDel.textContent = "Delete"
// 				vidText1.textContent = "From Channel"
// 				vidText2.textContent = "20 thous. times watched"
// 				vidText3.textContent = "6 months ago."
		
// 				modalBox.appendChild(modalCloser)
// 				modalEl.appendChild(removeCircle)
// 				modalEl.appendChild(spanDel)
		
// 				elWrapper.appendChild(modalExit)
// 				elWrapper.appendChild(modalEl)
		
// 				divTxWr.appendChild(imgVideo)
// 				divTxWr.appendChild(h3)
// 				divTxWr.appendChild(modalOpen)
// 				divTxWr.appendChild(elWrapper)
		
// 				divTxExtra.appendChild(vidText1)
// 				divTxExtra.appendChild(vidText2)
// 				divTxExtra.appendChild(vidText3)
		
// 				li.appendChild(divVideo)
// 				document.body.appendChild(modalBox)
// 				li.appendChild(imgIframe)
// 				li.appendChild(divTxWr)
// 				li.appendChild(divTxExtra)
// 				listVideos.appendChild(li)
// 				modalOpen.onclick = () => {
// 					elWrapper.classList.remove('plus-remove')
// 				}
// 				modalExit.onclick = () => {
// 					elWrapper.classList.add('plus-remove')
// 				}
// 				imgIframe.onclick =  () => {
// 					imgIframe.classList.add('plus-remove')
// 					modalBox.classList.remove('remove')
// 				}		
// 				modalCloser.onclick =  () => {
// 					imgIframe.classList.remove('plus-remove')
// 					modalBox.classList.add('remove')
// 				}
// 			}
// 		}
// 	} else {
// 		listVideos.innerHTML = null
// 		filmsRenderer(films)
// 	}
// }
// let SpeechRecognition = window.webkitSpeechRecognition
// let voice = new SpeechRecognition()
// voice.lang = "uz-Uz"
// voice.continuous = false

// btnMic.onclick = () => {
// 	voice.start()
// 	voice.onresult = (event) => {
// 		let result = event.results[0][0]['transcript']
// 		if (result != '') {
// 			listVideos.innerHTML = null
// 			let str  = result.toLowerCase()
// 			for( let index in films) {
// 				let startIndex = films[index].title.toLowerCase().search(str)
// 				if (films[index].title.toLowerCase().includes(str)) {
// 					let searchedWord = films[index].title.slice( startIndex, startIndex + str.length)
// 					let initWord     = films[index].title.slice( films[index].title[0], startIndex)
// 					let endWord      = films[index].title.slice(startIndex + str.length, films[index].title.length)
// 					let li = document.createElement('li')
// 					let divVideo = document.createElement('div')
// 					let modalBox = document.createElement('div')
// 					let modalCloser = document.createElement('ion-icon')
// 					let imgIframe = document.createElement('img')
// 					let divTxWr = document.createElement('div')
// 					let imgVideo = document.createElement('img')
// 					let h3 = document.createElement('h3')
// 					let modalOpen = document.createElement('ion-icon')
// 					let elWrapper = document.createElement('div')
// 					let modalExit = document.createElement('ion-icon')
// 					let modalEl = document.createElement('div')
// 					let removeCircle = document.createElement('ion-icon')
// 					let spanDel = document.createElement('span')
// 					let divTxExtra = document.createElement('div')
// 					let vidText1 = document.createElement('span')
// 					let vidText2 = document.createElement('span')
// 					let vidText3 = document.createElement('span')

// 					li.classList.add('list-videos-item')
// 					divVideo.classList.add('div-video')
// 					modalBox.classList.add('modal-box')
// 					modalBox.classList.add('remove')
// 					modalBox.classList.add('none')
// 					modalCloser.classList.add('modal-icon')
// 					imgIframe.classList.add('iframe-image')
// 					divTxWr.classList.add('videos-text-wrapper')
// 					imgVideo.classList.add('img-videos')
// 					h3.classList.add('heading-tertiary')
// 					modalOpen.classList.add('icon-ellipsis')
// 					elWrapper.classList.add('elipsis-wrapper')
// 					elWrapper.classList.add('plus-remove')
// 					modalExit.classList.add('modal-icon')
// 					modalEl.classList.add('modal-elipsis')
// 					removeCircle.classList.add('modal-icon')
// 					divTxExtra.classList.add('videos-text-extra')
// 					vidText1.classList.add('videos-watching')
// 					vidText2.classList.add('videos-watching')
// 					vidText3.classList.add('videos-watching')

// 					modalOpen.id = "modalOpen"
// 					modalExit.id = "modalExit"

// 					modalOpen.setAttribute('name', 'ellipsis-vertical')
// 					modalCloser.setAttribute('name', 'close')
// 					modalExit.setAttribute('name', 'close')
// 					removeCircle.setAttribute('name', 'remove-circle')

// 					divVideo.innerHTML = films[index].sourceLink
// 					modalBox.innerHTML = films[index].sourceLink
// 					imgIframe.setAttribute("src" , films[index].img)
// 					imgVideo.setAttribute("src" , films[index].img)

// 					h3.innerHTML = initWord +`<mark>${searchedWord}</mark>` + endWord
// 					spanDel.textContent = "Delete"
// 					vidText1.textContent = "From Channel"
// 					vidText2.textContent = "20 thous. times watched"
// 					vidText3.textContent = "6 months ago."

// 					modalBox.appendChild(modalCloser)
// 					modalEl.appendChild(removeCircle)
// 					modalEl.appendChild(spanDel)

// 					elWrapper.appendChild(modalExit)
// 					elWrapper.appendChild(modalEl)

// 					divTxWr.appendChild(imgVideo)
// 					divTxWr.appendChild(h3)
// 					divTxWr.appendChild(modalOpen)
// 					divTxWr.appendChild(elWrapper)

// 					divTxExtra.appendChild(vidText1)
// 					divTxExtra.appendChild(vidText2)
// 					divTxExtra.appendChild(vidText3)

// 					li.appendChild(divVideo)
// 					document.body.appendChild(modalBox)
// 					li.appendChild(imgIframe)
// 					li.appendChild(divTxWr)
// 					li.appendChild(divTxExtra)
// 					listVideos.appendChild(li)
// 					modalOpen.onclick = () => {
// 						elWrapper.classList.remove('plus-remove')
// 					}
// 					modalExit.onclick = () => {
// 						elWrapper.classList.add('plus-remove')
// 					}
// 					imgIframe.onclick =  () => {
// 						imgIframe.classList.add('plus-remove')
// 						modalBox.classList.remove('remove')
// 					}		
// 					modalCloser.onclick =  () => {
// 						imgIframe.classList.remove('plus-remove')
// 						modalBox.classList.add('remove')
// 					}
// 				}
// 			}
// 		} else {
// 			listVideos.innerHTML = null
// 			filmsRenderer(films)
// 		}
// 	}
// 	voice.onspeechend = function (){
// 		voice.stop()
// 	}
// }
// filmsRenderer(films)



