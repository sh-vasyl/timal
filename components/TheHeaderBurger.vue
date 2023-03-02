<script setup>

	import gsap from 'gsap'
	import ScrollSmoother from 'gsap/ScrollSmoother'
	import ScrollTrigger from 'gsap/ScrollTrigger'

	const isOpen = ref(false)

	tryOnMounted(() => {
		gsap.to('.header-burger__line', { transformOrigin: 'left bottom'})
		let mm = gsap.matchMedia();

		mm.add("(max-width: 1023px)", () => {
			gsap.set('.header-inner-nav__link', { opacity: 0, yPercent: 100 })
		})
	})

	function openMenu() {
		if(isOpen.value) {
			isOpen.value = false

			if (ScrollTrigger.isTouch === 1) {
				gsap.set('body, html', { clearProps: 'overflow' })
			} else {
				ScrollSmoother.get().paused(false)
			}

			gsap.to('.header-burger__line-first', { rotate: 0 })
			gsap.to('.header-burger__line-second', { rotate: 0 })
			gsap.to('.header-nav', {
				autoAlpha: 0
			})
			gsap.to('.header-inner-nav__link', { opacity: 0, yPercent: 100, stagger: 0.1 })
			gsap.to('.wrapper', {filter: 'blur(0)', clearProps: 'filter'})

		} else {
			isOpen.value = true

			if (ScrollTrigger.isTouch === 1) {
				gsap.set('body, html', { overflow: 'hidden' })
			} else {
				ScrollSmoother.get().paused(true)
			}
			gsap.to('.header-burger__line-first', { rotate: 24 })
			gsap.to('.header-burger__line-second', { rotate: -24 })
			gsap.to('.header-nav', {
				autoAlpha: 1,
			})
			gsap.to('.header-inner-nav__link', {opacity: 1, yPercent: 0, stagger: 0.1 })
			gsap.to('.wrapper', {filter: 'blur(1rem)'})
		}
	}


</script>

<template>

	<div class="header-burger" @click="openMenu">
		<span class="header-burger__line header-burger__line-first"></span>
		<span class="header-burger__line header-burger__line-second"></span>
	</div>

</template>

<style lang="scss" scoped>

.header-burger {
	display: none;
	@include max(sm) {
		display: block;
		position: absolute;
		height: 50px;
		width: 50px;
		right: 18px;
		top: 50%;
		transform: translateY(-50%);
		z-index: 3;
	}
	@include max(xs) {
		right: 10px;
	}
}

.header-burger__line {
	position: absolute;
	width: 20px;
	height: 1px;
	background: $c-white;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);

}
.header-inner .header-burger__line {
	background: $c-black;
}
.header-burger__line-first {
	margin-top: -4px;
}

.header-burger__line-second {
	margin-top: 4px;
}


</style>