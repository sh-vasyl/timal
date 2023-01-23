<script setup>

	import gsap from 'gsap'


	const headerLogoIcon = ref(null)
	const headerLogoName = ref(null)

	tryOnMounted(() => {
		gsap.to(headerLogoIcon.value, {
			opacity: 0,
			scrollTrigger: {
				trigger: '.home-hero',
				scrub: true,
				start: 'top top',
				end: 'center 25%'
			}
		})
		gsap.to(headerLogoName.value, {
			opacity: 1,
			scrollTrigger: {
				trigger: '.home-hero',
				scrub: true,
				start: 'top top',
				end: 'center 25%'
			}
		})
	})

</script>

<template>

	<nuxt-link to="/" class="header-logo">
		<svg ref="headerLogoIcon" class="header-logo__icon" viewBox="0 0 29 29" fill="none" xmlns="http://www.w3.org/2000/svg">
			<path d="M12.4576 12.3355H7.17188V9.41943H21.6416V12.3355H16.3393V21.7464H12.4576V12.3355Z" fill="white"/>
			<circle cx="14.5" cy="14.5" r="12.909" stroke="white" stroke-width="3.18204"/>
		</svg>
		<img
			ref="headerLogoName"
			class="header-logo__name"
			src="/images/home/title.svg"
			alt="header logo name"
		/>
		<img
			class="header-inner-logo__name"
			src="/icons/logo-black.svg"
			alt="header inner logo"
		/>
	</nuxt-link>

</template>

<style lang="scss" scoped>

.header .header-inner-logo__name {
	display: none;
}
.header-inner .header-logo__icon,
.header-inner .header-logo__name {
	display: none;
}
.header-inner .header-inner-logo__name {
	display: block
}

.header-logo {
	position: relative;
}

.header-logo__icon {
	width: vw(29px);
	height: vw(29px);
}

.header-logo__name {
	opacity: 0;
	width: vw(150px);
	position: absolute;
	top: 50%;
	margin-top: vw(3px);
	left: vw(6px);
	transform: translateY(-50%);
	max-width: none;
}

</style>