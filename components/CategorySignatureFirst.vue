
<script setup>
	import gsap from 'gsap'
	/**
	 * Animate
	 */

	const store = useDefaultStore()

	const categorySignature = ref(null)

	const { animate } = useSvg()

	tryOnMounted(() => {
		gsap.set(categorySignature.value, { opacity: 0 })
	})

	watch(() => store.transitionComplete, (newValue) => {
    if (newValue) {
			animate(categorySignature.value)
    }
  })
	watch(() => store.isPreloaderVisible, () => {
		animate(categorySignature.value)
  })

</script>

<template>

	<svg ref="categorySignature" class="category-signature-first" viewBox="0 0 384 425" fill="none" xmlns="http://www.w3.org/2000/svg">
		<path d="M192.743 98.9527C411.006 176.303 506.978 66.8667 116.811 6.58694C119.627 27.77 295.369 -120.064 2.00002 362.837C188.7 264.872 214.94 72.2766 72.9076 424" stroke="#2828BD"/>
	</svg>

</template>


<style lang="scss" scoped>
.category-signature-first {
	position: absolute;
	width: vw(384px);
	height: vw(281px);
	top: vw(582px);
	transform: translateY(-50%) rotate(-180deg);
	left: vw(758px);
}
</style>