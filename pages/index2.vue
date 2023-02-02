<script setup>
import gsap from 'gsap'
import transitionConfig from '@/helpers/transitionConfig'


	/**
	 * Transition beetwen pages
	 */
	definePageMeta({ pageTransition: transitionConfig })
	const { transitionState } = useTransitionComposable()

	const store = useDefaultStore()

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


	// categories api
	const { data: categories } = await useAsyncData('categories', () => {
		return $fetch('/api/categories')
	})

	const commercialData = categories.value?.data?.data[0]
	const editorialData = categories.value?.data?.data[1]

	const commercialShootingData = commercialData?.attributes?.shootings?.data
	const editorialShootingData = editorialData?.attributes?.shootings?.data
	const categoriesShootingData = [...commercialShootingData, ...editorialShootingData]

	// Photo gallery
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


	/**
	 * Animation changing background
	 */
	const currentShootingSlug = ref(null)
	const currentCategory = ref(null)
	currentShootingSlug.value = categoriesShootingData[0]?.attributes?.slug
	currentCategory.value = categoriesShootingData[0]?.attributes?.category?.data?.attributes?.name.toLowerCase()

	const homeImg = ref([])
	const homeImgCurrent = ref(1)
	const timeChangeImg = ref(15000)
	let interval;

	// Animate after route change
	watch(() => transitionState.transitionComplete, (newValue) => {
    if (newValue) {
			interval = setInterval(() => changeImgs(), timeChangeImg.value)
    }
  });

	// Animate after preloader
	watch(() => store.isPreloaderVisible, () => {
		interval = setInterval(() => changeImgs(), timeChangeImg.value)
  })

	// Clear interval
	tryOnUnmounted(() => {
		clearInterval(interval)
	})

	function changeImgs() {
		homeImg.value.forEach(img => gsap.to(img.$el, { opacity: 0, duration: 1.5 }))
		gsap.to(homeImg.value[homeImgCurrent.value].$el, { opacity: 1, duration: 1.5 })

		currentShootingSlug.value = categoriesShootingData[homeImgCurrent.value]?.attributes?.slug
		currentCategory.value = categoriesShootingData[homeImgCurrent.value]?.attributes?.category?.data?.attributes?.name.toLowerCase()

		homeImgCurrent.value === homeImg.value.length - 1 ?
		homeImgCurrent.value = 0 : homeImgCurrent.value += 1
	}


</script>

<template>
  <TheWrapper>
		<ClientOnly>
			<Teleport to="#viewport">
				<TheHeader />
			</Teleport>
		</ClientOnly>

		<HomeView>
			<HomeImgWrap>
				<HomeImg
					v-for="img in categoriesShootingData"
					:src="url + img?.attributes?.photos?.data[0]?.attributes?.url"
					ref="homeImg"
				/>
			</HomeImgWrap>


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
					<HomeHeroArrow
						:href="`/${currentCategory}/${currentShootingSlug}`"
					/>
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
