<script setup>

	import gsap from 'gsap'

	/**
	 * Gallery images
	 */
	const galleryProjects = ref([
		{
			href: '/commercial/id',
			src: '/images/commercial/img-1.png'
		},
		{
			href: '/commercial/id',
			src: '/images/commercial/img-2.png'
		},
		{
			href: '/commercial/id',
			src: '/images/commercial/img-3.png'
		},
		{
			href: '/commercial/id',
			src: '/images/commercial/img-4.png'
		},
		{
			href: '/commercial/id',
			src: '/images/commercial/img-5.png'
		},
	])

	/**
	 * Gallery animation
	 */
	const store = useDefaultStore()
	const commercialView = ref(null)
	const commercialTitle = ref(null)
	const commercialDescr = ref(null)
	const commercialCount = ref(null)
	const commercialGalleryWrapper = ref(null)
	const commercialGalleryLink = ref([])
	const commercialSignatureFirst = ref(null)
	const commercialSignatureSecond = ref(null)

	// Animation projects after preloader
	function animItems() {
		gsap.from('.commercial-gallery__link', {
			xPercent: 150, duration: 1, stagger: 0.1, ease: 'none',
		})
	}
	tryOnMounted(() => animItems())
	watch(() => store.isPreloaderVisible, () => animItems())

	// Animation on scroll
	tryOnMounted(() => {
		let delayedCall;

		gsap.to(commercialGalleryWrapper.value.$el, {
			x: document.documentElement.clientWidth - commercialGalleryWrapper.value.$el.clientWidth,
			ease: "none",
			scrollTrigger: {
				trigger: commercialView.value.$el,
				pin: true,
				scrub: 0.1,
				end: "+=700%",
				onUpdate: (self) => {
					if(self.progress > 0.1) {
						gsap.to(commercialTitle.value.$el, { fontSize: "5vw" })
						gsap.to([commercialDescr.value.$el, commercialCount.value.$el], {
							opacity: 0, x: -100, stagger: 0.05
						})
						// gsap.to([
						// 	commercialSignatureFirst.value.$el,
						// 	commercialSignatureSecond.value.$el
						// ], {
						// 	x: '-50vw', ease: 'none'
						// })
					} else {
						gsap.to(commercialTitle.value.$el, { fontSize: "8.75vw" })
						gsap.to([commercialDescr.value.$el, commercialCount.value.$el], {
							opacity: 1, x: 0, stagger: 0.05
						})
						// gsap.to([
						// 	commercialSignatureFirst.value.$el,
						// 	commercialSignatureSecond.value.$el
						// ], {
						// 	x: 0, ease: 'none'
						// })
					}

					commercialGalleryLink.value.forEach(link => {
						gsap.to(link.$el, {scale: 0.8})
					})

					if(delayedCall)
					delayedCall.kill();
					delayedCall = gsap.delayedCall(0.1, () => {
						commercialGalleryLink.value.forEach(link => {
							gsap.to(link.$el, {scale: 1})
						})
					})
				}
			}
		});
	})

</script>

<template>

	<TheWrapper class="wrapper-inner">
		<ClientOnly>
			<Teleport to="#viewport">
				<TheHeaderInner />
			</Teleport>
		</ClientOnly>

		<CommercialView ref="commercialView">
			<CommercialTitle ref="commercialTitle" />
			<CommercialDescr ref="commercialDescr" />
			<CommercialCount ref="commercialCount" />
			<CommercialSignatureFirst ref="commercialSignatureFirst" />
			<CommercialSignatureSecond ref="commercialSignatureSecond" />
			<CommercialGallery>
				<CommercialGalleryWrapper ref="commercialGalleryWrapper">
					<CommercialGalleryLink
						v-for="(link, i) in galleryProjects"
						ref="commercialGalleryLink"
						:href="link.href"
					>
						<CommercialGalleryImg :src="link.src" />
					</CommercialGalleryLink>
				</CommercialGalleryWrapper>
			</CommercialGallery>
		</CommercialView>
	</TheWrapper>


</template>
