<script setup>
defineProps({
	text: String
})
</script>

<template>

	<div class="category-title vt h3">
		{{ text }}
	</div>

</template>


<style lang="scss" scoped>
.category-title {
	mix-blend-mode: darken;
}
</style>