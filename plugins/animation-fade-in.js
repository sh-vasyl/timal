import { gsap } from 'gsap'

export default defineNuxtPlugin((nuxtApp) => {

  nuxtApp.vueApp.directive('animation-fade-in', {
    async mounted (el, binding) {

			await document.fonts.ready

			const store = useDefaultStore()


			watch(() => store.isPreloaderVisible, () => {
				anim()
			})

			if(!store.isPreloaderVisible) {
				anim()
			}


			watch(() => store.transitionComplete, (newValue) => {
				if (newValue) {
					anim()
				}
			});

			function anim() {
				let tl = gsap.timeline({
					scrollTrigger: {
						trigger: el,
					}
				})
				tl.from(el, {
					duration: 1,
					y: 30,
					opacity: 0,
					ease: 'Power2.easeOut'
				})
			}
    },
		getSSRProps (binding, vnode) {
      return {}
    }
  })
})
