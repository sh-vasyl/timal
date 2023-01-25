<script setup>
	defineProps({
		progress: Number
	})

</script>

<template>

	<div class="preloader-percent s32">
		{{ progress }}%
	</div>

</template>

<style lang="scss" scoped>

.preloader-percent {
	position: absolute;
	bottom: vw(40px);
	left: vw(32px);
	font-family: $xl;
}

</style>