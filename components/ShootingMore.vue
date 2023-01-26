<script setup>

	import gsap from 'gsap'

	/**
	 * Animation count
	 */
	const store = useDefaultStore()
	const shootingMore = ref(null)

	function anim() {
		gsap.from(shootingMore.value, {
			opacity: 0,
			duration: 3,
		})
	}

	tryOnMounted(() => anim())
	watch(() => store.isPreloaderVisible, () => anim())

</script>
<template>

	<div ref="shootingMore" class="shooting-more">
		<slot />
	</div>

</template>


<style lang="scss" scoped>
.shooting-more {
	mix-blend-mode: difference;
	z-index: 1;
	writing-mode: vertical-rl;
	position: absolute;
	top: 33.333%;
	transform: translateY(-50%) rotate(-180deg);
	left: vw(355px);
	padding-right: vw(32px);
	color: $c-white;
	display: flex;
}
</style>