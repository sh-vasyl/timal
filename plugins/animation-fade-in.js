import { gsap } from 'gsap'

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.directive('animation-fade-in', {
    async mounted (el, binding) {
      await document.fonts.ready
			const {
				scrollTrigger = {},
				delay = 0,
				duration = 1,
				y = 30,
				opacity = 0,
			} = binding.value || {}

			const tl = gsap.timeline({
				scrollTrigger: {
					trigger: el,

					toggleActions: 'play none none none',
					...scrollTrigger,
				}
			})
			tl.from(el, {
				duration,
				delay,
				y,
				opacity
			})
    },
		getSSRProps (binding, vnode) {
      // you can provide SSR-specific props here
      return {}
    }
  })
})
