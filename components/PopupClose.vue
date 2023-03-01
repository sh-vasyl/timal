<template>

	<div class="popup__close">
		<svg class="popup__close-svg" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
			<circle cx="25" cy="25" r="25" fill="black"/>
			<path d="M32 18L18 32" stroke="white" stroke-linecap="round" stroke-linejoin="round"/>
			<path d="M18 18L32 32" stroke="white" stroke-linecap="round" stroke-linejoin="round"/>
		</svg>
	</div>

</template>

<style lang="scss" scoped>

.popup__close {
	position: absolute;
	top: 0;
	right: 0;
	transform: translate(50%, -50%);
	transition: 0.5s ease;
	cursor: pointer;
	&:hover {
		transform: translate(50%, -50%) rotate(90deg);
	}
}
.popup__close-svg {
	width: vw(50px);
	height: vw(50px);
}

</style>