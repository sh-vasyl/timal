<script setup>

defineProps({
	externalLink: Boolean
})

</script>

<template>
	<a v-if="externalLink" href="/" class="header-inner-logo">
		<slot />
	</a>
	<nuxt-link v-else to="/" class="header-inner-logo">
		<slot />
	</nuxt-link>

</template>

<style lang="scss" scoped>

.header-inner-logo {
	position: relative;
}

</style>