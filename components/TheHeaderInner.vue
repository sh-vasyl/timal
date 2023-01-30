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
	const headerInner = ref(null)

	function anim() {
		gsap.from(headerInner.value, {
			opacity: 0,
			yPercent: -100,
			duration: 1
		})
	}

	tryOnMounted(() => {if(!store.isPreloaderVisible) anim()})
	watch(() => store.isPreloaderVisible, () => anim())

</script>

<template>
	<header
		ref="headerInner"
		class="header-inner"
		>
		<div class="header-inner-head _container">
			<TheHeaderInnerLogo />
			<TheHeaderInnerNav>
				<TheHeaderInnerNavLink
					:commercial-count="commercialCount"
					:editorial-count="editorialCount"
				/>
			</TheHeaderInnerNav>
		</div>
	</header>
</template>

<style lang="scss" scoped>

.header-inner {
	position: fixed;
	top: 0;
	left: 0;
	width: 100%;
	z-index: 99;
	padding-top: vw(32px);
	padding-bottom: vw(32px);
	mix-blend-mode: difference;
	color: $c-white;
}

.header-inner-head {
	display: flex;
	justify-content: space-between;
	align-items: center;
}

</style>