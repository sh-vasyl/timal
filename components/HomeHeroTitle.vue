<script setup>

	import gsap from 'gsap'

	const homeHeroTitle = ref(null)

	tryOnMounted(() => {
		gsap.to(homeHeroTitle.value, {
			opacity: 0,
			scaleX: 1.2 ,
			scrollTrigger: {
				trigger: '.home-hero',
				scrub: true,
				start: 'top top',
				end: 'center 25%'
			}
		})
	})

</script>

<template>

	<div ref="homeHeroTitle" class="home-hero-title">
		<img src="/images/home/title.svg" alt="">
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