<script setup>

	import gsap from 'gsap'
	import { SplitText } from 'gsap/SplitText'

	defineProps({
		text: String
	})

	/**
	 * Animation description
	 */
	const heroDescr = ref(null)
	const store = useDefaultStore()
	tryOnMounted(async() => {
		await document.fonts.ready
		if(!store.isPreloaderVisible) anim()
	})
	watch(() => store.isPreloaderVisible, () => anim())

	function anim() {
		let tl = gsap.timeline({ scrollTrigger: { trigger: heroDescr.value }})

		const split = new SplitText(heroDescr.value, { type: 'lines', linesClass: 'mask' })
		split.lines.forEach(line => {
			new SplitText(line, { type: 'lines', linesClass: 'split-line' })
		})
		gsap.set(heroDescr.value.querySelectorAll('.mask'), { overflow: 'hidden' })
		const lines = heroDescr.value.querySelectorAll('.split-line')

		setTimeout(() => {
			tl.set(heroDescr.value, {opacity: 1})
			tl.from(lines, { yPercent: 101, duration: 2, stagger: 0.2})
		}, 300)
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