
<template>
	<header
		v-animation-fade-in
		class="header"
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