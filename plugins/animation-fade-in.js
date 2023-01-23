import { gsap } from 'gsap'

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.directive('animation-fade-in', {
    async mounted (el, binding) {
			const store = useDefaultStore()
      await document.fonts.ready
			const {
				scrollTrigger = {},
				delay = 0,
				duration = 1,
				y = 80,
				opacity = 1,
			} = binding.value || {}

			watch(() => store.isPreloaderVisible, (value) => {
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
			})
    },
		getSSRProps (binding, vnode) {
      // you can provide SSR-specific props here
      return {}
    }
  })
})
