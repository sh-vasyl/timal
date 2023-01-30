<script setup>
defineProps({
	text: String
})
</script>

<template>

	<div class="commercial-title vt h3">
		{{ text }}
	</div>

</template>


<style lang="scss" scoped>
.commercial-title {
	mix-blend-mode: darken;
}
</style>