import { ScrollTrigger } from "gsap/ScrollTrigger"

export default defineNuxtRouteMiddleware((to, from) => {
	// Kill previous scroll triggers
	ScrollTrigger.getAll().forEach(el => el.kill())

	if (to.path !== from.path && process.client) {
    // window.scrollTo(0, 0)
  }
})