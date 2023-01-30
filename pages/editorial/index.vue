<script setup>

	import gsap from 'gsap'
	import { ScrollTrigger } from 'gsap/ScrollTrigger'
	import { Draggable } from 'gsap/Draggable'

	/**
	 * API
	 */
	const runTimeConfig = useRuntimeConfig()
	const url = runTimeConfig.public.baseUrl
	 const { data: categories } = await useAsyncData('categories', () => {
		return $fetch('/api/categories')
	})

	// commercial api
	const dataCommercial = categories.value?.data?.data[0]
	const dataCommercialTitle = dataCommercial?.attributes?.name
	const dataCommercialDescr = dataCommercial?.attributes?.description
	const dataCommercialProjects = dataCommercial?.attributes?.shootings?.data

	/**
	 * Variables
	 */
	const store = useDefaultStore()
	const commercialView = ref(null)
	const commercialTitle = ref(null)
	const commercialDescr = ref(null)
	const commercialCount = ref(null)
	const commercialGalleryWrapper = ref(null)
	const commercialGalleryLink = ref([])
	const commercialGalleryImg = ref([])
	const commercialSignatureFirst = ref(null)
	const commercialSignatureSecond = ref(null)
	const commercialProxy = ref(null)

	const totalProjects = ref(0)
	const currentScrollPosition = ref(0)

	const animationDistance = ref(250)
	const animationDragSpeed = ref(2)
	const animationScrollSpeed = ref(4)

	/**
	 * (after route change or preloader)
	 */
	tryOnMounted(() => {
		getTotalProjects()
		initProjectsSlider()
	})

	function getTotalProjects() {
		totalProjects.value = commercialGalleryLink.value.length
	}

	function initProjectsSlider() {
		let tlScroll = gsap.to(commercialGalleryWrapper.value.$el, {
			x: document.documentElement.clientWidth - commercialGalleryWrapper.value.$el.clientWidth,
			ease: "none",
			scrollTrigger: {
				trigger: commercialView.value.$el,
				pin: true,
				id: 'scroll',
				scrub: 1,
				end: `+=${animationScrollSpeed.value}00%`,
				invalidateOnRefresh: true,
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

		let clamp, dragRatio;

		Draggable.create(commercialProxy.value.$el, {
			trigger: commercialGalleryWrapper.value.$el,
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
		dragRatio = commercialGalleryWrapper.value.$el.clientWidth /
									document.documentElement.clientWidth * animationDragSpeed.value

	}

	function animateLinksTo() {
		commercialGalleryLink.value.forEach(link => {
			gsap.to(link.$el, {scale: 0.8})
		})
		commercialGalleryImg.value.forEach(img => {
			gsap.to(img.$el, {scale: 1.2})
		})
	}

	function animateLinksFrom() {
		commercialGalleryLink.value.forEach(link => {
			gsap.to(link.$el, {scale: 1})
		})
		commercialGalleryImg.value.forEach(img => {
			gsap.to(img.$el, {scale: 1})
		})
	}

	function animateTextTo() {
		gsap.to(commercialTitle.value.$el, { fontSize: "5vw" })
		gsap.to([commercialCount.value.$el, commercialDescr.value.$el], { autoAlpha: 0 })
	}

	function animateTextFrom() {
		gsap.to(commercialTitle.value.$el, { fontSize: "8.75vw" })
		gsap.to([commercialCount.value.$el, commercialDescr.value.$el], { autoAlpha: 1 })
	}

</script>

<template>

	<TheWrapper class="wrapper-inner">
		<ClientOnly>
			<Teleport to="#viewport">
				<TheHeaderInner />
			</Teleport>
		</ClientOnly>

		<CommercialView
			ref="commercialView"
		>
			<TheTitle class="--darken">
				<CommercialTitle
					ref="commercialTitle"
					:text="dataCommercialTitle"
				/>
			</TheTitle>

			<TheDescription class="--darken">
				<CommercialDescr
					ref="commercialDescr"
					:text="dataCommercialDescr"
				/>
			</TheDescription>

			<TheActions class="--darken">
				<CommercialCount
					ref="commercialCount"
					:total-projects="totalProjects"
				/>
			</TheActions>

			<CommercialSignatureFirst
				ref="commercialSignatureFirst"
			/>
			<CommercialSignatureSecond
				ref="commercialSignatureSecond"
			/>

			<CommercialGallery>
				<CommercialGalleryWrapper
					ref="commercialGalleryWrapper"
				>
					<CommercialGalleryLink
						v-for="(link, i) in dataCommercialProjects"
						ref="commercialGalleryLink"
						:href="`/commercial/${link?.attributes?.slug}`"
					>
						<CommercialGalleryImg
							ref="commercialGalleryImg"
							:src="url + link?.attributes?.photos?.data[0]?.attributes?.url"
						/>
					</CommercialGalleryLink>
				</CommercialGalleryWrapper>
			</CommercialGallery>

		</CommercialView>
		<CommercialProxy
			ref="commercialProxy"
		/>
	</TheWrapper>


</template>
