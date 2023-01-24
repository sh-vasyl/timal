<script setup>

	const commercialTitle = ref(null)

	defineExpose({
		commercialTitle
	})

</script>

<template>

	<div ref="commercialTitle" class="commercial-title h3">
		COMMERCial
	</div>

</template>


<style lang="scss" scoped>
.commercial-title {
	mix-blend-mode: darken;
	writing-mode: vertical-rl;
	transform: rotate(-180deg);
	position: absolute;
	bottom: vw(32px);
	left: vw(32px);
	z-index: 1;
}
</style>