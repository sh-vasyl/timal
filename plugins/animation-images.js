import { gsap } from 'gsap'

export default defineNuxtPlugin((nuxtApp) => {

  nuxtApp.vueApp.directive('animation-images', {
    async mounted (el, binding) {

			const store = useDefaultStore()

			watch(() => store.isPreloaderVisible, () => {
				anim()
			})

			watch(() => store.transitionComplete, (newValue) => {
				if (newValue) {
					anim()
				}
			});

			function anim() {
				const img = el.querySelector('img')
				let tl = gsap.timeline({
					ease: 'Power2.easeOut',
					scrollTrigger: {
						trigger: el,
					}
				})
				tl.from(el, {
					height: 0,
					duration: 1.2,
					delay: 0.3,
				})
				tl.from(img, {
					scale: 1.2,
					duration: 1.2,
					delay: 0.3
				}, 0)
			}
    },
		getSSRProps (binding, vnode) {
      return {}
    }
  })
})
