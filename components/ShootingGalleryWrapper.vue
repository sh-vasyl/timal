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

	@include max(sm) {
		display: block;
		padding-left: 32px;
		padding-right: 32px;
	}
	@include max(xs) {
		display: block;
		padding-left: 20px;
		padding-right: 20px;
	}
}

</style>