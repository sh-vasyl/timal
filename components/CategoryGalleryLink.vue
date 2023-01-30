<script setup>

	import gsap from 'gsap'

	const categoryGalleryLink = ref([])

	/**
	 * Props
	 */
	defineProps({
		href: String
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
}

.category-gallery__link:nth-child(1n+1) {
	width: vw(406px);
}
.category-gallery__link:nth-child(2n+2) {
	width: vw(356px);
}
.category-gallery__link:nth-child(3n+3) {
	width: vw(502px);
}
</style>