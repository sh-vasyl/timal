<script setup>

	defineProps({
		text: String
	})
</script>

<template>

	<div v-html="text" class="commercial-descr vt"></div>

</template>


<style lang="scss" scoped>
.commercial-descr {
	line-height: 150%;
	letter-spacing: 0.02em;
	height: vw(320px);
}
</style>