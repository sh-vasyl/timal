<script setup>

	import gsap from 'gsap'
	import { ScrollSmoother } from 'gsap/ScrollSmoother'

	const store = useDefaultStore()
	const preloader = ref(null)
	const preloaderWrapper = ref(null)
	const preloaderTitle = ref(null)
	const preloaderPhotos = ref(null)
	const preloaderTimeInSeconds = ref(3)
	let progress = ref(0)
	let tl = gsap.timeline()

	// Scroll off
	tryOnMounted(() => ScrollSmoother.get().paused(true))

	// Preloader animation
	tryOnBeforeMount(() => {
		tl.to(progress, {
			progress: 99,
			duration: preloaderTimeInSeconds.value,
			ease: 'none',
			onStart: () => {
				gsap.set('.home-hero-title', {top: 0, yPercent: 0})
				gsap.to(preloaderWrapper.value, {
					opacity: 1
				})
			},
			onUpdate: () => {
				// Percentage
				progress.value = Math.floor(progress.progress)

				// Title
				gsap.to(preloaderTitle.value.preloaderTitleFirst, {
					width: Math.floor(progress.progress) + '%'
				})

				// Images
				const preloaderPhotoIndex = Math.floor(progress.value / preloaderPhotos.value.preloaderPhotoItem.length)
				gsap.to(preloaderPhotos.value.preloaderPhotoItem[preloaderPhotoIndex], {
					opacity: 1
				})
			},
		})
	})

	tryOnMounted(() => {
		tl.to(progress, {
			progress: 100,
			ease: 'none',
			onUpdate() {
				// Percentage
				progress.value = Math.floor(progress.progress)

				// Title
				gsap.to(preloaderTitle.value.preloaderTitleFirst, {
					width: Math.floor(progress.progress) + '%'
				})
			},
			onComplete: () => {
				// End of  animation
				const endOfAnimationTl = gsap.timeline({
					onStart: () => {
						ScrollSmoother.get().paused(false)
						store.hidePreloader()
					},
				})
				endOfAnimationTl.to(preloader.value, {
					autoAlpha: 0,
					duration: 1,
					ease: 'none'
				})
				endOfAnimationTl.to(preloaderTitle.value.preloaderTitle, {
					top: '50%',
					y: '-50%',
					duration: 1,
					ease: 'none'
				}, 0)
				endOfAnimationTl.to('.home-hero-title', {
					top: '50%',
					y: '-50%',
					duration: 1,
					ease: 'none'
				}, 0)
			},
		})
	})

</script>

<template>
	<div ref="preloader" class="preloader">
		<div ref="preloaderWrapper" class="preloader-wrapper">
			<ThePreloaderTitle ref="preloaderTitle" />
			<ThePreloaderPercent :progress="progress" />
			<ThePreloaderPhotos ref="preloaderPhotos" />
		</div>
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

.preloader-wrapper {
	opacity: 0;
}

</style>