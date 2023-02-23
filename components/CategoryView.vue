<script setup>

	tryOnMounted(() => {
		let vh
		vh = window.innerHeight * 0.01
		document.documentElement.style.setProperty("--vh", `${vh}px`)
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
	height: calc(var(--vh, 1vh) * 100)
}

</style>
