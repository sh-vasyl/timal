<script setup>

	import gsap from 'gsap'

	/**
	 * Animation Footer
	 */
	const store = useDefaultStore()
	const heroFooter = ref(null)

	function anim() {
		gsap.to(heroFooter.value, {
			opacity: 1,
			y: 0,
			duration: 1,
			delay: 0.5
		})
	}

	tryOnMounted(() => anim())
	watch(() => store.isPreloaderVisible, () => anim())

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
	opacity: 0;
	transform: translateY(100%);
}

.home-hero-footer__wrap {
	display: flex;
	align-items: center;
	justify-content: space-between;
}

</style>