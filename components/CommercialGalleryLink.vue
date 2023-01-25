<script setup>

	import gsap from 'gsap'

	const commercialGalleryLink = ref([])

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
		gsap.to(commercialGalleryLink.value.$el, {
			rotateZ: (Math.random() - 0.5) * 5
		})
	})

</script>

<template>

	<nuxt-link
		ref="commercialGalleryLink"
		:to="href"
		class="commercial-gallery__link"
	>
		<slot />
	</nuxt-link>

</template>


<style lang="scss" scoped>

.commercial-gallery__link {
	margin-left: vw(-16px);
	margin-right: vw(-16px);
	overflow: hidden;
}

.commercial-gallery__link:nth-child(1n+1) {
	width: vw(406px);
}
.commercial-gallery__link:nth-child(2n+2) {
	width: vw(356px);
}
.commercial-gallery__link:nth-child(3n+3) {
	width: vw(502px);
}
</style>