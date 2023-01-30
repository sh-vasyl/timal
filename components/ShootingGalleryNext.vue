<script setup>

	defineProps({
		text: String,
		href: String
	})

</script>

<template>

	<nuxt-link :to="href" class="shooting-gallery-next alfaLink">
		<div class="shooting-gallery-next__text h5">(next)</div>
		<div class="shooting-gallery-next__name h3">{{ text }}</div>
	</nuxt-link>

</template>


<style lang="scss" scoped>
.shooting-gallery-next {
	writing-mode: vertical-rl;
	transform: rotate(-180deg);
	position: absolute;
	bottom: vw(32px);
	right: vw(32px);
	z-index: 1;
}

.shooting-gallery-next__text {
	text-transform: none;
	padding-left: vw(16px);
}

</style>