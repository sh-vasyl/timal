<script setup>
	import gsap from 'gsap'
	/**
	 * Animate
	 */

	const store = useDefaultStore()

	const heroTitle = ref(null)

	const { animate } = useFadeLeft()

	tryOnMounted(() => {
		gsap.set(heroTitle.value, { opacity: 0, xPercent: -150 })
	})

	watch(() => store.transitionComplete, (newValue) => {
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
	transform-origin: left bottom;
	@include max(bg) {
		bottom: 32px;
		left: 32px;
	}
	@include max(xs) {
		bottom: 24px;
		left: 24px;
	}
}

.category-view .hero-title {
	@include max(sm) {
		bottom: 135px
	}
	@include max(xs) {
		bottom: 127px
	}

}
</style>