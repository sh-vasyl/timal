<template>

	<div class="shooting-gallery__wrapper">
		<slot />
	</div>

</template>


<style lang="scss" scoped>
.shooting-gallery__wrapper {
	padding-left: 55vw;
	padding-right: 55vw;
	display: flex;
	width: max-content;
	align-items: center;
	height: 100%;
	position: relative;
}

</style>