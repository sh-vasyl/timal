<script setup>

	import gsap from 'gsap'

	const { transitionState } = useTransitionComposable()

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

	// Hide elements to animate
	tryOnMounted(() => {
		hideElements()
	})

	// Animate after route change
	watch(() => transitionState.transitionComplete, (newValue) => {
    if (newValue) {
			animateHeader()
    }
  })

	// Animate after preloader
	watch(() => store.isPreloaderVisible, () => {
		animateHeader()
  })

	/**
	 * Functions
	 */
	function animateHeader() {
		gsap.to(headerInner.value, {
			opacity: 1,
			yPercent: 0,
			duration: 1
		})
	}

	function hideElements() {
		gsap.set(headerInner.value, {opacity: 0, yPercent: -100})
	}

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