<script setup>

	import transitionConfig from '@/helpers/transitionConfig'
	definePageMeta({ pageTransition: transitionConfig })

	const store = useDefaultStore()
	store.editorialCategory()

</script>


<template>

	<div>
		<NuxtLayout name="shooting">
			<NuxtPage />
		</NuxtLayout>
	</div>


</template>

<style lang="scss" scoped>

</style>