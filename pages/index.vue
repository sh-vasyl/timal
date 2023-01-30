<script setup>

	import gsap from 'gsap'

	/**
	 * API
	 */
	const runTimeConfig = useRuntimeConfig()
	const url = runTimeConfig.public.baseUrl

	// Home api
	const { data: home } = await useAsyncData('home', () => {
		return $fetch('/api/home')
	})
	const dataHome = home?.value?.data
	const dataHeroDescr = dataHome?.data?.attributes?.main_description
	const dataFooterCopyright = dataHome?.data?.attributes?.all_rights_reserved
	const dataHeroSocials = dataHome?.data?.attributes?.social_block?.add_social


	const { data: categories } = await useAsyncData('categories', () => {
		return $fetch('/api/categories')
	})

	// // commercial api
	// const commercialData = categories.value?.data?.data[0]
	// const commercialCount = commercialData?.attributes?.shootings?.data?.length

	// console.log(categories.value);


	// // editorial api
	// const editorialData = categories.value?.data?.data[1]
	// const editorialCount = editorialData?.attributes?.shootings?.data?.length




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
				<HomeHeroDescr
					ref="heroDescr"
					:text="dataHeroDescr"
				/>
				<HomeHeroFooter>
					<HomeHeroSoc
						:links="dataHeroSocials"
					/>
					<HomeHeroArrow />
				</HomeHeroFooter>
			</HomeHeroView>

			<HomeGalleryView>
				<HomeGalleryThreeImgs :images="galleryPhotosThree" />
				<HomeGalleryOtherImgs :images="galleryPhotosOthers" />
				<HomeGalleryButton />
				<HomeGalleryLines />
			</HomeGalleryView>

			<TheFooter>
				<TheFooterCopyrights :copyright="dataFooterCopyright" />
				<TheFooterDesigned />
			</TheFooter>

		</HomeView>
	</TheWrapper>

</template>

<style lang="scss" scoped>

</style>
