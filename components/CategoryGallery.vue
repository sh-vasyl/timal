<script setup>

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