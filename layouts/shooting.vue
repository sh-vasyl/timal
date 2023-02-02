<script setup>

	import gsap from 'gsap'
	import { Draggable } from "gsap/Draggable"
	import { ScrollSmoother } from "gsap/ScrollSmoother"

	const store = useDefaultStore()

	const { transitionState } = useTransitionComposable()

	/**
	 * Animate
	 */
	// Animate after route change
	watch(() => transitionState.transitionComplete, (newValue) => {
		if (newValue) {
			initGalleryScroll()
		}
	});

	// Animate after preloader
	watch(() => store.isPreloaderVisible, () => {
		initGalleryScroll()
	})


	/**
	 * API
	 */
	const runTimeConfig = useRuntimeConfig()
	const url = runTimeConfig.public.baseUrl
	const { slug } = useRoute().params

	const { data: categories } = await useAsyncData('categories', () => {
		return $fetch('/api/categories')
	})
	const dataCategory = categories.value?.data?.data[store.category]
	const dataShootings = dataCategory?.attributes?.shootings?.data;
	const dataShootingCurrentIndex = ref(null);
	const dataShooting = dataShootings.find((el, i) => {
		dataShootingCurrentIndex.value = i
		return el?.attributes?.slug === slug
	})


	// current project
	const currentCategory = dataCategory?.attributes?.name.toLowerCase()
	const dataShootingName1 = dataShooting?.attributes?.name1
	const dataShootingName2 = dataShooting?.attributes?.name2
	const dataShootingInfo = dataShooting?.attributes?.info_block?.add_info
	const dataShootingPhotos = dataShooting?.attributes?.photos?.data

	// next project
	const dataShootingNextIndex = (dataShootingCurrentIndex.value + 1) % dataShootings.length;
	const dataShootingNextProject = dataShootings[dataShootingNextIndex]
	const dataShootingNextName = dataShootingNextProject?.attributes?.name2


	/**
	 * Variables
	 */
	const itemWidth = ref(45),
	      itemScale = ref(0.5),

	      galleryPadding = ref(110),
				galleryScrollSpeed = ref(7),
				galleryScrollDistance = ref(250),

				viewAllItemWidth = ref(7.77),
				viewAllItemHeight = ref(10.4),
	      viewAllAnimationDuration = ref(1.5),

				galleryTitleSmallSize = ref(5),
				galleryTitleBigSize = ref(8.75),
				galleryMorePosition = ref(-24.5),

				dimensions = ref('vw')

	const shootingView = ref(null)
	const shootingTitle = ref(null)
	const shootingDescr = ref(null)
	const shootingMore = ref(null)
	const shootingGalleryWrapper = ref(null)
	const shootingGalleryItem = ref([])
	const shootingSeeAll = ref(null)
	const shootingNext = ref(null)
	const shootingCount = ref(null)

	const totalImages = ref(0)
	const scaleProperties = ref([])

	const currentNumberImage = ref(1)
	const currentScrollPosition = ref(0)
	const toggleViewMode = ref(false)

	tryOnMounted(() => {
		getTotalImages()
		setItemsWidthAndPosition()
		setGalleryWidth()
	})

	/**
	 * Functions
	 */
	function setItemsWidthAndPosition() {
		shootingGalleryItem.value.forEach((item, i) => {
			gsap.set(item.$el, {
				width: itemWidth.value + dimensions.value,
				left: (galleryPadding.value / 2) + (itemWidth.value * i) + dimensions.value
			})
		})
	}

	function getTotalImages() {
		totalImages.value = shootingGalleryItem.value.length
	}

	function setGalleryWidth() {
		gsap.set(shootingGalleryWrapper.value.$el, {
			width: galleryPadding.value + (itemWidth.value * totalImages.value) + dimensions.value
		})
	}

	function initGalleryScroll() {
		shootingGalleryItem.value.forEach((item, i) => {
			if(i) gsap.set(item.$el, {scale: itemScale.value})
		})

		let tlScroll = gsap.to(shootingGalleryWrapper.value.$el, {
			ease: "none",
			x: document.documentElement.clientWidth - shootingGalleryWrapper.value.$el.clientWidth,
			scrollTrigger: {
				trigger: shootingView.value.$el,
				pin: true,
				scrub: 0.1,
				end: `+=${galleryScrollSpeed.value}00%`,
				onUpdate: (self) => {
					currentScrollPosition.value = self.scroll()

					if(currentScrollPosition.value > galleryScrollDistance.value) {
						animateTextTo()
					} else {
						animateTextFrom()
					}
				}
			}
		})

		shootingGalleryItem.value.forEach((item, i) => {
			const idx = i + 1
			gsap.to(item.$el, {
				scale: 1,
				ease: 'none',
				scrollTrigger: {
					containerAnimation: tlScroll,
					trigger: item.$el,
					id: 'item',
					scrub: true,
					start: 'left right',
					end: 'center center',
					onEnter: () => currentNumberImage.value = idx,
					onEnterBack: () => currentNumberImage.value = idx,
				}
			});
		})
	}

	function initViewAllMode() {
		ScrollSmoother.get().paused(true)
		let tl = gsap.timeline({ ease: 'none'})

		animateTextTo()
		animateContentTo()

		shootingGalleryItem.value.forEach((item, i) => {
			scaleProperties.value[i] = gsap.getProperty(item.$el, "scale")

			tl.to(item.$el, {
				left: `calc(
					${-gsap.getProperty(shootingGalleryWrapper.value.$el, 'x')}px +
					${Math.floor(Math.random() * (85 - 15) + 10)}vw)`,
				top: Math.floor(Math.random() * (85 - 10) + 10) + 'vh',
				width: `${viewAllItemWidth.value}vw`,
				height: `${viewAllItemHeight.value}vw`,
				scale: 1,
				duration: viewAllAnimationDuration.value,
			}, 0)
		})
	}

	function initNormalMode() {
		shootingGalleryItem.value.forEach(item => Draggable.get(item.$el).kill())

		let tl = gsap.timeline({
			ease: 'none',
			onComplete() {
				if(!toggleViewMode.value) {
					setTimeout(() => ScrollSmoother.get().paused(false), 10)
				}
			}
		})

		if(currentScrollPosition.value < galleryScrollDistance.value) {
			animateTextFrom()
		}
		animateContentFrom()
		removeDragStyles()

		shootingGalleryItem.value.forEach((item, i) => {
			tl.to(item.$el, {
				width: itemWidth.value + dimensions.value,
				left: (galleryPadding.value / 2) + (itemWidth.value * i) + dimensions.value,
				top: 0,
				x: 0,
				y: 0,
				height: '100%',
				scale: scaleProperties.value[i],
				duration: viewAllAnimationDuration.value,
			}, 0)
		})
	}

	function initDragImages() {
		shootingGalleryItem.value.forEach(item => {
			Draggable.create(item.$el, {
				edgeResistance: 0.65,
				bounds: shootingGalleryWrapper.value.$el,
				onPress() {
					gsap.set(this.target.querySelector('.shooting-gallery__item-bg'), {opacity: 1})
					gsap.set(this.target.querySelector('.shooting-gallery__img-bg'), {opacity: 1})
					gsap.set(this.target.querySelector('.shooting-gallery__text-bg'), {opacity: 1})
					gsap.set(this.target.querySelector('.shooting-gallery__text-wrapper'), {color: 'white'})
				},
				onDragEnd: () => {
					removeDragStyles()
				},
			});
		})
	}

	function removeDragStyles() {
		gsap.set('.shooting-gallery__item-bg', {opacity: 0})
		gsap.set('.shooting-gallery__img-bg', {opacity: 0})
		gsap.set('.shooting-gallery__text-bg', {opacity: 0})
		gsap.set('.shooting-gallery__text-wrapper', {color: 'black'})
	}

	function animateContentTo() {
		gsap.to(shootingNext.value.$el, { autoAlpha: 0 })
		gsap.to(shootingCount.value.$el, {opacity: 0, x: -100})
		gsap.to('.shooting-gallery__text', {opacity: 1})
		shootingSeeAll.value.$el.textContent = '(back)'
	}

	function animateContentFrom() {
		gsap.to(shootingNext.value.$el, { autoAlpha: 1 })
		gsap.to(shootingCount.value.$el, {opacity: 1, x: 0})
		gsap.to('.shooting-gallery__text', {opacity: 0})
		shootingSeeAll.value.$el.textContent = '(see all)'
	}

	function animateTextTo() {
		gsap.to(shootingTitle.value.$el, { fontSize: galleryTitleSmallSize.value + dimensions.value })
		gsap.to(shootingDescr.value.$el, { autoAlpha: 0, x: -100 })
		gsap.to(shootingMore.value.$el, { x: galleryMorePosition.value + dimensions.value })
	}

	function animateTextFrom() {
		gsap.to(shootingTitle.value.$el, { fontSize: galleryTitleBigSize.value + dimensions.value })
		gsap.to(shootingDescr.value.$el, { autoAlpha: 1, x: 0 })
		gsap.to(shootingMore.value.$el, { x: 0 })
	}

	function toggleMode() {
		if(!toggleViewMode.value) {
			initViewAllMode()
			initDragImages()
			toggleViewMode.value = true
		} else {
			initNormalMode()
			toggleViewMode.value = false
		}
	}

</script>

<template>

	<TheWrapper class="wrapper-inner">
		<ClientOnly>
			<Teleport to="#viewport">
				<TheHeaderInner />
			</Teleport>
		</ClientOnly>

		<ShootingView ref="shootingView">

			<TheTitle class="--difference">
				<ShootingTitle
					:name1="dataShootingName1"
					:name2="dataShootingName2"
					ref="shootingTitle"
				/>
			</TheTitle>

			<TheDescription class="--difference">
				<ShootingDescr
					:descr="dataShootingInfo"
					ref="shootingDescr"
				/>
			</TheDescription>

			<TheActions class="--difference">
				<ShootingMore ref="shootingMore">
					<ShootingCount
						ref="shootingCount"
						:current-number="currentNumberImage"
						:total-images="totalImages"
					/>

					<ShootingSeeAll
						ref="shootingSeeAll"
						@click="toggleMode"
					/>
				</ShootingMore>
			</TheActions>


			<ShootingGallery ref="shootingGallery">
				<ShootingSignature ref="shootingSignature" />

				<ShootingGalleryWrapper ref="shootingGalleryWrapper">
					<ShootingGalleryItem
						v-for="item in dataShootingPhotos"
						ref="shootingGalleryItem"
						:src="url + item?.attributes?.url"
						:text="item?.attributes?.name"
					/>

					<ShootingGalleryNext
						:text="dataShootingNextName"
						:href="`/${currentCategory}/${dataShootingNextProject?.attributes?.slug}`"
						ref="shootingNext"
					/>
				</ShootingGalleryWrapper>
			</ShootingGallery>

		</ShootingView>
	</TheWrapper>


</template>