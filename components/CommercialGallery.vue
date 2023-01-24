<template>

	<div class="commercial-gallery">
		<slot />
	</div>

</template>


<style lang="scss" scoped>
.commercial-gallery {
	position: absolute;
	top: 50%;
	width: 100vw;
	left: 0;
	transform: translateY(-50%);
}
</style>