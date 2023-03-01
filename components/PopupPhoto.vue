<template>

	<div class="popup__photo">
		<img src="/images/commercial/img-1.png" class="popup__photo-img" alt="">
	</div>

</template>

<style lang="scss" scoped>

.popup__photo {
	flex: 0 0 vw(440px);
	position: relative;
}
.popup__photo-img {
	width: 100%;
	height: 100%;
	object-fit: cover;
	object-position: center center;
	position: absolute;
	top: 0;
	left: 0;
}
</style>