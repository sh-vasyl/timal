<script setup>

	tryOnMounted(() => {

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
