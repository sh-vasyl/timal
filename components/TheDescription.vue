<script setup>
	import gsap from 'gsap'
	/**
	 * Animate
	 */

	const store = useDefaultStore()

	const heroDescr = ref(null)

	const { animate } = useFadeIn()

	tryOnMounted(() => {
		gsap.set(heroDescr.value, { opacity: 0 })
	})

	watch(() => store.transitionComplete, (newValue) => {
    if (newValue) {
			animate(heroDescr.value)
    }
  })
	watch(() => store.isPreloaderVisible, () => {
		animate(heroDescr.value)
  })

</script>

<template>

	<div ref="heroDescr" class="hero-descr">
		<slot />
	</div>

</template>


<style lang="scss" scoped>
.hero-descr {
	position: absolute;
	z-index: 1;
	bottom: vw(32px);
	left: vw(387px);
}

</style>