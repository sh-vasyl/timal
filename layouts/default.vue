<script setup>

const { toggleTransitionComplete } = useTransitionComposable();

onMounted(() => {
  toggleTransitionComplete(true);
});
</script>
<template>

	<div id="viewport">
		<ThePreloader />
		<TheSmoothWrapper>
			<slot />

		</TheSmoothWrapper>
	</div>


</template>
<style lang='scss' scoped>

</style>