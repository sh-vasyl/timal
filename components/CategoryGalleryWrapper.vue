<script setup>
import gsap from 'gsap'

const categoryGalleryWrapper = ref(null)

tryOnMounted(() => {
	let mm = gsap.matchMedia()
	mm.add("(max-width: 1023px)", () => {
		gsap.set(categoryGalleryWrapper.value, {
			paddingLeft: `calc(50vw - 206px)`
		})
	})
	mm.add("(max-width: 767px)", () => {
		gsap.set(categoryGalleryWrapper.value, {
			paddingLeft: `calc(50vw - 130px)`
		})
	})
})
</script>
<template>

	<div ref="categoryGalleryWrapper" class="category-gallery__wrapper">
		<slot />
	</div>

</template>


<style lang="scss" scoped>
.category-gallery__wrapper {
	padding-left: 50vw;
	padding-right: 10vw;
	display: flex;
	height: 100%;
	width: max-content;
	align-items: center;
	@include max(sm) {
		padding-left: 25vw;
	}
}
</style>