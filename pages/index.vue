<script setup>

/**
 * ANIMATIONS
 */
	// tryOnMounted(() => {
	// 	AnimationHero()
	// })

</script>

<template>

	<div class="home-view">
		<HomeImg />
		<HomeHeroView />
		<HomeGalleryView />
		<TheFooter />
	</div>

</template>

<style lang="scss" scoped>
.home-view {
	color: $c-white;
	position: relative;
}

.test {
	width: 300px;
	position: relative;
	z-index: 2;
	margin: 0 auto;
}
</style>
