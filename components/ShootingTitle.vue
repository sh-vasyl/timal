<script setup>

	import gsap from 'gsap'

	/**
	 * Animation title
	 */
	const store = useDefaultStore()
	const shootingHeroTitle = ref(null)

	function anim() {
		gsap.from(shootingHeroTitle.value, {
			opacity: 0,
			xPercent: -150,
			duration: 1.5
		})
	}

	tryOnMounted(() => anim())
	watch(() => store.isPreloaderVisible, () => anim())

</script>

<template>

	<div ref="shootingHeroTitle" class="shooting-title h3">
		<div>Sporty</div>
		<div>Sasha Z.</div>
	</div>

</template>


<style lang="scss" scoped>
.shooting-title {
	mix-blend-mode: difference;
	writing-mode: vertical-rl;
	transform: rotate(-180deg);
	position: absolute;
	bottom: vw(32px);
	left: vw(32px);
	z-index: 1;
	color: $c-white;
}
</style>