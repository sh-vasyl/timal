import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { ScrollSmoother } from 'gsap/ScrollSmoother'
import { SplitText } from 'gsap/SplitText'
import { Draggable } from 'gsap/Draggable'

export default defineNuxtPlugin(async (nuxtApp) => {
	gsap.registerPlugin(ScrollTrigger, ScrollSmoother, SplitText, Draggable)

	let mm = gsap.matchMedia();

	mm.add("(min-width: 768px)", () => {
		const smoother = ScrollSmoother.create({
			smooth: 1,
			normalizeScroll: true,
			ignoreMobileResize: true,
			invalidateOnRefresh: true,
			smoothTouch: 0,
			effects: true,
		});
	})

  nuxtApp.gsap = gsap
})




