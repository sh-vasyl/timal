<script setup>

	defineProps({
		images: Array
	})

</script>

<template>

	<div
		v-for="(item, i) in images"
		ref="shootingGalleryItem"
		class="shooting-gallery__item"
	>
		<div class="shooting-gallery__img-wrap">
			<div class="shooting-gallery__img-bg"></div>
			<img :src="item.src" class="shooting-gallery__img" alt="gallery image" />
		</div>
		<div class="shooting-gallery__item-bg"></div>
		<div class="shooting-gallery__text">
			<div class="shooting-gallery__text-wrapper">
				{{ item.text }}
			</div>
			<div class="shooting-gallery__text-bg"></div>
		</div>
	</div>

</template>


<style lang="scss" scoped>

.shooting-gallery__item {
	height: 100%;
	width: 45vw;
	display: flex;
	flex-direction: column;
	align-items: center;
	position: relative;
}

.shooting-gallery__item-bg {
	width: 150%;
	height: 125%;
	border-radius: vw(10px);
	background: #E6E6E6;
	position: absolute;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
	opacity: 0;

}

.shooting-gallery__item:first-child {
	transform: scale(1);
	z-index: 1;
}

.shooting-gallery__img {
	height: 100%;
	width: 100%;
	object-fit: cover;
	position: relative;
	z-index: 1;
}

.shooting-gallery__img-wrap {
	position: relative;
	height: 100%;
	width: 100%;
}

.shooting-gallery__img-bg {
	border: vw(5px) solid $c-white;
	filter: drop-shadow(0 vw(2px) vw(4px) rgba($c-black, 0.15));
	position: absolute;
	top: vw(-5px);
	left: vw(-5px);
	width: calc(100% + #{vw(10px)});
	height: calc(100% + #{vw(10px)});
	z-index: 1;
	opacity: 0;
}

.shooting-gallery__text {
	text-align: center;
	margin-top: vw(16px);
	font-size: vw(13px);
	line-height: vw(16px);
	letter-spacing: 0.523657px;
	white-space: nowrap;
	opacity: 0;
	padding: vw(1px) vw(3px) vw(3px);
	position: relative;
	z-index: 2;
}

.shooting-gallery__text-bg {
	width: 100%;
	height: 100%;
	background: #1067DE;
	border-radius: vw(3px);
	position: absolute;
	top: 0;
	left: 0;
	opacity: 0;
}

.shooting-gallery__text-wrapper {
	position: relative;
	z-index: 1;
}

</style>