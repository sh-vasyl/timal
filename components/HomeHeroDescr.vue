<script setup>

	import gsap from 'gsap'
	import { SplitText } from 'gsap/SplitText'

	defineProps({
		text: String
	})



	/**
	 * Animation
	 */
	const heroDescr = ref(null)
	const store = useDefaultStore()

	// Hide elements to animate
	tryOnMounted(() => {
		hideElements()
	})

	// Animate after route change
	watch(() => store.transitionComplete, (newValue) => {
    if (newValue) {
			textLinesAnimate()
    }
  })

	// Animate after preloader
	watch(() => store.isPreloaderVisible, () => {
		textLinesAnimate()
  })


	/**
	 * Functions
	 */
	function textLinesAnimate() {
		gsap.set(heroDescr.value, {opacity: 1})

		const split = new SplitText(heroDescr.value, { type: 'lines', linesClass: 'mask' })
		split.lines.forEach(line => {
			new SplitText(line, { type: 'lines', linesClass: 'split-line' })
		})
		gsap.set(heroDescr.value.querySelectorAll('.mask'), { overflow: 'hidden' })
		const lines = heroDescr.value.querySelectorAll('.split-line')

		let tl = gsap.timeline()
		tl.set(heroDescr.value, {opacity: 1}, 0)
		tl.from(lines, { yPercent: 101, duration: 1.2, stagger: 0.2, ease: 'Power2.easeOut'}, 0)
	}

	function hideElements() {
		gsap.set(heroDescr.value, {opacity: 0})
	}

</script>

<template>

  <div v-html="text" ref="heroDescr" class="home-hero-descr">
	</div>

</template>

<style lang="scss">

.home-hero-descr {
	position: absolute;
	top: 75%;
	left: 0;
	width: 100%;
	transform: translateY(-50%);
	text-align: center;
	font-family: $l;
	font-size: vw(29px);
	line-height: 130%;
	opacity: 0;
	* {
		@include max(xs) {
			display: inline !important;
		}
	}
	@include max(bg) {
		font-size: 24px;
	}
	@include max(xs) {
		font-size: 18px;
		padding-left: 20px;
		padding-right: 20px;
	}
	br {
		display: none;
	}
}

</style>