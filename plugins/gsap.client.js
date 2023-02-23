import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { ScrollSmoother } from 'gsap/ScrollSmoother'
import { ScrollToPlugin } from 'gsap/ScrollToPlugin'
import { SplitText } from 'gsap/SplitText'
import { Draggable } from 'gsap/Draggable'



export default defineNuxtPlugin(async (nuxtApp) => {
	if (process.client) {
		gsap.registerPlugin(ScrollTrigger, ScrollSmoother, SplitText, Draggable, ScrollToPlugin)

		let vh
		vh = window.innerHeight * 0.01
		document.documentElement.style.setProperty("--vh", `${vh}px`)
		// window.addEventListener('resize', () => {
		// 	vh = window.innerHeight * 0.01
		// 	document.documentElement.style.setProperty("--vh", `${vh}px`)
		// })
	}

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




