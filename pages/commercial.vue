<script setup>

	import gsap from 'gsap'
	import { ScrollTrigger } from 'gsap/ScrollTrigger'

	/**
	 * Gallery images
	 */
	const galleryProjects = ref([
		{
			href: '/',
			src: '/images/commercial/img-1.png'
		},
		{
			href: '/',
			src: '/images/commercial/img-2.png'
		},
		{
			href: '/',
			src: '/images/commercial/img-3.png'
		},
		{
			href: '/',
			src: '/images/commercial/img-4.png'
		},
		{
			href: '/',
			src: '/images/commercial/img-5.png'
		},
	])

	/**
	 * Gallery scroll animation
	 */
	const commercialView = ref(null)
	const commercialTitle = ref(null)
	const commercialDescr = ref(null)
	const count = ref(null)
	const galleryWrapper = ref(null)
	const galleryLink = ref([])
	const signatureFirst = ref(null)
	const signatureSecond = ref(null)

	onMounted(() => {
		let delayedCall;

		console.log('okokoko');
		ScrollTrigger.getAll().forEach(el => el.kill())

		gsap.to(galleryWrapper.value.commercialGalleryWrapper, {
			x: document.documentElement.clientWidth - galleryWrapper.value.commercialGalleryWrapper.clientWidth,
			ease: "none",
			scrollTrigger: {
				trigger: commercialView.value.$el,
				pin: true,
				scrub: 0.1,
				end: "+=700%",
				onUpdate: (self) => {
					if(self.progress > 0.1) {
						gsap.to(commercialTitle.value.$el, { fontSize: "5vw" })
						gsap.to([commercialDescr.value.$el, count.value.commercialCount], {
							opacity: 0, x: -100, stagger: 0.05
						})
						gsap.to([
							signatureFirst.value.commercialSignatureFirst,
							signatureSecond.value.commercialSignatureSecond
						], {
							x: '-50vw', ease: 'none'
						})
					} else {
						gsap.to(commercialTitle.value.$el, { fontSize: "8.75vw" })
						gsap.to([commercialDescr.value.$el, count.value.commercialCount], {
							opacity: 1, x: 0, stagger: 0.05
						})
						gsap.to([
							signatureFirst.value.commercialSignatureFirst,
							signatureSecond.value.commercialSignatureSecond
						], {
							x: 0, ease: 'none'
						})
					}

					galleryLink.value.forEach(link => {
						gsap.to(link.commercialGalleryLink.$el, {scale: 0.8})
					})

					if(delayedCall)
					delayedCall.kill();
					delayedCall = gsap.delayedCall(0.1, () => {
						galleryLink.value.forEach(link => {
							gsap.to(link.commercialGalleryLink.$el, {scale: 1})
						})
					})
				}
			}
		});
	})

</script>

<template>

	<TheHeaderInner />
	<TheWrapper>
		<CommercialView ref="commercialView">
			<CommercialTitle ref="commercialTitle" />
			<CommercialDescr ref="commercialDescr" />
			<CommercialCount ref="count" />
			<CommercialSignatureFirst ref="signatureFirst" />
			<CommercialSignatureSecond ref="signatureSecond" />
			<CommercialGallery>
				<CommercialGalleryWrapper ref="galleryWrapper">
					<CommercialGalleryLink
						v-for="(link, i) in galleryProjects"
						ref="galleryLink"
						:href="link.href"
					>
						<CommercialGalleryImg :src="link.src" />
					</CommercialGalleryLink>
				</CommercialGalleryWrapper>
			</CommercialGallery>
		</CommercialView>
	</TheWrapper>

</template>
