<script setup>
	import gsap from 'gsap'
	/**
	 * Animate
	 */

	const store = useDefaultStore()

	const heroActions = ref(null)

	const { animate } = useFadeIn()

	tryOnMounted(() => {
		gsap.set(heroActions.value, { opacity: 0 })
	})

	watch(() => store.transitionComplete, (newValue) => {
    if (newValue) {
			animate(heroActions.value)
    }
  })
	watch(() => store.isPreloaderVisible, () => {
		animate(heroActions.value)
  })

</script>
<template>

	<div ref="heroActions" class="hero-actions">
		<slot />
	</div>

</template>


<style lang="scss" scoped>
.hero-actions {
	z-index: 1;
	position: absolute;
	top: 33.333%;
	transform: translateY(-50%);
	left: vw(387px);
	@include max(bg) {
		left: 210px;
	}
	@include max(sm) {
		top: auto;
		transform: none;
		left: auto;
		right: 32px;
		bottom: 137px;
	}
	@include max(xs) {
		right: 24px;
		bottom: 110px;
	}
}


</style>