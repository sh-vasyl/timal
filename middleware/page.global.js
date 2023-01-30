import { ScrollTrigger } from "gsap/ScrollTrigger"


export default defineNuxtRouteMiddleware((to, from) => {
	ScrollTrigger.getAll().forEach(el => el.kill())
})