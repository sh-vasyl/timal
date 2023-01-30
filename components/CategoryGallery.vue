<script setup>
	/**
	 * Animate first screen
	 */
	const store = useDefaultStore()
	const categoryGallery = ref(null)
	const { animate } = useFadeBlur()
	tryOnMounted(() => {if(!store.isPreloaderVisible) animate(categoryGallery.value)})
	watch(() => store.isPreloaderVisible, () => animate(categoryGallery.value))

</script>

<template>

	<div ref="categoryGallery" class="category-gallery">
		<slot />
	</div>

</template>


<style lang="scss" scoped>
.category-gallery {
	position: absolute;
	top: 50%;
	width: 100vw;
	left: 0;
	transform: translateY(-50%);
}
</style>