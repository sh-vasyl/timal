<script setup>

	const preloaderPhotoItem = ref([])

	defineExpose({
		preloaderPhotoItem
	})

</script>

<template>
	<div class="preloader-photos">
		<div
			v-for="(photo, i) in 10"
			:key="i"
			class="preloader-photo__item"
			ref="preloaderPhotoItem"
			:class="`preloader-photo__item-${i + 1}`"
		>
			<img
				class="preloader-photo"
				:src="`/images/preloader/sasha-z-${i + 1}.jpeg`"
				alt="preloader photo"
			>
			<div class="preloader-photo__text">sasha-z-{{i + 1}}.jpg</div>
		</div>
	</div>
</template>

<style lang="scss" scoped>

.preloader-photo {
	width: vw(112px);
}

.preloader-photo__item {
	position: absolute;
	transform-box: view-box;
	top: 0;
	left: 0;
	opacity: 0;
}

.preloader-photo__text {
	margin-top: vw(9px);
	font-size: vw(13px);
	line-height: vw(16px);
	letter-spacing: 0.523657px;
	display: flex;
	justify-content: center;
	white-space: nowrap;
}

.preloader-photo__item-8 .preloader-photo {
	width: vw(149px);
}

.preloader-photo__item-1 {
	top: vw(108px);
	left: vw(505px);
}

.preloader-photo__item-2 {
	top: vw(167px);
	left: vw(807px);
}

.preloader-photo__item-3 {
	top: vw(280px);
	left: vw(301px);
}

.preloader-photo__item-4 {
	top: vw(590px);
	left: vw(1236px);
}

.preloader-photo__item-5 {
	top: vw(533px);
	left: vw(937px);
}

.preloader-photo__item-6 {
	top: vw(600px);
	left: vw(831px);
}

.preloader-photo__item-7 {
	top: vw(550px);
	left: vw(554px);
}

.preloader-photo__item-8 {
	top: vw(324px);
	left: vw(1031px);
}

.preloader-photo__item-9 {
	top: vw(115px);
	left: vw(1237px);
}

.preloader-photo__item-10 {
	top: vw(431px);
	left: vw(60px);
}

</style>