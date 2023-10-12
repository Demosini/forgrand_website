const nav = document.querySelector('.nav__mobile')
const burgerBtn = document.querySelector('.burger-btn')
const barsIco = document.querySelector('.fa-bars')
const xIco = document.querySelector('.fa-arrow-right')
const footerYear = document.querySelector('.footer__year')
const accord = document.querySelectorAll('.offers-accordion__offer')
const cards = document.querySelectorAll('.all-price__box')
const cookieBtn = document.querySelector('.cookie-btn')
const cookieBox = document.querySelector('.cookie-alert')

// burger
const hideNav = () => {
	nav.classList.toggle('nav__mobile-active')
	barsIco.classList.toggle('hide')
	xIco.classList.toggle('hide')
}

// current year
const currentYear = () => {
	const year = new Date().getFullYear()
	footerYear.innerText = year
}
currentYear()

const accordion = () => {
	accord.forEach(list => {
		list
	})
}

cards.forEach(card => {
	card.addEventListener('touchstart', function () {
		this.classList.toggle('touched')
	})
})

const showCookie = () => {
	const cookieEaten = localStorage.getItem('cookie')

	if (cookieEaten) {
		cookieBox.classList.add('hide')
	}
}
showCookie()

const handleCookieBox = () => {
	localStorage.setItem('cookie', 'true')
	cookieBox.classList.add('hide')
}

burgerBtn.addEventListener('click', hideNav)
cookieBtn.addEventListener('click', handleCookieBox)
