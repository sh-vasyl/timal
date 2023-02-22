import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { ScrollSmoother } from 'gsap/ScrollSmoother'
import { SplitText } from 'gsap/SplitText'
import { Draggable } from 'gsap/Draggable'

export default defineNuxtPlugin(async (nuxtApp) => {
	if (process.client) {
		gsap.registerPlugin(ScrollTrigger, ScrollSmoother, SplitText, Draggable)
	}

	if (ScrollTrigger.isTouch === 1) {
		// ScrollTrigger.defaults({ scroller: '#viewport' })
		// ScrollTrigger.normalizeScroll({ target: "#viewport", allowNestedScroll: true })

		// gsap.set('body, html', {
		// 	overflow: 'hidden',
		// 	height: '100vh',
		// 	width: '100vw'
		// })

		// gsap.set('#viewport', {
		// 	position: 'fixed',
		// 	overflowX: 'hidden',
		// 	overflowY: 'scroll',
		// 	height: '100vh',
		// 	width: '100vw',
		// })

		ScrollTrigger.normalizeScroll({
			type: "touch,wheel,pointer", // now the page will be drag-scrollable on desktop because "pointer" is in the list
			momentum: self => Math.min(3, self.velocityY / 1000) // dynamically control the duration of the momentum when flick-scrolling
		});

		ScrollSmoother.create({
			smooth: 1,
			// normalizeScroll: true,
			// ignoreMobileResize: true,
			smoothTouch: 0.1,
			// invalidateOnRefresh: true,
		})
  } else {
		ScrollSmoother.create({
			smooth: 1,
			normalizeScroll: true,
			invalidateOnRefresh: true,
			ignoreMobileResize: true,
		})
	}

	// ScrollSmoother.create({
	// 	smooth: 1,
	// 	normalizeScroll: true,
	// 	invalidateOnRefresh: true,
	// 	ignoreMobileResize: true,
	// 	smoothTouch: 0.1,
	// })



	return {
		provide: {
      gsap,
      Draggable,
      ScrollTrigger
    },
	}

  // nuxtApp.gsap = gsap
})




