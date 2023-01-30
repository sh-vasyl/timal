<script setup>

	defineProps({
		totalProjects: Number,
	})

</script>

<template>

	<div class="commercial-count vt h5">
		({{ totalProjects }})
	</div>

</template>


<style lang="scss" scoped>
.commercial-count {}
</style>