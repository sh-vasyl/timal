<template>

	<div class="preloader-photos">
		<slot />
	</div>

</template>

<style lang="scss" scoped>

.preloader-photos {
	position: absolute;
	height: 90%;
	bottom: 0;
	left: 0;
	width: 100%;
}

</style>