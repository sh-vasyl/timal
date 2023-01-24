<script setup>

	defineProps({
		src: String
	})

</script>

<template>

		<img
			class="commercial-gallery__img"
			:src="src"
			alt="commercial gallery image"
		/>

</template>
