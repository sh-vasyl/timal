<script setup>

	import gsap from 'gsap'

	/**
	 * Animation count
	 */
	const store = useDefaultStore()
	const commercialCount = ref(null)

	function anim() {
		gsap.from(commercialCount.value, {
			opacity: 0,
			duration: 3,
		})
	}

	tryOnMounted(() => anim())
	watch(() => store.isPreloaderVisible, () => anim())

</script>

<template>

	<div ref="commercialCount" class="commercial-count h5">
		(18)
	</div>

</template>


<style lang="scss" scoped>
.commercial-count {
	mix-blend-mode: darken;
	writing-mode: vertical-rl;
	position: absolute;
	top: 25%;
	transform: translateY(-50%) rotate(-180deg);
	left: vw(387px);
}
</style>