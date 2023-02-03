<script setup>

	defineProps({
		text: String
	})
</script>

<template>

	<div v-html="text" class="category-descr vt"></div>

</template>


<style lang="scss" scoped>
.category-descr {
	line-height: 150%;
	letter-spacing: 0.02em;
	height: vw(320px);
	@include max(bg) {
		height: 304px;
	}
	@include max(sm) {
		height: auto;
		width: 304px
	}
	@include max(xs) {
		width: 100%;
	}
}
</style>