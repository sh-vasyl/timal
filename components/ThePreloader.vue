<script setup>

	import gsap from 'gsap'
	import { ScrollSmoother } from 'gsap/ScrollSmoother'
	import { ScrollTrigger } from 'gsap/ScrollTrigger'

	/**
	 * Preloader photos
	 */
	const preloaderPhotos = ref([
		{ src: '/images/preloader/sasha-z-1.jpeg', text: 'sasha-z-1.jpeg' },
		{ src: '/images/preloader/sasha-z-2.jpeg', text: 'sasha-z-2.jpeg' },
		{ src: '/images/preloader/sasha-z-3.jpeg', text: 'sasha-z-3.jpeg' },
		{ src: '/images/preloader/sasha-z-4.jpeg', text: 'sasha-z-4.jpeg' },
		{ src: '/images/preloader/sasha-z-5.jpeg', text: 'sasha-z-5.jpeg' },
		{ src: '/images/preloader/sasha-z-6.jpeg', text: 'sasha-z-6.jpeg' },
		{ src: '/images/preloader/sasha-z-7.jpeg', text: 'sasha-z-7.jpeg' },
		{ src: '/images/preloader/sasha-z-8.jpeg', text: 'sasha-z-8.jpeg' },
		{ src: '/images/preloader/sasha-z-9.jpeg', text: 'sasha-z-9.jpeg' },
		{ src: '/images/preloader/sasha-z-10.jpeg', text: 'sasha-z-10.jpeg' }
	])

	/**
	 * Preloader animation
	 */
	const route = useRoute()
	const store = useDefaultStore()
	const preloader = ref(null)
	const preloaderWrapper = ref(null)
	const preloaderTitle = ref(null)
	const preloaderTitleSecond = ref(null)
	const preloaderPhotoItem = ref([])
	const preloaderTimeInSeconds = ref(1)
	let progress = ref(0)
	let tl = gsap.timeline()

	tryOnMounted(() => {

		// Scroll off
		ScrollSmoother.get().paused(true)

		// Start animation
		tl.to(progress, {
			progress: 99,
			duration: preloaderTimeInSeconds.value,
			ease: 'none',
			onStart: () => {
				if(route.name === 'index') {
					gsap.set('.home-hero-title', {top: 0, yPercent: 0})
					gsap.set('.home-hero-title__wrap', {opacity: 1, yPercent: 0})
				}
				gsap.to(preloaderWrapper.value.$el, {
					opacity: 1
				})
			},
			onUpdate: () => {
				// Percentage
				progress.value = Math.floor(progress.progress)

				// Title
				gsap.to(preloaderTitleSecond.value.$el, {
					width: Math.floor(progress.progress) + '%'
				})
				// Images
				const preloaderPhotoIndex = Math.floor(progress.value / preloaderPhotoItem.value.length)

				gsap.to(preloaderPhotoItem.value[preloaderPhotoIndex].$el, {
					opacity: 1
				})
			},
		})

		// End animation
		tl.to(progress, {
			progress: 100,
			ease: 'none',
			onUpdate() {
				// Percentage
				progress.value = Math.floor(progress.progress)

				// Title
				gsap.to(preloaderTitleSecond.value.$el, {
					width: Math.floor(progress.progress) + '%'
				})
			},
			onComplete: () => {
				const endOfAnimationTl = gsap.timeline({
					onStart: () => {
						store.hidePreloader()
					},
					onComplete: () => {
						ScrollSmoother.get().paused(false)
					}
				})
				endOfAnimationTl.to(preloader.value, {
					autoAlpha: 0,
					duration: 1,
					ease: 'none'
				})
				endOfAnimationTl.to(preloaderTitle.value.$el, {
					top: '50%',
					y: '-50%',
					duration: 1,
					ease: 'none'
				}, 0)

				if(route.name === 'index') {
					endOfAnimationTl.to('.home-hero-title', {
						top: '50%',
						y: '-50%',
						duration: 1,
						ease: 'none'
					}, 0)
				}

			},
		})
	})

</script>

<template>
	<div ref="preloader" class="preloader">
		<ThePreloaderWrapper ref="preloaderWrapper">
			<ThePreloaderTitle ref="preloaderTitle">
				<ThePreloaderTitleFirst />
				<ThePreloaderTitleSecond ref="preloaderTitleSecond" />
			</ThePreloaderTitle>
			<ThePreloaderPercent :progress="progress" />
			<ThePreloaderPhotos>
				<ThePreloaderPhotoItem
					v-for="(item, i) in preloaderPhotos"
					ref="preloaderPhotoItem"
					:index="i"
				>
					<ThePreloaderPhotoItemImg :src="item.src" />
					<ThePreloaderPhotoItemText :text="item.text" />
				</ThePreloaderPhotoItem>
			</ThePreloaderPhotos>

		</ThePreloaderWrapper>
	</div>
</template>

<style lang="scss" scoped>

.preloader {
	position: fixed;
	top: 0;
	left: 0;
	bottom: 0;
	right: 0;
	z-index: 9999;
	overflow: hidden;
	background: $c-white;
	color: $c-black;
}

</style>