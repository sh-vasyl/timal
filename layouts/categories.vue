<script setup>

	import gsap from 'gsap'
	import { ScrollSmoother } from 'gsap/ScrollSmoother'
	import { ScrollTrigger } from 'gsap/ScrollTrigger'
	import { Draggable } from 'gsap/Draggable'

	const store = useDefaultStore()

	/**
	 * Animate
	 */
	// Animate after route change
	watch(() => store.transitionComplete, (newValue) => {
    if (newValue) {
			removeBasicScroll()
			initProjectsSlider()
    }
  });

	// Animate after preloader
	watch(() => store.isPreloaderVisible, () => {
		initProjectsSlider()
		setTimeout(() => {
			removeBasicScroll()
		}, 1000)
  })

	/**
	 * API
	 */
	const runTimeConfig = useRuntimeConfig()
	const url = runTimeConfig.public.baseUrl
	const { data: categories } = await useAsyncData('categories', () => {
		return $fetch('/api/categories')
	})

	// category api
	const dataCategory = categories.value?.data?.data[store.category]
	const dataCategoryTitle = dataCategory?.attributes?.name
	const dataCategoryDescr = dataCategory?.attributes?.description
	const dataCategoryProjects = dataCategory?.attributes?.shootings?.data
	const currentCategory = dataCategory?.attributes?.name.toLowerCase()

	/**
	 * Variables
	 */
	const theTitle = ref(null)
	const theActions = ref(null)

	const categoryView = ref(null)
	const categoryTitle = ref(null)
	const categoryDescr = ref(null)
	const categoryCount = ref(null)
	const categoryGalleryWrapper = ref(null)
	const categoryGalleryLink = ref([])
	const categoryGalleryImg = ref([])
	const categorySignatureFirst = ref(null)
	const categorySignatureSecond = ref(null)
	const categoryProxy = ref(null)

	const totalProjects = ref(0)
	const currentScrollPosition = ref(0)

	const animationDistance = ref(250)
	const animationDragSpeed = ref(0.8)
	const animationScrollSpeed = ref(3)

	const dimensions = ref('vw')

	tryOnMounted(() => {
		let mm = gsap.matchMedia()

		mm.add("(max-width: 1439px)", () => {
			dimensions.value = 'px'
		})
	})

	tryOnMounted(() => {
		getTotalProjects()
	})

	/**
	 * Functions
	 */
	function removeBasicScroll() {
		if (ScrollTrigger.isTouch === 1) {
			gsap.set('body, html', {
				overflow: 'hidden',
				position: 'fixed',
				top: '0',
				left: '0',
				right: '0',
				bottom: '0',
			})
		}
	}

	function getTotalProjects() {
		totalProjects.value = categoryGalleryLink.value.length
	}

	function initProjectsSlider() {

		setTimeout(() => {
			if (ScrollTrigger.isTouch === 1) {
				gsap.to(window, { scrollTo: 1, duration: 0.01 })
			} else {
				ScrollSmoother.get().scrollTo(1)
			}
		}, 1)

		let tlScroll = gsap.to(categoryGalleryWrapper.value.$el, {
			x: document.documentElement.clientWidth - categoryGalleryWrapper.value.$el.clientWidth,
			ease: "none",
			scrollTrigger: {
				trigger: categoryView.value.$el,
				pin: true,
				id: 'scroll',
				scrub: 1,
				end: `+=${animationScrollSpeed.value}00%`,
				onEnter: () => {
					let clamp, dragRatio;

					Draggable.create(categoryProxy.value.$el, {
						trigger: categoryGalleryWrapper.value.$el,
						type: "x",
						onDragStart() {
							clamp
							this.startScroll = tlScroll.scrollTrigger.scroll()
							animateLinksTo()
						},
						onDrag() {
							tlScroll.scrollTrigger.scroll(clamp(this.startScroll - (this.x - this.startX) * dragRatio));
						},
						onDragEnd() {
							animateLinksFrom()
						}
					});

					clamp = gsap.utils.clamp(tlScroll.scrollTrigger.start + 1, tlScroll.scrollTrigger.end - 1)
					dragRatio = categoryGalleryWrapper.value.$el.clientWidth /
												(document.documentElement.clientWidth * animationDragSpeed.value)
				},
				onUpdate: (self) => {
					currentScrollPosition.value = self.scroll()

					if(currentScrollPosition.value > animationDistance.value) {
						animateTextTo()
					} else {
						animateTextFrom()
					}
				}
			}
		});

		ScrollTrigger.addEventListener("scrollStart", () => {
			animateLinksTo()
		})
		ScrollTrigger.addEventListener("scrollEnd", () => {
			animateLinksFrom()
		})

	}

	function animateLinksTo() {
		categoryGalleryLink.value.forEach(link => {
			gsap.to(link.$el, {scale: 0.8, ease: 'Power2.easeOut'})
		})
		categoryGalleryImg.value.forEach(img => {
			gsap.to(img.$el, {scale: 1.2, ease: 'Power2.easeOut'})
		})
	}

	function animateLinksFrom() {
		categoryGalleryLink.value.forEach(link => {
			gsap.to(link.$el, {scale: 1, ease: 'Power2.easeOut'})
		})
		categoryGalleryImg.value.forEach(img => {
			gsap.to(img.$el, {scale: 1, ease: 'Power2.easeOut'})
		})
	}

	function animateTextTo() {
		let mm = gsap.matchMedia();

		mm.add("(max-width: 1023px)", () => {
			gsap.to(theTitle.value.$el, { bottom: '32px', ease: 'Power2.easeOut'})
			gsap.to(theActions.value.$el, { bottom: '60px', ease: 'Power2.easeOut' })
		})
		mm.add("(max-width: 767px)", () => {
			gsap.to(theActions.value.$el, { bottom: '44px', ease: 'Power2.easeOut' })
		})
		gsap.to(theTitle.value.$el, {scale: 0.5, ease: 'Power2.easeOut'})

		gsap.to(categoryDescr.value.$el, { autoAlpha: 0, duration: 0.25, ease: 'Power2.easeOut' })

		mm.add("(min-width: 1024px)", () => {
			gsap.to(categoryCount.value.$el, { autoAlpha: 0, duration: 0.25, ease: 'Power2.easeOut' })
		})
	}

	function animateTextFrom() {
		let mm = gsap.matchMedia();

		mm.add("(max-width: 1023px)", () => {
			gsap.to(theTitle.value.$el, { bottom: '135px', ease: 'Power2.easeOut'})
			gsap.to(theActions.value.$el, { bottom: '172px', ease: 'Power2.easeOut' })
		})
		mm.add("(max-width: 767px)", () => {
			gsap.to(theTitle.value.$el, { bottom: '127px', ease: 'Power2.easeOut'})
			gsap.to(theActions.value.$el, { bottom: '159px', ease: 'Power2.easeOut' })
		})

		gsap.to(theTitle.value.$el, {scale: 1, ease: 'Power2.easeOut'})

		gsap.to(categoryDescr.value.$el, { autoAlpha: 1, duration: 0.25, ease: 'Power2.easeOut' })

		mm.add("(min-width: 1024px)", () => {
			gsap.to(categoryCount.value.$el, { autoAlpha: 1, duration: 0.25, ease: 'Power2.easeOut' })
		})
	}

</script>

<template>

	<TheWrapper class="wrapper-inner">
		<ClientOnly>
			<Teleport to="#viewport">
				<TheHeader />
			</Teleport>
		</ClientOnly>

		<CategoryView
			ref="categoryView"
		>
			<TheTitle
				ref="theTitle"
				class="--darken"
			>
				<CategoryTitle
					ref="categoryTitle"
					:text="dataCategoryTitle"
				/>
			</TheTitle>

			<TheDescription class="--darken">
				<CategoryDescr
					ref="categoryDescr"
					:text="dataCategoryDescr"
				/>
			</TheDescription>

			<TheActions
				ref="theActions"
				class="--darken">
				<CategoryCount
					ref="categoryCount"
					:total-projects="totalProjects"
				/>
			</TheActions>

			<CategorySignatureFirst
				ref="categorySignatureFirst"
			/>
			<CategorySignatureSecond
				ref="categorySignatureSecond"
			/>

			<CategoryGallery>
				<CategoryGalleryWrapper
					ref="categoryGalleryWrapper"
				>
					<CategoryGalleryLink
						v-for="(link, i) in dataCategoryProjects"
						ref="categoryGalleryLink"
						:href="`/${currentCategory}/${link?.attributes?.slug}`"
					>
						<CategoryGalleryImg
							ref="categoryGalleryImg"
							:src="url + link?.attributes?.photos?.data[0]?.attributes?.formats?.large?.url"
						/>
					</CategoryGalleryLink>
				</CategoryGalleryWrapper>
			</CategoryGallery>

		</CategoryView>
		<CategoryProxy
			ref="categoryProxy"
		/>
	</TheWrapper>

</template>
