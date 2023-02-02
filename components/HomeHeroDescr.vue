<script setup>

	import gsap from 'gsap'
	import { SplitText } from 'gsap/SplitText'

	defineProps({
		text: String
	})

	const { transitionState } = useTransitionComposable()

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
	watch(() => transitionState.transitionComplete, (newValue) => {
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
		tl.from(lines, { yPercent: 101, duration: 2, stagger: 0.2}, 0)
	}

	function hideElements() {
		gsap.set(heroDescr.value, {opacity: 0})
	}

</script>

<template>

  <div v-html="text" ref="heroDescr" class="home-hero-descr">
	</div>

</template>

<style lang="scss" scoped>

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
	br {
		display: none;
	}
}

</style>