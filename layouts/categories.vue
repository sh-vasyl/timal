<script setup>

	import gsap from 'gsap'
	import { ScrollSmoother } from 'gsap/ScrollSmoother'
	import { ScrollTrigger } from 'gsap/ScrollTrigger'
	import { Draggable } from 'gsap/Draggable'

	const store = useDefaultStore()

	const { transitionState } = useTransitionComposable()

	/**
	 * Animate
	 */
	// Animate after route change
	watch(() => transitionState.transitionComplete, (newValue) => {
    if (newValue) {
			initProjectsSlider()
    }
  });

	// Animate after preloader
	watch(() => store.isPreloaderVisible, () => {
		initProjectsSlider()
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
	const animationDragSpeed = ref(0.5)
	const animationScrollSpeed = ref(3)

	tryOnMounted(() => {
		getTotalProjects()
	})

	/**
	 * Functions
	 */
	function getTotalProjects() {
		totalProjects.value = categoryGalleryLink.value.length
	}

	function initProjectsSlider() {

		setTimeout(() => { ScrollSmoother.get().scrollTo(1)}, 1)


		let tlScroll = gsap.to(categoryGalleryWrapper.value.$el, {
			x: document.documentElement.clientWidth - categoryGalleryWrapper.value.$el.clientWidth,
			ease: "none",
			scrollTrigger: {
				trigger: categoryView.value.$el,
				pin: true,
				id: 'scroll',
				scrub: 1,
				end: `+=${animationScrollSpeed.value}00%`,
				// invalidateOnRefresh: true,
				markers: true,
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
			gsap.to(link.$el, {scale: 0.8})
		})
		categoryGalleryImg.value.forEach(img => {
			gsap.to(img.$el, {scale: 1.2})
		})
	}

	function animateLinksFrom() {
		categoryGalleryLink.value.forEach(link => {
			gsap.to(link.$el, {scale: 1})
		})
		categoryGalleryImg.value.forEach(img => {
			gsap.to(img.$el, {scale: 1})
		})
	}

	function animateTextTo() {
		gsap.to(categoryTitle.value.$el, { fontSize: "5vw" })
		gsap.to([categoryCount.value.$el, categoryDescr.value.$el], { autoAlpha: 0 })
	}

	function animateTextFrom() {
		gsap.to(categoryTitle.value.$el, { fontSize: "8.75vw" })
		gsap.to([categoryCount.value.$el, categoryDescr.value.$el], { autoAlpha: 1 })
	}

</script>

<template>

	<TheWrapper class="wrapper-inner">
		<ClientOnly>
			<Teleport to="#viewport">
				<TheHeaderInner />
			</Teleport>
		</ClientOnly>

		<CategoryView
			ref="categoryView"
		>
			<TheTitle class="--darken">
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

			<TheActions class="--darken">
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
							:src="url + link?.attributes?.photos?.data[0]?.attributes?.url"
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
