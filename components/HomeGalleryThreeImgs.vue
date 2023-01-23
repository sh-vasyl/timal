<script setup>

	import gsap from 'gsap'

	const homeGalleryImg = ref([])

	function mouseEnter(e) {
		gsap.to(homeGalleryImg.value[0], {
			marginLeft: -150
		})
		gsap.to(homeGalleryImg.value[2], {
			marginLeft: 200
		})
	}

	function mouseLeave() {
		gsap.to(homeGalleryImg.value[0], {
			marginLeft: 0
		})
		gsap.to(homeGalleryImg.value[2], {
			marginLeft: 0
		})
	}

</script>

<template>

	<div
		class="home-gallery-three-imgs"
		@mouseenter="mouseEnter"
		@mouseleave="mouseLeave"
	>
		<img v-for="(img, i) in 3"
			ref="homeGalleryImg"
			:class="`home-gallery-three-img home-gallery-three-img-${i + 2}`"
			:src="`/images/collection-1/img-${i + 2}.jpeg`"
			alt="home gallery image"
		/>
	</div>

</template>


<style lang="scss" scoped>

.home-gallery-three-imgs {
	position: absolute;
	left: 50%;
	transform: translateX(-50%)
}

.home-gallery-three-img {
	position: absolute;
	max-width: none;
	left: 50%;
	transform: translateX(-50%)
}

.home-gallery-three-img-2 {
	width: vw(309px);
	margin-top: vw(20px);
	transform: translateX(-50%) rotate(-6.38deg);
	left: calc(50% - #{vw(60px)});
}

.home-gallery-three-img-3 {
	width: vw(339px);
}

.home-gallery-three-img-4 {
	width: vw(288px);
	margin-top: vw(55px);
	transform: translateX(-50%) rotate(4.12deg);
}
</style>