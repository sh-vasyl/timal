<script setup>

	import gsap from 'gsap'



	/**
	 * Animation
	 */
	const store = useDefaultStore()
	const heroFooter = ref(null)

	// Hide elements to animate
	tryOnMounted(() => {
		hideElements()
	})

	// Animate after route change
	watch(() => store.transitionComplete, (newValue) => {
    if (newValue) {
			animateFooter()
    }
  })

	// Animate after preloader
	watch(() => store.isPreloaderVisible, () => {
		animateFooter()
  })

	/**
	 * Functions
	 */
	function animateFooter() {
		gsap.to(heroFooter.value, {
			opacity: 1,
			yPercent: 0,
			duration: 1,
			delay: 0.5
		})
	}

	function hideElements() {
		gsap.set(heroFooter.value, {opacity: 0, yPercent: 100})
	}

</script>

<template>
  <div ref="heroFooter" class="home-hero-footer">
		<div class="_container home-hero-footer__wrap">
			<slot></slot>
		</div>
	</div>
</template>


<style lang="scss" scoped>

.home-hero-footer {
	position: absolute;
	bottom: vw(16px);
	left: 0;
	width: 100vw;
	@include max(bg) {
		bottom: 16px
	}
}

.home-hero-footer__wrap {
	display: flex;
	align-items: center;
	justify-content: space-between;
}

</style>