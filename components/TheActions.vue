<script setup>
	/**
	 * Animate first screen
	 */
	const store = useDefaultStore()
	const heroActions = ref(null)
	const { animate } = useFadeIn()
	tryOnMounted(() => {if(!store.isPreloaderVisible) animate(heroActions.value)})
	watch(() => store.isPreloaderVisible, () => animate(heroActions.value))

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
}


</style>