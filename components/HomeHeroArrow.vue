<script setup>
	defineProps({
		href: String
	})
</script>
<template>

  <nuxt-link :to="href" class="home-hero-arrow alfaLink">
		<span class="home-hero-arrow__text" href="https://www.instagram.com/" target="_blank">(view)</span>
		<svg class="home-hero-arrow__arrow" width="41" height="8" viewBox="0 0 41 8" fill="none" xmlns="http://www.w3.org/2000/svg">
			<path d="M40.3536 4.35355C40.5488 4.15829 40.5488 3.84171 40.3536 3.64645L37.1716 0.464466C36.9763 0.269204 36.6597 0.269204 36.4645 0.464466C36.2692 0.659728 36.2692 0.976311 36.4645 1.17157L39.2929 4L36.4645 6.82843C36.2692 7.02369 36.2692 7.34027 36.4645 7.53553C36.6597 7.7308 36.9763 7.7308 37.1716 7.53553L40.3536 4.35355ZM0 4.5H40V3.5H0V4.5Z" fill="white"/>
		</svg>
	</nuxt-link>

</template>


<style lang="scss" scoped>

.home-hero-arrow {
	display: flex;
	align-items: center;
}

.home-hero-arrow:hover .home-hero-arrow__arrow {
	transform: scaleX(1.2);
}

.home-hero-arrow__arrow {
	transition: $s500;
	transform-origin: center left;
}

.home-hero-arrow__text {
	font-size: vw(24px);
	line-height: 86%;
	font-family: $xl;
	margin-right: vw(16px);
	@include max(bg) {
		font-size: 20px;
		margin-right: 16px;
	}
}

.home-hero-arrow__arrow {
	margin-bottom: vw(-4px);
}

</style>