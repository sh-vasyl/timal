<template>

	<div class="header-nav">
		<slot></slot>
	</div>

</template>

<style lang="scss" scoped>

.header-nav {
	@include max(sm) {
		position: fixed;
		top: 0;
		left: 0;
		z-index: 2;
		width: 100%;
		// background: $c-white;
		height: 100vh;
		opacity: 0;
		visibility: hidden;
	}
}

</style>