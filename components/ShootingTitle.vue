<script setup>

	defineProps({
		name1: String,
		name2: String,
	})

</script>

<template>

	<div class="shooting-title vt h3">
		<div>{{name1}}</div>
		<div>{{name2}}</div>
	</div>

</template>


<style lang="scss" scoped>
.shooting-title {}
</style>