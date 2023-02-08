<script setup>

	import gsap from 'gsap'



	defineProps({
		pageIndex: Boolean,
		externalLink: Boolean
	})

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

	// Hide elements to animate
	tryOnMounted(() => {
		hideElements()
	})

	// Animate after route change
	watch(() => store.transitionComplete, (newValue) => {
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
		gsap.to(header.value, {
			opacity: 1,
			yPercent: 0,
			duration: 1,
		})
	}

	function hideElements() {
		gsap.set(header.value, {opacity: 0, yPercent: -100})
	}


</script>

<template>
	<header
		ref="header"
		class="header"
		:class="{'header-inner': !pageIndex}"
	>
		<div class="header-head _container">
			<TheHeaderInnerLogo
				v-if="!pageIndex"
				:external-link="externalLink"
			>
				<TheHeaderInnerLogoSvg />
			</TheHeaderInnerLogo>
			<TheHeaderLogo v-else />

			<TheHeaderNav>
				<TheHeaderNavLink
					:external-link="externalLink"
					:commercial-count="commercialCount"
					:editorial-count="editorialCount"
				/>
			</TheHeaderNav>
			<TheHeaderBurger />
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
	@include max(bg) {
		padding-top: 32px;
		padding-bottom: 32px;
	}
	@include max(xs) {
		padding-top: 20px;
		padding-bottom: 20px;
	}
}

.header-inner {
	mix-blend-mode: difference;
	@include max(sm) {
		mix-blend-mode: normal;
		color: $c-black;
	}
}

.header-head {
	display: flex;
	justify-content: space-between;
	align-items: center;
}

</style>