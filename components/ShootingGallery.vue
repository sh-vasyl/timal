<script setup>
	/**
	 * Animate first screen
	 */
	const store = useDefaultStore()
	const shootingGallery = ref(null)
	const { animate } = useFadeBlur()
	tryOnMounted(() => {if(!store.isPreloaderVisible) animate(shootingGallery.value)})
	watch(() => store.isPreloaderVisible, () => animate(shootingGallery.value))

</script>

<template>

	<div ref="shootingGallery" class="shooting-gallery">
		<slot />
	</div>

</template>


<style lang="scss" scoped>
.shooting-gallery {
	position: absolute;
	top: 0;
	left: 0;
	right: 0;
	bottom: 0;
	background-color: $c-white;
}
</style>