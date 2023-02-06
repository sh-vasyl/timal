<script setup>

	import gsap from 'gsap'

	/**
	 * Props
	 */
	defineProps({
		href: String
	})

	/**
	 * Animate
	 */

	const { animate } = useFadeIn()
	const store = useDefaultStore()

	const categoryGalleryLink = ref(null)

	tryOnMounted(() => {
		gsap.set(categoryGalleryLink.value.$el, { opacity: 0 })
	})

	watch(() => store.transitionComplete, (newValue) => {
    if (newValue) {
			animate(categoryGalleryLink.value.$el)
    }
  })
	watch(() => store.isPreloaderVisible, () => {
		animate(categoryGalleryLink.value.$el)
  })

	/**
	 * Set random rotation
	 */
	tryOnMounted(() => {
		gsap.to(categoryGalleryLink.value.$el, {
			rotateZ: (Math.random() - 0.5) * 5
		})
	})

</script>

<template>

	<nuxt-link
		ref="categoryGalleryLink"
		:to="href"
		class="category-gallery__link"
	>
		<slot />
	</nuxt-link>

</template>


<style lang="scss" scoped>

.category-gallery__link {
	margin-left: vw(-16px);
	margin-right: vw(-16px);
	overflow: hidden;
	height: 100%;
	display: flex;
	align-items: center;
	@include max(bg) {
		margin-left: -16px;
		margin-right: -16px;
	}
}

.category-gallery__link:nth-child(1n+1) {
	// width: vw(406px);
	// @include max(bg) {
	// 	width: 330px;
	// }
	// @include max(sm) {
	// 	width: 413px;
	// }
	// @include max(xs) {
	// 	width: 272px;
	// }
}
.category-gallery__link:nth-child(2n+2) {
	// width: vw(356px);
	// @include max(bg) {
	// 	width: 289px;
	// }
	// @include max(sm) {
	// 	width: 362px;
	// }
	// @include max(xs) {
	// 	width: 238px;
	// }
}
.category-gallery__link:nth-child(3n+3) {
	// width: vw(502px);
	// @include max(bg) {
	// 	width: 408px;
	// }
	// @include max(sm) {
	// 	width: 510px;
	// }
	// @include max(xs) {
	// 	width: 320px;
	// }
}
</style>