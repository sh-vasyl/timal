<script setup>

	defineProps({
		index: Number
	})

</script>

<template>

	<div
		class="preloader-photo__item"
		:class="`preloader-photo__item-${index + 1}`"
	>
		<slot />
	</div>

</template>

<style lang="scss" scoped>

.preloader-photo__item {
	position: absolute;
	transform-box: view-box;
	top: 0;
	left: 0;
	opacity: 0;
	display: flex;
	flex-direction: column;
	align-items: center;
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