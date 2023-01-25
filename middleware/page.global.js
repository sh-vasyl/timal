import { ScrollTrigger } from "gsap/ScrollTrigger"

export default defineNuxtRouteMiddleware((to, from) => {
	// Kill previous scroll triggers
	ScrollTrigger.getAll().forEach(el => el.kill())
})