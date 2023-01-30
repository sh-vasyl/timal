<script setup>
	/**
	 * Animate first screen
	 */
	const store = useDefaultStore()
	const heroTitle = ref(null)
	const { animate } = useFadeLeft()
	tryOnMounted(() => {if(!store.isPreloaderVisible) animate(heroTitle.value)})
	watch(() => store.isPreloaderVisible, () => animate(heroTitle.value))

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