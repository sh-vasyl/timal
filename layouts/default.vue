<script setup>
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { ScrollSmoother } from 'gsap/ScrollSmoother'
	const nuxtApp = useNuxtApp()
	nuxtApp.hook('page:start', () => {
		console.log('start');
		ScrollSmoother.get().paused(true)
	})
	nuxtApp.hook('page:finish', () => {
		console.log('finish');
		ScrollSmoother.get().paused(false)
	})
	nuxtApp.hook('page:transition:finish', () => {
		console.log('trans finish');
		ScrollSmoother.get().paused(false)
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