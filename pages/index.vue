<script setup>
import gsap from 'gsap'
import transitionConfig from '@/helpers/transitionConfig'

	const store = useDefaultStore()

	/**
	 * Transition beetwen pages
	 */
	definePageMeta({ pageTransition: transitionConfig })


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
	const categoriesShootingDataForMain = categoriesShootingData.filter(el => el.attributes.show_to_main)

	// Photo gallery
	const projectsThreePhoto = ref(null)
	const projectOtherPhotosArray = ref(null)
	const projectOtherPhotos = ref(null)

	/**
	 * Animation changing background
	 */
	const currentShootingSlug = ref(null)
	const currentCategory = ref(null)
	currentShootingSlug.value = categoriesShootingDataForMain[0]?.attributes?.slug
	currentCategory.value = categoriesShootingDataForMain[0]?.attributes?.category?.data?.attributes?.name.toLowerCase()

	const homeImg = ref(null)
	const homeImgCurrent = ref(1)
	const timeChangeImg = ref(15000)
	let interval;

	// Animate after route change
	watch(() => store.transitionComplete, (newValue) => {
		if (newValue) {
			interval = setInterval(() => changeProjectWithAnimation(), timeChangeImg.value)
		}
	});

	// Animate after preloader
	watch(() => store.isPreloaderVisible, () => {
		interval = setInterval(() => changeProjectWithAnimation(), timeChangeImg.value)
  	})

	// Clear interval
	tryOnUnmounted(() => {
		clearInterval(interval)
	})

	tryOnMounted(() => {

		projectsThreePhoto.value = [
			categoriesShootingDataForMain[1],
			categoriesShootingDataForMain[2],
			categoriesShootingDataForMain[3]
		]


		projectOtherPhotosArray.value = []
		categoriesShootingDataForMain.forEach(el => {
			let elemPhotos = []
			el?.attributes?.photo_for_main?.data.forEach(elem => {
				elemPhotos.push(
					elem?.attributes?.formats?.thumbnail?.url
				)
			})
			projectOtherPhotosArray.value.push(elemPhotos)
		})
		projectOtherPhotos.value = projectOtherPhotosArray.value[0]

	})

	function changeProjectWithAnimation() {
		gsap.fromTo('.home-gallery-three-imgs, .home-gallery-img__wrap', {
			opacity: 0,
			filter: 'blur(1rem)',

		}, {
			duration: 3,
			opacity: 1,
			filter: 'blur(0rem)'
		})
		changeProject()
	}

	function changeProject() {
		// change photo
		homeImg.value.forEach(img => gsap.to(img.$el, { opacity: 0, duration: 3 }))
		gsap.to(homeImg.value[homeImgCurrent.value].$el, { opacity: 1, duration: 3 })

		// change link
		currentShootingSlug.value = categoriesShootingDataForMain[homeImgCurrent.value]?.attributes?.slug
		currentCategory.value = categoriesShootingDataForMain[homeImgCurrent.value]?.attributes?.category?.data?.attributes?.name.toLowerCase()

		// change other photos
		projectOtherPhotos.value = []
		projectOtherPhotos.value = projectOtherPhotosArray.value[homeImgCurrent.value]

		homeImgCurrent.value === homeImg.value.length - 1 ?
		homeImgCurrent.value = 0 : homeImgCurrent.value += 1

		// change three photos
		let first, second, third

		first = categoriesShootingDataForMain[homeImgCurrent.value]

		if(categoriesShootingDataForMain[homeImgCurrent.value + 1] === undefined) {
			second = categoriesShootingDataForMain[0]
		} else {
			second = categoriesShootingDataForMain[homeImgCurrent.value + 1]
		}

		if(categoriesShootingDataForMain[homeImgCurrent.value + 2] === undefined) {
			if(categoriesShootingDataForMain.length - 1 === homeImgCurrent.value) {
				third = categoriesShootingDataForMain[1]
			}
			if(categoriesShootingDataForMain.length - 2 === homeImgCurrent.value) {
				third = categoriesShootingDataForMain[0]
			}
		} else {
			third = categoriesShootingDataForMain[homeImgCurrent.value + 2]
		}

		projectsThreePhoto.value = [first, second, third]
		console.log(projectsThreePhoto.value);
	}

	function changeProjectOnClick(e) {
		const getId = Number(e.target.getAttribute('data-id'))
		clearInterval(interval)
		homeImgCurrent.value = categoriesShootingDataForMain.findIndex(x => x.id === getId)
		changeProjectWithAnimation()
		interval = setInterval(() => changeProjectWithAnimation(), timeChangeImg.value)
	}


</script>

<template>
  <TheWrapper>
		<ClientOnly>
			<Teleport to="#viewport">
				<TheHeader :page-index="true" />
			</Teleport>
		</ClientOnly>

		<HomeView>
			<HomeImgWrap>
				<HomeImg
					v-for="img in categoriesShootingDataForMain"
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
				<HomeGalleryThreeImgs
					:images="projectsThreePhoto"
					@click="changeProjectOnClick"
				/>
				<HomeGalleryOtherImgs :images="projectOtherPhotos" />
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
