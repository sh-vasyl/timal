import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { ScrollSmoother } from 'gsap/ScrollSmoother'
import { useTransitionComposable } from '../composables/transition-composable';

const { toggleTransitionComplete } = useTransitionComposable();

const pageTransition = {
  name: 'page-transiton',
	mode: 'out-in',
	onEnter: (el, done) => {
		let tl = gsap.timeline({
			paused: true,
			onComplete() {
				setTimeout(() => ScrollTrigger.refresh(), 1)
				toggleTransitionComplete(true)
				done()
			},
		})
		tl.from(el, {
			autoAlpha: 0,
			filter: 'blur(1rem)',
			duration: 1,
		})
		tl.play()
	},

	onLeave: (el, done) => {

		toggleTransitionComplete(false);

		let tl = gsap.timeline({
			paused: true,
			onComplete() {
				ScrollTrigger.killAll()
				done()
			}
		})
		tl.to(el, {
			autoAlpha: 0,
			filter: 'blur(1rem)',
			duration: 1
		})
		tl.play();
	},
};

export default pageTransition;
