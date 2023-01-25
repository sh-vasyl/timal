<script setup>

	import gsap from 'gsap'

	/**
	 * Animation hero title
	 */
	const homeHeroTitle = ref(null)
	const homeHeroTitleWrap = ref(null)
	let tl = gsap.timeline()

	// on scroll
	tryOnMounted(() => {

		setTimeout(() => {
			tl.to(homeHeroTitle.value, {
				opacity: 0,
				scaleX: 1.2,
				scrollTrigger: {
					trigger: '.home-hero',
					scrub: true,
					start: 'top top',
					end: 'center 25%'
				}
			})
		}, 1)
	})

	// after route change
	tryOnMounted(() => {
		gsap.from(homeHeroTitleWrap.value, { opacity: 0, yPercent: 25, duration: 1.5, delay: 0.5 })
	})

</script>

<template>

	<div ref="homeHeroTitle" class="home-hero-title">
		<div ref="homeHeroTitleWrap" class="home-hero-title__wrap">
			<img src="/images/home/title.svg" alt="">
		</div>
	</div>

</template>


<style lang="scss" scoped>
.home-hero-title {
	position: absolute;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
	width: 100vw;
	mix-blend-mode: overlay;
}
</style>