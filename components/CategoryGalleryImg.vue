<script setup>

	defineProps({
		src: String
	})

</script>

<template>

		<img
			class="category-gallery__img"
			:src="src"
			alt="category gallery image"
		/>

</template>

<style>
.category-gallery__img {
	width: auto;
	max-height: 100%;
}

</style>
