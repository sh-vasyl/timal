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
	@include max(bg) {
		width: 112px;
	}
	@include max(sm) {
		width: 90px;
	}
	@include max(xs) {
		width: 70px;
	}
}

.preloader-photo__item-8 .preloader-photo {
	width: vw(149px);
	@include max(bg) {
		width: 149px;
	}
	@include max(sm) {
		width: 110px;
	}
	@include max(xs) {
		width: 90px;
	}
}

</style>