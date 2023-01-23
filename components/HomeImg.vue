<script setup>

	import gsap from 'gsap'

	const store = useDefaultStore()
	const homeImg = ref([])
	const homeImgCurrent = ref(1)
	const timeChangeImg = ref(15000)
	const collections = ref([
		'/images/collection-1/img-1.jpeg',
		'/images/collection-1/img-2.jpeg',
		'/images/collection-1/img-3.jpeg',
		'/images/collection-1/img-4.jpeg',
	])

	watch(() => store.isPreloaderVisible, () => {
		setInterval(() => changeImgs(), timeChangeImg.value)
	})

	function changeImgs() {
		homeImg.value.forEach(img => gsap.to(img, { opacity: 0, duration: 1.5 }))

		gsap.to(homeImg.value[homeImgCurrent.value], { opacity: 1, duration: 1.5 })

		homeImgCurrent.value === homeImg.value.length - 1 ?
		homeImgCurrent.value = 0 : homeImgCurrent.value += 1
	}

</script>
<template>

	<img
		v-for="(img, i) in collections"
		ref="homeImg"
		class="home-img"
		:src="img"
		alt="Home image"
	/>

</template>


<style lang="scss" scoped>
.home-img {
	position: absolute;
	top: 0;
	left: 0;
	height: 100%;
	object-fit: cover;
	z-index: -1;
	opacity: 0;
}

.home-img:first-child {
	opacity: 1;
}
</style>