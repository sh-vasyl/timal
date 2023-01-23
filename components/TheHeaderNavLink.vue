<template>

	<nuxt-link to="/commercial" class="header-nav__link alfaLink">
		<span class="header-nav__link-text">Commercial</span>
		<span class="header-nav__link-count">(2)</span>
	</nuxt-link>
	<nuxt-link to="/" class="header-nav__link alfaLink">
		<span class="header-nav__link-text">Editorial</span>
		<span class="header-nav__link-count">(14)</span>
	</nuxt-link>
	<a href="mailto:shot@tanyatimal.studio" class="header-nav__link alfaLink">
		<span class="header-nav__link-text">shot@tanyatimal.studio</span>
	</a>

</template>

<style lang="scss" scoped>

.header-nav__link {
	margin-left: vw(25px);
	text-transform: uppercase;
}

.header-nav__link-count {
	font-family: $xl;
	font-size: vw(12px);
	line-height: 86%;
	position: relative;
	bottom: 5px;
}

</style>