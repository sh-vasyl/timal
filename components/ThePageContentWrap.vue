<template>

	<div class="page-content__wrap">
		<slot />
	</div>

</template>

<style lang="scss" scoped>

.page-content__wrap {
	@include max(sm) {
		position: absolute;
		z-index: 2;
		bottom: 0;
		left: 0;
		width: 100%;
		display: flex;
		flex-wrap: wrap;
		padding-left: 32px;
		padding-right: 32px;
		padding-bottom: 32px;
	}
	@include max(xs) {
		padding-left: 20px;
		padding-right: 20px;
		padding-bottom: 20px;
	}
}

</style>