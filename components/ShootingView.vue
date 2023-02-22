<template>

	<div class="shooting-view">
		<slot />
	</div>

</template>

<style lang="scss" scoped>
.shooting-view {
	position: relative;
	height: 100vh;

	@include max(sm) {
		height: auto;
	}
}

</style>
