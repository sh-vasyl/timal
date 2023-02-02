<script setup>

</script>

<template>

	<div ref="shootingGalleryWrapper" class="shooting-gallery__wrapper">
		<slot />
	</div>

</template>


<style lang="scss" scoped>
.shooting-gallery__wrapper {
	display: flex;
	align-items: center;
	height: 100%;
}

</style>