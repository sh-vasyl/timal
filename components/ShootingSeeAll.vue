<script setup>
	import gsap from 'gsap'

	const shootingSeeAll = ref('')

	tryOnMounted(() => {
		let mm = gsap.matchMedia()

		mm.add({
			isMaxBG: "(max-width: 1439px)",
			isMinBG: "(min-width: 1440px)",
		}, (context) => {
			let { isMaxBG, isMinBG } = context.conditions

			shootingSeeAll.value.textContent = isMinBG ? '(see all)' : '(ALL)'
		})

	})


</script>
<template>

	<div ref="shootingSeeAll" class="shooting-see-all h5 alfaLink"></div>

</template>


<style lang="scss" scoped>
.shooting-see-all {
	cursor: pointer;
	text-transform: none;

	@include max(sm) {
		display: none;
	}
}
</style>