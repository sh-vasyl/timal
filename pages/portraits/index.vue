<script setup>

	import transitionConfig from '@/helpers/transitionConfig'
	definePageMeta({
		pageTransition: transitionConfig
	})

	const store = useDefaultStore()
	store.commercialCategory()


</script>


<template>

	<div>
		<NuxtLayout name="categories">
			<NuxtPage />
		</NuxtLayout>
	</div>


</template>

<style lang="scss" scoped>

</style>