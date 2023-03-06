<template>

	<div class="phone-plus ttu">+</div>

</template>

<style lang="scss" scoped>

.phone-plus {
	position: absolute;
	top: vw(3px);
	left: 0;
	font-size: vw(11px);
	opacity: 0;
	@include max(bg) {
		font-size: 11px;
		top: -1px;
	}
}

</style>