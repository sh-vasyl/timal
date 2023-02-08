<script setup>

	import gsap from 'gsap'
	import { Draggable } from "gsap/Draggable"
	import { ScrollSmoother } from "gsap/ScrollSmoother"
	import { ScrollTrigger } from "gsap/ScrollTrigger"

	gsap.registerPlugin(ScrollTrigger)

	const store = useDefaultStore()



	/**
	 * Animate
	 */
	// Animate after route change
	watch(() => store.transitionComplete, (newValue) => {
		if (newValue) {
			getItemsDistance()
			setItemsPosition()
			setGalleryWidth()
			initGalleryScroll()
		}
	});

	// Animate after preloader
	watch(() => store.isPreloaderVisible, () => {
		getItemsDistance()
		setItemsPosition()
		setGalleryWidth()
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
	const itemScale = ref(0.5),
				itemMargin = ref(50),

				galleryScrollSpeed = ref(7),
				galleryScrollDistance = ref(250),

				viewAllItemHeight = ref(10.4),
	      viewAllAnimationDuration = ref(1.5),

				galleryMorePosition = ref(-24.5),

				dimensions = ref('vw')


	const theTitle = ref(null)
	const shootingView = ref(null)
	const shootingTitle = ref(null)
	const shootingDescr = ref(null)
	const shootingMore = ref(null)
	const shootingGalleryWrapper = ref(null)
	const shootingGalleryItem = ref([])
	const shootingSeeAll = ref(null)
	const shootingNext = ref(null)
	const shootingCount = ref(null)

	const scaleProperties = ref([])

	const currentNumberImage = ref(1)
	const currentScrollPosition = ref(0)
	const toggleViewMode = ref(false)
	const itemsDistance = ref([])

	let tlScroll;

	/**
	 * Functions
	 */

	function getTotalImages() {
		return shootingGalleryItem.value.length
	}

	function getItemsDistance() {
		let distance = 0
		shootingGalleryItem.value.forEach((item, i) => {
			const img = item.$el.querySelector('.shooting-gallery__img')
			itemsDistance.value.push(distance += img.clientWidth + itemMargin.value)
		})
	}

	function getGalleryWidth() {
		return itemsDistance.value[itemsDistance.value.length - 1] + window.innerWidth * 1.1
	}

	function setItemsPosition() {
		shootingGalleryItem.value.forEach((item, i) => {
			if (i > 0) {
				gsap.set(item.$el, {
					left: (window.innerWidth / 1.9) + itemsDistance.value[i - 1]
				})
			} else {
				gsap.set(item.$el, {
					left: (window.innerWidth / 1.9)
				})
			}
		})

	}

	function setGalleryWidth() {
		gsap.set(shootingGalleryWrapper.value.$el, {
			width: getGalleryWidth()
		})
	}

	function initGalleryScroll() {
		shootingGalleryItem.value.forEach((item, i) => {
			if(i) gsap.set(item.$el, {scale: itemScale.value})
		})

		tlScroll = gsap.to(shootingGalleryWrapper.value.$el, {
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
		toggleViewMode.value = true

		ScrollSmoother.get().paused(true)

		animateTextTo()
		animateContentTo()

		shootingGalleryItem.value.forEach((item, i) => {
			scaleProperties.value[i] = gsap.getProperty(item.$el, "scale")
		})

		shootingGalleryItem.value.forEach(item => {
			gsap.to(item.$el, {
				left: `calc(
					${-gsap.getProperty(shootingGalleryWrapper.value.$el, 'x')}px +
					${gsap.utils.random(10, 85)}vw)`,
				top: gsap.utils.random(10, 85) + 'vh',
				height: `${viewAllItemHeight.value}vw`,
				scale: 1,
				duration: viewAllAnimationDuration.value,
				ease: 'Power2.easeOut',
			})
		})
	}

	function initNormalMode(isScroll) {
		toggleViewMode.value = false

		shootingGalleryItem.value.forEach(item => Draggable.get(item.$el).kill())

		let tl = gsap.timeline({
			ease: 'none',
			onComplete: () => {
				if(!toggleViewMode.value) {
					setTimeout(() => {
						ScrollSmoother.get().paused(false)
						if(isScroll) {
							isScroll()
						}
					}, 0)
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
				x: 0,
				y: 0,
				left: i > 0 ? (window.innerWidth / 1.9) + itemsDistance.value[i - 1] : (window.innerWidth / 1.9),
				top: 0,
				height: '100%',
				scale: scaleProperties.value[i],
				duration: viewAllAnimationDuration.value,
				ease: 'Power2.easeIn',
			}, 0)
		})

		return
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
		gsap.to(theTitle.value.$el, {scale: 0.5, ease: 'Power2.easeOut'})
		gsap.to(shootingDescr.value.$el, { autoAlpha: 0, duration: 0.25, ease: 'Power2.easeOut'})
		gsap.to(shootingMore.value.$el, { x: galleryMorePosition.value + dimensions.value, ease: 'Power2.easeOut' })
	}

	function animateTextFrom() {
		gsap.to(theTitle.value.$el, {scale: 1, ease: 'Power2.easeOut'})
		gsap.to(shootingDescr.value.$el, { autoAlpha: 1, duration: 0.25, ease: 'Power2.easeOut'})
		gsap.to(shootingMore.value.$el, { x: 0, ease: 'Power2.easeOut' })
	}

	function toggleMode() {
		if(!toggleViewMode.value) {
			initViewAllMode()
			initDragImages()
		} else {
			initNormalMode()
		}
	}

	function scrollTo(i) {
		if(toggleViewMode.value) {
			initNormalMode(scroll)

			function scroll() {
				let getPosition = getScrollLookup(".shooting-gallery__item", "center center", tlScroll);

				ScrollSmoother.get().scrollTo(getPosition(`#shootingGalleryItem-${i}`), {smooth: 1})
			}
		}
	}

	function getScrollLookup(targets, position, containerAnimation) {
		let triggers = gsap.utils.toArray(targets).map(el => ScrollTrigger.create({
					trigger: el,
					start: position || "top top",
					refreshPriority: -10,
					containerAnimation: containerAnimation
				})),
				st = containerAnimation && containerAnimation.scrollTrigger;
		return target => {
			let t = gsap.utils.toArray(target)[0],
					i = triggers.length;
			while (i-- && triggers[i].trigger !== t) {};
			if (i < 0) {
				return console.warn("target not found", target);
			}
			return containerAnimation ? st.start + (triggers[i].start / containerAnimation.duration()) * (st.end - st.start) : triggers[i].start;
		};
	}

</script>

<template>

	<TheWrapper class="wrapper-inner">
		<ClientOnly>
			<Teleport to="#viewport">
				<TheHeader />
			</Teleport>
		</ClientOnly>

		<ShootingView ref="shootingView">

			<TheTitle
				ref="theTitle"
				class="--difference"
			>
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
						:total-images="getTotalImages()"
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
						v-for="(item, i) in dataShootingPhotos"
						ref="shootingGalleryItem"
						:src="url + item?.attributes?.formats?.large?.url"
						:text="item?.attributes?.name"
						:index="i"
						@click="scrollTo(i)"
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
