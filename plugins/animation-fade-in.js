import { gsap } from 'gsap'

export default defineNuxtPlugin((nuxtApp) => {

  nuxtApp.vueApp.directive('animation-fade-in', {
    async mounted (el, binding) {
			await document.fonts.ready

			const store = useDefaultStore()
			const { transitionState } = useTransitionComposable()

			watch(() => store.isPreloaderVisible, () => {
				anim()
			})

			watch(() => transitionState.transitionComplete, (newValue) => {
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
					opacity: 0
				})
			}
    },
		getSSRProps (binding, vnode) {
      return {}
    }
  })
})
