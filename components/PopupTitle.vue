<template>

	<div class="popup__form-title ttu">Send your request</div>

</template>

<style lang="scss" scoped>

.popup__form-title {
	font-size: vw(72px);
	line-height: 86%;
	font-family: $xl;
	@include max(bg) {
		font-size: 72px;
		text-align: center;
	}
	@include max(xs) {
		font-size: 48px;
	}
}

</style>