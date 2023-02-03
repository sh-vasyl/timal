<script setup>

	const store = useDefaultStore()

	tryOnMounted(() => {
		store.toggleTransitionComplete(false)
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