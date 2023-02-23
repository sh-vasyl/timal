<script setup>

	tryOnMounted(() => {
		let vh
		vh = window.innerHeight * 0.01
		document.documentElement.style.setProperty("--vh", `${vh}px`)
		window.addEventListener('resize', () => {
			vh = window.innerHeight * 0.01
			document.documentElement.style.setProperty("--vh", `${vh}px`)
		})
	})
</script>
<template>

	<div class="category-view">
		<slot />
	</div>

</template>

<style lang="scss" scoped>
.category-view {
	position: relative;
	height: 100vh;
}

@supports (-webkit-touch-callout: none) {
  .category-view {
    /* The hack for Safari */
    height: -webkit-fill-available;
  }
}

</style>
