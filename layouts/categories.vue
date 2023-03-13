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
			setScrollerMobile()
			initProjectsSlider()
    }
  });

	// Animate after preloader
	watch(() => store.isPreloaderVisible, () => {
		setScrollerMobile()
		initProjectsSlider()
  })


	// After all preloader animations
	watch(() => store.isPreloaderAnimationComplete, () => {
		gsap.set('body,html', { overflow: 'hidden'})
		console.log('oko');
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
	const theDescr = ref(null)
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

	tryOnUnmounted(() => {
		if (ScrollTrigger.isTouch === 1) {
			gsap.set('body,html,#viewport', { clearProps: 'all' })
			ScrollTrigger.defaults({ scroller: window })
		}
	})

	/**
	 * Functions
	 */

	function setScrollerMobile() {
		if (ScrollTrigger.isTouch === 1) {
			gsap.set('body,html', {
				position: 'fixed',
				height: '100vh',
				width: '100vw'
			})

			gsap.set('#viewport', {
				height: '100vh',
				overflowY: 'scroll',
			})

			ScrollTrigger.defaults({ scroller: '#viewport' })
		}
	}

	function getTotalProjects() {
		totalProjects.value = categoryGalleryLink.value.length
	}

	function initProjectsSlider() {

		let animationComplete = false
		let isScrollFinish = false

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
				pinType: ScrollTrigger.isTouch === 1 ? 'fixed' : 'transform',
				id: 'scroll',
				scrub: 1,
				end: `+=${totalProjects.value * 0.5}00%`,
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
						},
					});

					clamp = gsap.utils.clamp(tlScroll.scrollTrigger.start + 1, tlScroll.scrollTrigger.end - 1)
					dragRatio = categoryGalleryWrapper.value.$el.clientWidth /
												(document.documentElement.clientWidth * (totalProjects.value * 0.1))
				},
				onUpdate: (self) => {
					if(!isScrollFinish) {
						if(Math.abs(self.getVelocity()) < 150) {
							animateLinksFrom()
							isScrollFinish = true
						}
					}

					if(isScrollFinish) {
						if(Math.abs(self.getVelocity()) > 150) {
							animateLinksTo()
							isScrollFinish = false
						}
					}

					currentScrollPosition.value = self.scroll()

					if(!animationComplete) {
						if(currentScrollPosition.value > animationDistance.value) {
							animateTextTo()
							animationComplete = true
						}
					}
					if(animationComplete) {
						if(currentScrollPosition.value < animationDistance.value) {
							animateTextFrom()
							animationComplete = false
						}
					}
				}
			}
		});

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
			gsap.to(theDescr.value.$el, { height: 0, duration: 0.25, ease: 'Power2.easeOut' })
			gsap.to(theActions.value.$el, {y: 40, ease: 'Power2.easeOut'})
		})

		mm.add("(max-width: 767px)", () => {
			gsap.to(theActions.value.$el, {y: 26, ease: 'Power2.easeOut'})
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
			gsap.to(theDescr.value.$el, { height: 'auto', duration: 0.25, ease: 'Power2.easeOut' })
			gsap.to(theActions.value.$el, {y: 0, ease: 'Power2.easeOut'})
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
			<ThePageContentWrap>
				<TheTitle
					ref="theTitle"
					class="--darken"
				>
					<CategoryTitle
						ref="categoryTitle"
						:text="dataCategoryTitle"
					/>
				</TheTitle>

				<TheDescription
					ref="theDescr"
					class="--darken"
				>
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
			</ThePageContentWrap>


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
