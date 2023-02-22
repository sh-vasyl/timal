<script setup>

	import gsap from "gsap"

	defineProps({
		text: String,
		href: String
	})

	/**
	 * Animate
	 */

	const { animate } = useFadeIn()
	const store = useDefaultStore()

	const shootingGalleryNext = ref(null)

	tryOnMounted(() => {
		gsap.set(shootingGalleryNext.value.$el, { opacity: 0 })
	})

	watch(() => store.transitionComplete, (newValue) => {
    if (newValue) {
			animate(shootingGalleryNext.value.$el)
    }
  })
	watch(() => store.isPreloaderVisible, () => {
		animate(shootingGalleryNext.value.$el)
  })

</script>

<template>

	<nuxt-link ref="shootingGalleryNext" :to="href" class="shooting-gallery-next alfaLink">
		<div class="shooting-gallery-next__text h5">(next)</div>
		<div class="shooting-gallery-next__name h3">{{ text }}</div>
	</nuxt-link>

</template>


<style lang="scss" scoped>
.shooting-gallery-next {
	writing-mode: vertical-rl;
	transform: rotate(-180deg);
	position: absolute;
	bottom: vw(32px);
	right: vw(32px);
	z-index: 1;

	@include max(sm) {
		position: static;
		transform: none;
		margin-top: 72px;
		writing-mode: unset;
	}
	@include max(xs) {
		margin-top: 56px;
	}
}

.shooting-gallery-next__text {
	text-transform: none;
	padding-left: vw(16px);
	@include max(bg) {
		padding-left: 16px;
	}
	@include max(sm) {
		padding-left: 0;
		padding-bottom: 16px;
	}
}

</style>