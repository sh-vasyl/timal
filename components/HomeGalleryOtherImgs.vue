<script setup>
	import gsap from 'gsap'

	const homeGalleryImg = ref([])
	const cursor = ref({})
	cursor.value.x = 0
	cursor.value.y = 0

	tryOnMounted(() => {
		useEventListener(document, 'mousemove', (e) => {
			cursor.value.x = e.clientX / window.innerWidth - 0.5
			cursor.value.y = e.clientY / window.innerHeight - 0.5

			anim()
		})
	})

	const anim = () => {
		const paralaxX = cursor.value.x
		const paralaxY = -cursor.value.y
		gsap.to(homeGalleryImg.value[0], {
			ease: 'none',
			x: paralaxX * 50,
			y: paralaxY * 50,
		})
		gsap.to(homeGalleryImg.value[1], {
			ease: 'none',
			x: -paralaxX * 40,
			y: -paralaxY * 40,
		})
		gsap.to(homeGalleryImg.value[2], {
			ease: 'none',
			x: paralaxX * 30,
			y: paralaxY * 30,
		})
		gsap.to(homeGalleryImg.value[3], {
			ease: 'none',
			x: paralaxX * 10,
			y: paralaxY * 10,
		})
		gsap.to(homeGalleryImg.value[4], {
			ease: 'none',
			x: -paralaxX * 15,
			y: -paralaxY * 15,
		})
	}

</script>

<template>

	<img v-for="(img, i) in 5"
		ref="homeGalleryImg"
		:class="`home-gallery-img home-gallery-img-${i + 5}`"
		:src="`/images/collection-1/img-${i + 5}.jpeg`"
		alt="home gallery image"
	/>

</template>


<style lang="scss" scoped>
.home-gallery-img {
	position: absolute;
	left: 50%;
	transform: translateX(-50%)
}

.home-gallery-img-5 {
	width: vw(112px);
	top: vw(334px);
	margin-left: vw(-414px);
}

.home-gallery-img-6 {
	width: vw(112px);
	top: vw(260px);
	margin-left: vw(412px);
}

.home-gallery-img-7 {
	width: vw(112px);
	top: vw(648px);
	margin-left: vw(-376px);
}

.home-gallery-img-8 {
	width: vw(152px);
	top: vw(547px);
}

.home-gallery-img-9 {
	width: vw(112px);
	top: vw(689px);
	margin-left: vw(395px);
}
</style>