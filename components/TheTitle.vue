<script setup>
	import gsap from 'gsap'
	/**
	 * Animate
	 */
	const { transitionState } = useTransitionComposable()
	const store = useDefaultStore()

	const heroTitle = ref(null)

	const { animate } = useFadeLeft()

	tryOnMounted(() => {
		gsap.set(heroTitle.value, { opacity: 0, xPercent: -150 })
	})

	watch(() => transitionState.transitionComplete, (newValue) => {
    if (newValue) {
			animate(heroTitle.value)
    }
  })
	watch(() => store.isPreloaderVisible, () => {
		animate(heroTitle.value)
  })

</script>

<template>

	<div ref="heroTitle" class="hero-title">
		<slot />
	</div>

</template>


<style lang="scss" scoped>
.hero-title {
	position: fixed;
	bottom: vw(32px);
	left: vw(32px);
	z-index: 1;
}
</style>