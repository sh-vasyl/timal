<script setup>
	const nuxtApp = useNuxtApp()
	nuxtApp.hook('page:start', () => {
		console.log('start');
	})
	nuxtApp.hook('page:finish', () => {
		console.log('finish');
	})
	nuxtApp.hook('page:transition:finish', () => {
		console.log('trans finish');
	})
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