<script setup>
	defineProps({
		currentNumber: Number,
		totalImages: Number,
	})
</script>
<template>

	<div ref="shootingCount" class="shooting-count h5">
		<span class="shooting-count__current">{{ currentNumber }}</span>
		<span class="shooting-count__slash">/</span>
		<span class="shooting-count__total">{{ totalImages }}</span>
	</div>

</template>


<style lang="scss" scoped>

.shooting-count {
	height: vw(70px);
}
.shooting-count__total {
	font-size: vw(16px);
	right: vw(6px);
	position: relative;
}
</style>