<script setup>

defineProps({
	commercialCount: Number,
	editorialCount: Number,
	externalLink: Boolean,
	categoryName1: String,
	categoryName2: String,
})


</script>

<template>

	<div v-if="externalLink" class="header-nav__wrap">
		<a :href="`/${categoryName1.toLowerCase()}`" class="header-inner-nav__link">
			<span class="header-inner-nav__link-text alfaLink">{{ categoryName1 }}</span>
			<span class="header-inner-nav__link-count">({{ commercialCount }})</span>
		</a>
		<a :href="`/${categoryName2.toLowerCase()}`" class="header-inner-nav__link">
			<span class="header-inner-nav__link-text alfaLink">{{ categoryName2 }}</span>
			<span class="header-inner-nav__link-count">({{ editorialCount }})</span>
		</a>
		<a href="mailto:shot@tanyatimal.studio" class="header-inner-nav__link">
			<span class="header-inner-nav__link-text alfaLink">shot@tanyatimal.studio</span>
		</a>
	</div>

	<div v-else class="header-nav__wrap">
		<nuxt-link :to="`/${categoryName1.toLowerCase()}`" class="header-inner-nav__link">
			<span class="header-inner-nav__link-text alfaLink">{{ categoryName1 }}</span>
			<span class="header-inner-nav__link-count">({{ commercialCount }})</span>
		</nuxt-link>
		<nuxt-link :to="`/${categoryName2.toLowerCase()}`" class="header-inner-nav__link">
			<span class="header-inner-nav__link-text alfaLink">{{ categoryName2 }}</span>
			<span class="header-inner-nav__link-count">({{ editorialCount }})</span>
		</nuxt-link>
		<a href="mailto:shot@tanyatimal.studio" class="header-inner-nav__link">
			<span class="header-inner-nav__link-text alfaLink">shot@tanyatimal.studio</span>
		</a>
	</div>

</template>

<style lang="scss" scoped>

.header-inner-nav__link {
	margin-left: vw(25px);
	text-transform: uppercase;
	@include max(bg) {
		margin-left: 25px;
	}
	@include max(sm) {
		font-size: 20px;
		margin-bottom: 8px;
		margin-top: 8px;
		margin-left: 0;
	}
}

.header-inner-nav__link-count {
	font-family: $xl;
	font-size: vw(12px);
	line-height: 86%;
	position: relative;
	bottom: vw(5px);
	@include max(bg) {
		font-size: 12px;
		bottom: 5px
	}
	@include max(sm) {
		font-size: 18px;
		bottom: 10px;
	}
}

.header-nav__wrap {
	@include max(sm) {
		display: flex;
		align-items: center;
		justify-content: center;
		flex-direction: column;
		height: 100%;
	}
}

</style>