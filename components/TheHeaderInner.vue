<script setup>

	import gsap from 'gsap'

	// Header animation
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
				<TheHeaderInnerNavLink />
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