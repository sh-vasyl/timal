<script setup>

	import gsap from 'gsap'

	// Header animation
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
				<TheHeaderNavLink />
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