
<template>

	<div class="home-img__wrap">
		<slot />
	</div>

</template>


<style lang="scss" scoped>

.home-img__wrap {
	position: absolute;
	top: 0;
	left: 0;
	height: 100%;
	width: 100%;
	object-fit: cover;
	z-index: -1;
}

</style>