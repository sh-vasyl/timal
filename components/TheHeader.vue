<script setup>

	const routeName = useRoute().name

</script>

<template>
	<header
		v-animation-fade-in
		class="header"
		:class="`header-${routeName}`"
		>
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
}

.header-index {
	color: $c-white;
}

.header-head {
	display: flex;
	justify-content: space-between;
	align-items: center;
}

</style>