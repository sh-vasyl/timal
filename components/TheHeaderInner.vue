<template>
	<header
		v-animation-fade-in
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
	color: $c-black;
}

.header-inner-head {
	display: flex;
	justify-content: space-between;
	align-items: center;
}

</style>