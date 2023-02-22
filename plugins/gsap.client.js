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
		ScrollSmoother.create({
			smooth: 1,
			smoothTouch: 0,
			invalidateOnRefresh: true,
			ignoreMobileResize: true,
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




