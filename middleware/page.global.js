import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { ScrollSmoother } from 'gsap/ScrollSmoother'
// const { toggleTransitionComplete } = useTransitionComposable();


export default defineNuxtRouteMiddleware((to, from) => {
	// ScrollTrigger.getAll().forEach(el => el.kill())

	const nuxtApp = useNuxtApp()

	nuxtApp.callHook('app:mounted').then(() => {
		// console.log('mounted');
		// toggleTransitionComplete(true);
	})


})