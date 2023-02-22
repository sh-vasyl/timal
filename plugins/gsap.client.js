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

		ScrollSmoother.create({
			smooth: 1,
			smoothTouch: 0,
  		ignoreMobileResize: true,
			invalidateOnRefresh: true,
			normalizeScroll: true,
		})
  } else {
		ScrollSmoother.create({
			smooth: 1,
			normalizeScroll: true,
			invalidateOnRefresh: true,
			ignoreMobileResize: true,
		})
	}



	return {
		provide: {
      gsap,
      Draggable,
      ScrollTrigger
    },
	}

  // nuxtApp.gsap = gsap
})




