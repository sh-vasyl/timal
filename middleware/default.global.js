import { ScrollTrigger } from "gsap/ScrollTrigger"

export default defineNuxtRouteMiddleware((to, from) => {

	// animation restart
	ScrollTrigger.getAll().forEach(el => el.animation.restart())

	// Header
	const header = document.querySelector('.header')
	to.name !== 'index' ? header.classList.add('header-inner') : header.classList.remove('header-inner')

})