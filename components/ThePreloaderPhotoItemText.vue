<script setup>

	defineProps({
		text: String
	})

</script>

<template>

	<div class="preloader-photo__text">{{ text }}</div>

</template>

<style lang="scss" scoped>

.preloader-photo__text {
	margin-top: vw(9px);
	font-size: vw(13px);
	line-height: vw(16px);
	letter-spacing: 0.523657px;
	white-space: nowrap;
}

</style>