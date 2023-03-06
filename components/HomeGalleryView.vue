<template>

	<section class="home-gallery-view">
		<slot />
	</section>

</template>

<style lang="scss" scoped>

.home-gallery-view {
	height: vw(935px);
	position: relative;
	width: 100vw;
	overflow: hidden;
	@include max(bg) {
		height: 656px;
	}
	@include max(sm) {
		height: 554px;
	}
	@include max(xs) {
		height: 30px;
		height: 420px;
	}
}

</style>