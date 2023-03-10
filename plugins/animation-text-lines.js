import { gsap } from 'gsap'
import { SplitText } from 'gsap/SplitText'

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.directive('animation-text-lines', {

    async mounted (el, binding) {
			const { arg = '', modifiers = {} } = binding
			await document.fonts.ready
			const split = new SplitText(el, { type: 'lines', linesClass: 'mask' })
			split.lines.forEach(line => {
				new SplitText(line, { type: 'lines', linesClass: 'split-line' })
			})
			gsap.set(el.querySelectorAll('.mask'), {
				overflow: 'hidden'
			})

			const lines = el.querySelectorAll('.split-line')
			const {
				scrollTrigger = {},
				duration = 1.5,
				stagger = 0.2,
				delay = 0,
				y = 100,
				autoAlpha = 1,
			} = binding.value || {}


			const tl = gsap.timeline({
				onComplete: () => {
					gsap.set(el.querySelectorAll('.mask'), {
						clearProps: 'overflow'
					})
				},
				scrollTrigger: {
					trigger: el,
					start: 'top bottom',
					toggleActions: 'play none none none',
					...scrollTrigger
				}
			})
			const options = {
				duration,
				delay,
				stagger,
				autoAlpha,
			}

			if (arg === 'mask') {
				options.yPercent = 105
				if (modifiers.down) {
					options.yPercent = -105
				}
			} else {
				options.y = Math.abs(y)
			}

			tl.from(lines, {
				...options
			})

    },
		getSSRProps (binding, vnode) {
      // you can provide SSR-specific props here
      return {}
    }
  })
})
