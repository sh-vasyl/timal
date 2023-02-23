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
	@include max(bg) {
		left: 25%;
		bottom: 32px;
	}
	@include max(sm) {
		left: 32px;
	}
	@include max(xs) {
		left: 0;
		padding-left: 24px;
		padding-right: 24px;
	}
}

.category-view .hero-descr {
	@include max(sm) {
		position: static;
		order: 3;
		flex: 0 0 100%;
	}
	@include max(xs) {
		padding-left: 0;
		padding-right: 0;
	}
}

.shooting-view .hero-descr {
	@include max(sm) {
		position: static;
		padding-left: 32px;
		padding-right: 32px;
	}
	@include max(xs) {
		padding-left: 20px;
		padding-right: 20px;
	}
}

</style>