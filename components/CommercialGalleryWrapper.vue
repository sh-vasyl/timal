<template>

	<div class="commercial-gallery__wrapper">
		<slot />
	</div>

</template>


<style lang="scss" scoped>
.commercial-gallery__wrapper {
	padding-left: 50vw;
	padding-right: 10vw;
	display: flex;
	width: max-content;
	align-items: center;
}
</style>