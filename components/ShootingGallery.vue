
<template>

	<div ref="shootingGallery" class="shooting-gallery">
		<slot />
	</div>

</template>


<style lang="scss" scoped>
.shooting-gallery {
	position: absolute;
	top: 0;
	left: 0;
	right: 0;
	bottom: 0;
	background-color: $c-white;

	@include max(sm) {
		position: static;
		margin-top: 72px;
		padding-bottom: 32px;
	}
	@include max(xs) {
		margin-top: 56px;
	}
}
</style>