<script setup>

	import gsap from 'gsap'

	const runTimeConfig = useRuntimeConfig()
	const url = runTimeConfig.public.baseUrl

	/**
	 * Props
	 */
	 defineProps({
		images: Array,
	})

	/**
	 * Hover three cards
	 */
	const homeGalleryImg = ref([])

	function mouseEnter() {
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
		<img
			v-for="(img, i) in images"
			ref="homeGalleryImg"
			:class="`home-gallery-three-img home-gallery-three-img-${i + 2}`"
			:src="url + img?.attributes?.photos?.data[0]?.attributes?.formats?.small?.url"
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
	@include max(bg) {
		width: 220px;
		margin-top: 20px;
		left: calc(50% - 50px);
	}
	@include max(sm) {
		width: 165px;
		left: calc(50% - 30px);
		margin-top: 10px;
	}
	@include max(xs) {
		width: 138px;
		left: calc(50% - 20px);
		margin-top: 10px;
	}
}

.home-gallery-three-img-3 {
	width: vw(339px);
	@include max(bg) {
		width: 242px;
	}
	@include max(sm) {
		width: 182px;
	}
	@include max(xs) {
		width: 152px;
	}
}

.home-gallery-three-img-4 {
	width: vw(288px);
	margin-top: vw(55px);
	transform: translateX(-50%) rotate(4.12deg);
	@include max(bg) {
		width: 204px;
		margin-top: 50px;
	}
	@include max(sm) {
		width: 153px;
		margin-top: 40px;
	}
	@include max(xs) {
		width: 127px;
	}
}
</style>