<template>

	<div class="popup__signature">
		<svg class="popup__signature-svg" viewBox="0 0 160 119" fill="none" xmlns="http://www.w3.org/2000/svg">
			<path d="M118.845 118C65.8232 114.478 117.336 80.5584 132.111 67.6296C111.549 139.283 22.7855 69.5833 141.982 13.4282C125.475 23.5338 122.588 27.4045 159 18.263C6.98328 141.057 28.5162 124.263 136.175 2C128.895 99.3799 157.134 44.963 0.999999 106.202" stroke="#2828BD"/>
		</svg>
	</div>

</template>

<style lang="scss" scoped>
.popup__signature {
	position: absolute;
	top: vw(52px);
	right: vw(57px);
	@include max(bg) {
		top: 52px;
		right: 9px;
	}
	@include max(xs) {
		top: 32px;
		right: 6px;
	}
}
.popup__signature-svg {
	width: vw(160px);
	height: vw(119px);
	@include max(bg) {
		width: 158px;
		height: 116px;
	}
	@include max(xs) {
		width: 96px;
		height: 70px;
	}
}

</style>