<script setup>

	import gsap from 'gsap'

	/**
	 * Animation title
	 */
	const store = useDefaultStore()
	const commercialHeroTitle = ref(null)

	function anim() {
		gsap.from(commercialHeroTitle.value, {
			opacity: 0,
			xPercent: -150,
			duration: 1.5
		})
	}

	tryOnMounted(() => anim())
	watch(() => store.isPreloaderVisible, () => anim())

</script>

<template>

	<div ref="commercialHeroTitle" class="commercial-title h3">
		COMMERCial
	</div>

</template>


<style lang="scss" scoped>
.commercial-title {
	mix-blend-mode: darken;
	writing-mode: vertical-rl;
	transform: rotate(-180deg);
	position: fixed;
	bottom: vw(32px);
	left: vw(32px);
	z-index: 1;
}
</style>