<script setup>

	import gsap from 'gsap'

	/**
	 * Api
	 */
	const { data: categories } = await useAsyncData('categories', () => {
		return $fetch('/api/categories')
	})

	// commercial api
	const commercialData = categories.value?.data?.data[0]
	const commercialCount = commercialData?.attributes?.shootings?.data?.length

	// editorial api
	const editorialData = categories.value?.data?.data[1]
	const editorialCount = editorialData?.attributes?.shootings?.data?.length

	/**
	 * Header animation
	 */
	const store = useDefaultStore()
	const header = ref(null)

	function anim() {
		gsap.from(header.value, {
			opacity: 0,
			yPercent: -100,
			duration: 1
		})
	}

	tryOnMounted(() => {if(!store.isPreloaderVisible) anim()})
	watch(() => store.isPreloaderVisible, () => anim())

</script>

<template>
	<header ref="header" class="header">
		<div class="header-head _container">
			<TheHeaderLogo />
			<TheHeaderNav>
				<TheHeaderNavLink
					:commercial-count="commercialCount"
					:editorial-count="editorialCount"
				/>
			</TheHeaderNav>
		</div>
	</header>
</template>

<style lang="scss" scoped>

.header {
	position: fixed;
	top: 0;
	left: 0;
	width: 100%;
	z-index: 99;
	padding-top: vw(32px);
	padding-bottom: vw(32px);
	color: $c-white;
}

.header-inner {
	color: $c-black;
}

.header-head {
	display: flex;
	justify-content: space-between;
	align-items: center;
}

</style>