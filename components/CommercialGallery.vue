<script setup>
	/**
	 * Animate first screen
	 */
	const store = useDefaultStore()
	const commercialGallery = ref(null)
	const { animate } = useFadeBlur()
	tryOnMounted(() => {if(!store.isPreloaderVisible) animate(commercialGallery.value)})
	watch(() => store.isPreloaderVisible, () => animate(commercialGallery.value))

</script>

<template>

	<div ref="commercialGallery" class="commercial-gallery">
		<slot />
	</div>

</template>


<style lang="scss" scoped>
.commercial-gallery {
	position: absolute;
	top: 50%;
	width: 100vw;
	left: 0;
	transform: translateY(-50%);
}
</style>