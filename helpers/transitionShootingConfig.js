import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { ScrollSmoother } from 'gsap/ScrollSmoother'


const pageTransition = {
  name: 'shooting-transiton',
	mode: 'out-in',
	onEnter: (el, done) => {
		gsap.set(el, {
			xPercent: 100,
		})

		let tl = gsap.timeline({
			paused: true,
			onComplete() {
				setTimeout(() => ScrollTrigger.refresh(), 1)
				setTimeout(() => {
					if (ScrollTrigger.isTouch !== 1) {
						ScrollSmoother.get().paused(false)
					}
				}, 0)
				const store = useDefaultStore()
				store.toggleTransitionComplete(true)
				done()
			},
		})
		tl.to(el, {
			xPercent: 0,
			duration: 10,
		})
		tl.play()
	},

	onLeave: (el, done) => {
		const store = useDefaultStore()
		store.toggleTransitionComplete(false)

		let tl = gsap.timeline({
			paused: true,
			onComplete() {
				ScrollTrigger.killAll()
				done()
			}
		})
		tl.to(el, {
			xPercent: -100,
			duration: 10
		})
		tl.play();
	},
};

export default pageTransition;
