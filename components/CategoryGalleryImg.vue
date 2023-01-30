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
