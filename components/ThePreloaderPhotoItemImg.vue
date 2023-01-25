<script setup>

	defineProps({
		src: String
	})

</script>

<template>

	<img
		class="preloader-photo"
		:src="src"
		alt="preloader photo"
	>

</template>

<style lang="scss" scoped>

.preloader-photo {
	width: vw(112px);
}

.preloader-photo__item-8 .preloader-photo {
	width: vw(149px);
}

</style>