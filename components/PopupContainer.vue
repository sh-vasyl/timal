<template>

	<div class="popup__container">
		<slot />
	</div>

</template>

<style lang="scss" scoped>

.popup__container {
	width: vw(1076px);
	background: $c-white;
	display: flex;
	position: absolute;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
}
</style>