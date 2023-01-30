<script setup>

	defineProps({
		src: String
	})

</script>
<template>

	<img class="home-img" :src="src" alt="Home image"/>

</template>


<style lang="scss" scoped>

.home-img {
	width: 100%;
	height: 100%;
	object-fit: cover;
	opacity: 0;
	position: absolute;
	top: 0;
	left: 0;
}

.home-img:first-child {
	opacity: 1;
}
</style>