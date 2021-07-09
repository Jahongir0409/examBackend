let iconModal = document.querySelector('#iconModal')
let iconModal2 = document.querySelector('#iconModal2')
let middleLeft = document.querySelector('.middle-left')
let middleMain = document.querySelector('.middle-main')
let moreWrapper = document.querySelector('.more-wrapper')
let elipsisWrapper = document.querySelector('.elipsis-wrapper')

iconModal.onclick = () => {
	iconModal.classList.add('plus-remove')
	iconModal2.classList.remove('plus-remove')
	iconModal2.classList.add('plus-add')
	middleLeft.classList.add('plus-remove')
	middleLeft.classList.remove('middle-left')
	leftModal.classList.remove('plus-remove')
	middleMain.style.paddingLeft = "0" + "px"
}
iconModal2.onclick = () => {
	iconModal.classList.remove('plus-remove')
	iconModal2.classList.add('plus-remove')
	iconModal2.classList.remove('plus-add')
	middleLeft.classList.remove('plus-remove')
	middleLeft.classList.add('middle-left')
	leftModal.classList.add('plus-remove')
	middleMain.style.paddingLeft = "246" + "px"
}
moreWrapper.onclick = () => {
	moreIcon.classList.add('plus-remove')
	moreWrapper.classList.add('plus-remove')
	moreIcon2.classList.remove('plus-remove')
	moreIcon2.classList.add('plus-add')
	moreWrapper2.classList.remove('plus-remove')
	morePages.classList.remove('plus-remove')
}
moreWrapper2.onclick = () => {
	moreIcon.classList.remove('plus-remove')
	moreWrapper.classList.remove('plus-remove')
	moreIcon2.classList.add('plus-remove')
	moreWrapper2.classList.add('plus-remove')
	morePages.classList.add('plus-remove')
}

