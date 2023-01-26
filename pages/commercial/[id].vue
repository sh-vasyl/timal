<script setup>

	import gsap from 'gsap'
	import { Draggable } from "gsap/Draggable"

	/**
	 * Data
	 */
	const galleryImages = ref([
		{src: '/images/commercial/img-1.png', text: 'sasha-z-1.jpg'},
		{src: '/images/commercial/img-2.png', text: 'sasha-z-2.jpg'},
		{src: '/images/commercial/img-3.png', text: 'sasha-z-3.jpg'},
		{src: '/images/commercial/img-4.png', text: 'sasha-z-4.jpg'},
		{src: '/images/commercial/img-5.png', text: 'sasha-z-5.jpg'},
	])

	/**
	 * Variables
	 */
	const store = useDefaultStore()
	const shootingView = ref(null)
	const shootingTitle = ref(null)
	const shootingDescr = ref(null)
	const shootingMore = ref(null)
	const shootingGalleryWrapper = ref(null)
	const shootingGalleryItem = ref([])
	const galleryCurrentNumberImage = ref(0)
	const galleryTotalImages = ref(0)
	const shootingSeeAll = ref(null)
	const shootingNext = ref(null)
	const shootingCount = ref(null)
	const seeAllImages = ref(false)
	let tlScroll;
	let tlItems;

	/**
	 * Animation gallery after preloader or route change
	 */
	function animItems() {
		const galleryItems = document.querySelectorAll('.shooting-gallery__item')
		gsap.from(galleryItems[0], { filter: 'blur(2rem)', duration: 1})
	}
	tryOnMounted(() => animItems())
	watch(() => store.isPreloaderVisible, () => animItems())

	/**
	 * Get total images
	 */
	tryOnMounted(() => {
		const galleryItems = document.querySelectorAll('.shooting-gallery__item')
		galleryTotalImages.value = galleryItems.length
	})

	/**
	 * Animation gallery on scroll
	 */
	tryOnMounted(() => {
		if(!seeAllImages.value) {
			const galleryItems = document.querySelectorAll('.shooting-gallery__item')
			galleryItems.forEach((item, i) => {
				if(i) gsap.set(item, {scale: 0.5})
			})

			tlScroll = gsap.to(shootingGalleryWrapper.value.$el, {
				ease: "none",
				x: document.documentElement.clientWidth - shootingGalleryWrapper.value.$el.clientWidth,
				scrollTrigger: {
					trigger: shootingView.value.$el,
					pin: true,
					scrub: 0.1,
					end: "+=700%",
					onUpdate: (self) => {
						if(self.progress > 0.1) {
							gsap.to(shootingTitle.value.$el, { fontSize: "5vw" })
							gsap.to(shootingDescr.value.$el, {opacity: 0, x: -100})
							gsap.to(shootingMore.value.$el, {left: 0})
						} else {
							gsap.to(shootingTitle.value.$el, { fontSize: "8.75vw" })
							gsap.to(shootingDescr.value.$el, {opacity: 1, x: 0})
							gsap.to(shootingMore.value.$el, {left: '24.65vw'})
						}
					}
				}
			})

			galleryItems.forEach((item, i) => {
				const idx = i + 1
				tlItems = gsap.to(item, {
					scale: 1,
					ease: 'none',
					scrollTrigger: {
						containerAnimation: tlScroll,
						trigger: item,
						scrub: true,
						start: 'left right',
						end: 'center center',
						onEnter: () => galleryCurrentNumberImage.value = idx,
						onEnterBack: () => galleryCurrentNumberImage.value = idx,
					}
				});
			})
		}
	})

	/**
	 * See all photos one screen
	 */
	function seeAllPhotos() {
		seeAllImages.value = true
		const galleryItems = document.querySelectorAll('.shooting-gallery__item')

		gsap.set(shootingNext.value.$el, { autoAlpha: 0 })
		gsap.set(galleryItems, {
			position: 'absolute',
			left: '55%',
			top: 0,
		})
		gsap.set(shootingGalleryWrapper.value.$el, {
			width: '100vw',
			paddingLeft: '50vw',
			paddingRight: '50vw',
		})

		tlScroll.scrollTrigger.kill(true)
		tlItems.scrollTrigger.kill(true)

		gsap.to(shootingTitle.value.$el, { fontSize: "5vw" })
		gsap.to([shootingDescr.value.$el, shootingCount.value.$el], {opacity: 0, x: -100})
		gsap.to(shootingMore.value.$el, {left: 0})
		gsap.to('.shooting-gallery__text', {opacity: 1})
		shootingSeeAll.value.$el.textContent = '(back)'

		gsap.to(galleryItems, {
			width: '7.77vw',
			scale: 1,
			height: '10.4vw',
			duration: 2,
			delay: 0.3
		})

		galleryItems.forEach(item => {
			gsap.to(item, {
				left: Math.floor(Math.random() * (85 - 15) + 10) + '%',
				top: Math.floor(Math.random() * (85 - 10) + 10) + '%',
				duration: 2,
				delay: 0.3
			})
		})

		Draggable.create(galleryItems, {
			edgeResistance: 0.65,
			bounds: shootingGalleryWrapper.value.$el,
			onPress() {
				gsap.set(this.target.querySelector('.shooting-gallery__item-bg'), {opacity: 1})
				gsap.set(this.target.querySelector('.shooting-gallery__img-bg'), {opacity: 1})
				gsap.set(this.target.querySelector('.shooting-gallery__text-bg'), {opacity: 1})
				gsap.set(this.target.querySelector('.shooting-gallery__text-wrapper'), {color: 'white'})
			},
			onDragEnd: () => {
				gsap.set('.shooting-gallery__item-bg', {opacity: 0})
				gsap.set('.shooting-gallery__img-bg', {opacity: 0})
				gsap.set('.shooting-gallery__text-bg', {opacity: 0})
				gsap.set('.shooting-gallery__text-wrapper', {color: 'black'})
			},
		});

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
			<ShootingTitle ref="shootingTitle" />
			<ShootingDescr ref="shootingDescr" />
			<ShootingMore ref="shootingMore">
				<ShootingCount
					ref="shootingCount"
					:current-number="galleryCurrentNumberImage"
					:total-images="galleryTotalImages"
				/>
				<ShootingSeeAll
					ref="shootingSeeAll"
					@click="seeAllPhotos"
				/>
			</ShootingMore>

			<ShootingGallery >
				<ShootingSignature ref="shootingSignature" />
				<ShootingGalleryWrapper ref="shootingGalleryWrapper">
					<ShootingGalleryItem
						ref="shootingGalleryItem"
						:images="galleryImages"
					/>
					<ShootingGalleryNext ref="shootingNext" />
				</ShootingGalleryWrapper>
			</ShootingGallery>
		</ShootingView>
	</TheWrapper>


</template>
