<script setup>

	import gsap from 'gsap'

	const shootingGalleryWrapper = ref(null)

	// set wrapper width
	tryOnMounted(() => {
		const shootingGalleryItems = document.querySelectorAll('.shooting-gallery__item')
		const totalItemsWidth = shootingGalleryItems[0].clientWidth * shootingGalleryItems.length

		gsap.set(shootingGalleryWrapper.value, {
			width: `calc(110vw + ${totalItemsWidth}px)`
		})
	})

</script>

<template>

	<div ref="shootingGalleryWrapper" class="shooting-gallery__wrapper">
		<slot />
	</div>

</template>


<style lang="scss" scoped>
.shooting-gallery__wrapper {
	display: flex;
	align-items: center;
	height: 100%;
}

</style>