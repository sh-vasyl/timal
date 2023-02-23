import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { ScrollSmoother } from 'gsap/ScrollSmoother'
import { ScrollToPlugin } from 'gsap/ScrollToPlugin'
import { SplitText } from 'gsap/SplitText'
import { Draggable } from 'gsap/Draggable'

export default defineNuxtPlugin(async (nuxtApp) => {
	if (process.client) {
		gsap.registerPlugin(ScrollTrigger, ScrollSmoother, SplitText, Draggable, ScrollToPlugin)
	}

	// if (ScrollTrigger.isTouch === 1) {
	// 	gsap.set('body,html', {
	// 		position: 'fixed',
	// 		overflow: 'hidden',
	// 		height: '100vh',
	// 		width: '100vw'
	// 	})

	// 	gsap.set('#viewport', {
	// 		height: '100vh',
	// 		overflowY: 'scroll',
	// 	})

	// 	ScrollTrigger.defaults({ scroller: '#viewport' })
	// 	ScrollTrigger.normalizeScroll({ target: "#viewport" })

  // } else {
	// 	ScrollSmoother.create({
	// 		smooth: 1,
	// 		normalizeScroll: true,
	// 		invalidateOnRefresh: true,
	// 		ignoreMobileResize: true,
	// 	})
	// }

	if (ScrollTrigger.isTouch !== 1) {
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
      ScrollTrigger,
			ScrollToPlugin
    },
	}

  // nuxtApp.gsap = gsap
})




