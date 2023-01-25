<script setup>

	import gsap from 'gsap'

	/**
	 * Animation descr
	 */
	const store = useDefaultStore()
	const commercialDescr = ref(null)

	function anim() {
		gsap.from(commercialDescr.value, {
			opacity: 0,
			xPercent: -100,
			duration: 1.5,
			delay: 0.1
		})
	}

	tryOnMounted(() => anim())
	watch(() => store.isPreloaderVisible, () => anim())

</script>

<template>

	<div ref="commercialDescr" class="commercial-descr">
		Commercial is an adjective describing something with money-making and marketing intentions. If you’re a bit of a book snob, steer clear of commercial fiction, which is written for the widest enjoyment.
	</div>

</template>


<style lang="scss" scoped>
.commercial-descr {
	line-height: 150%;
	letter-spacing: 0.02em;
	writing-mode: vertical-rl;
	font-size: vw(11px);
	transform: rotate(-180deg);
	position: absolute;
	bottom: vw(32px);
	left: vw(387px);
	height: vw(320px);
}
</style>