<script setup>

	const commercialCount = ref(null)

	defineExpose({
		commercialCount
	})

</script>

<template>

	<div ref="commercialCount" class="commercial-count h5">
		(18)
	</div>

</template>


<style lang="scss" scoped>
.commercial-count {
	mix-blend-mode: darken;
	writing-mode: vertical-rl;
	position: absolute;
	top: 25%;
	transform: translateY(-50%) rotate(-180deg);
	left: vw(387px);
}
</style>