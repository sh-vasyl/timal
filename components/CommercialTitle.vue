<script setup>

	import gsap from 'gsap'

	const homeHeroTitle = ref(null)

	tryOnMounted(() => {
		// gsap.to(homeHeroTitle.value, {
		// 	opacity: 0,
		// 	scaleX: 1.2 ,
		// 	scrollTrigger: {
		// 		trigger: '.home-hero',
		// 		scrub: true,
		// 		start: 'top top',
		// 		end: 'center 25%'
		// 	}
		// })
	})

</script>

<template>

	<div ref="commercialTitle" class="commercial-title h3">
		COMMERCial
	</div>

</template>


<style lang="scss" scoped>
.commercial-title {
	mix-blend-mode: darken;
	writing-mode: vertical-rl;
	transform: rotate(-180deg);
	position: absolute;
	bottom: vw(32px);
	left: vw(32px)
}
</style>