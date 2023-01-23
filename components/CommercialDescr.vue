<script setup>

	import gsap from 'gsap'

	const homeHeroTitle = ref(null)

	tryOnMounted(() => {
	})

</script>

<template>

	<div ref="commercialDescr" class="commercial-descr">
		Commercial is an adjective describing something with money-making and marketing intentions. If you’re a bit of a book snob, steer clear of commercial fiction, which is written for the widest enjoyment.
	</div>

</template>


<style lang="scss" scoped>
.commercial-descr {
	line-height: 150%;
	letter-spacing: 0.02em;
	writing-mode: vertical-rl;
	font-size: vw(11px);
	transform: rotate(-180deg);
	position: absolute;
	bottom: vw(32px);
	left: vw(387px);
	height: vw(320px);
}
</style>