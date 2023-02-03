<script setup>

	defineProps({
		index: Number
	})

</script>

<template>

	<div
		class="preloader-photo__item"
		:class="`preloader-photo__item-${index + 1}`"
	>
		<slot />
	</div>

</template>

<style lang="scss" scoped>

.preloader-photo__item {
	position: absolute;
	transform-box: view-box;
	top: 0;
	left: 0;
	opacity: 0;
	display: flex;
	flex-direction: column;
	align-items: center;
}

</style>