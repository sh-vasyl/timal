<script setup>
	defineProps({
		progress: Number
	})

</script>

<template>

	<div class="preloader-percent h5">
		{{ progress }}%
	</div>

</template>

<style lang="scss" scoped>

.preloader-percent {
	position: absolute;
	bottom: vw(40px);
	left: vw(32px);
	z-index: 1;
	@include max(bg) {
		left: 32px;
		bottom: 40px;
	}
	@include max(xs) {
		left: 24px;
		bottom: 30px;
	}
}

</style>