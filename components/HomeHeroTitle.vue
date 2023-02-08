<script setup>

	import gsap from 'gsap'


	const store = useDefaultStore()

	/**
	 * Animation
	 */
	const homeHeroTitle = ref(null)
	const homeHeroTitleWrap = ref(null)

	tryOnMounted(() => {
		gsap.set(homeHeroTitleWrap.value, { opacity: 0, yPercent: 25 })
	})

	watch(() => store.transitionComplete, (newValue) => {
    if (newValue) {
			showTitle()
			onScrollTitle()
    }
  })
	watch(() => store.isPreloaderVisible, () => {
		onScrollTitle()
  })


	function showTitle() {
		gsap.to(homeHeroTitleWrap.value, { opacity: 1, yPercent: 0, duration: 1.2, delay: 0.3 })
	}

	function onScrollTitle() {
		gsap.to(homeHeroTitle.value, {
			opacity: 0,
			scaleX: 1.2,
			ease: 'Power2.easeOut',
			scrollTrigger: {
				trigger: '.home-hero',
				scrub: true,
				start: 'top top',
				end: 'center 25%'
			}
		})
	}

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