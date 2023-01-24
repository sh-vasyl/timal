import { ScrollTrigger } from "gsap/ScrollTrigger"
import { ScrollSmoother } from "gsap/ScrollSmoother"

export default defineNuxtRouteMiddleware(async (to, from) => {
	// animation restart

	setTimeout(() => {
		console.log(ScrollSmoother.get());
		console.log(ScrollTrigger.getAll());

		// ScrollSmoother.get().refresh()
		// ScrollTrigger.getAll().forEach(el => el.kill())
	}, 3000)



})