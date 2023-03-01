<template>

	<div class="popup__form-wrap">
		<slot />
	</div>

</template>

<style lang="scss" scoped>

.popup__form-wrap {
	margin-top: vw(52px);
	display: flex;
	flex-wrap: wrap;
	justify-content: space-between;
}

</style>