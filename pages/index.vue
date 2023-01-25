<script setup>

	import gsap from 'gsap'

	/**
	 * Photos collection
	 */
	const collectionPhotos = ref([
		{ src: '/images/collection-1/img-1.jpeg' },
		{ src: '/images/collection-1/img-2.jpeg' },
		{ src: '/images/collection-1/img-3.jpeg' },
		{ src: '/images/collection-1/img-4.jpeg' }
	])

	/**
	 * Photos gallery
	 */
	const galleryPhotosThree = ref([
		{ src: '/images/collection-1/img-2.jpeg' },
		{ src: '/images/collection-1/img-3.jpeg' },
		{ src: '/images/collection-1/img-4.jpeg' },
	])
	const galleryPhotosOthers = ref([
		{ src: '/images/collection-1/img-5.jpeg' },
		{ src: '/images/collection-1/img-6.jpeg' },
		{ src: '/images/collection-1/img-7.jpeg' },
		{ src: '/images/collection-1/img-8.jpeg' },
		{ src: '/images/collection-1/img-9.jpeg' },
	])



</script>


<template>

	<TheWrapper>
		<ClientOnly>
			<Teleport to="#viewport">
				<TheHeader />
			</Teleport>
		</ClientOnly>

		<HomeView>
			<HomeImg :images="collectionPhotos"/>

			<HomeHeroView>
				<HomeHeroTitle />
				<HomeHeroDescr ref="heroDescr" />
				<HomeHeroFooter>
					<HomeHeroSoc />
					<HomeHeroArrow />
				</HomeHeroFooter>
			</HomeHeroView>

			<HomeGalleryView>
				<HomeGalleryThreeImgs :images="galleryPhotosThree" />
				<HomeGalleryOtherImgs :images="galleryPhotosOthers" />
				<HomeGalleryButton />
				<HomeGalleryLines />
			</HomeGalleryView>

			<TheFooter />
		</HomeView>
	</TheWrapper>

</template>

<style lang="scss" scoped>

</style>
