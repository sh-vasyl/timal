<script setup>

	defineProps({
		totalProjects: Number,
	})

</script>

<template>

	<div class="category-count vt h5">
		({{ totalProjects }})
	</div>

</template>


<style lang="scss" scoped>
.category-count {}
</style>