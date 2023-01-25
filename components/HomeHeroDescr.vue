<script setup>

	import gsap from 'gsap'
	import { SplitText } from 'gsap/SplitText'

	/**
	 * Animation description
	 */
	const heroDescr = ref(null)
	let tl;
	let lines;
	const store = useDefaultStore()
	tryOnMounted(async() => {
		await document.fonts.ready
		const split = new SplitText(heroDescr.value, { type: 'lines', linesClass: 'mask' })
		split.lines.forEach(line => {
			new SplitText(line, { type: 'lines', linesClass: 'split-line' })
		})
		gsap.set(heroDescr.value.querySelectorAll('.mask'), { overflow: 'hidden' })
		lines = heroDescr.value.querySelectorAll('.split-line')

		setTimeout(() => anim(), 300)
	})
	watch(async() => store.isPreloaderVisible, () => anim())

	function anim() {
		tl = gsap.timeline({ scrollTrigger: { trigger: heroDescr.value }})
		tl.set(heroDescr.value, {opacity: 1})
		tl.from(lines, { yPercent: 101, duration: 2, stagger: 0.2})
	}

</script>

<template>

  <div ref="heroDescr" class="home-hero-descr">
		<div class="home-hero-descr__row">
			Tanya Timal most life spent in Kyiv, now Lisbon based artist born 1990.
		</div>
		<div class="home-hero-descr__row">
			Working different medias with experimental approach to archetypes, color and techniques.
		</div>
		<div class="home-hero-descr__row">
			Searching for meanings and exploring materialistic and spiritual aspects of this mortal life.
		</div>
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
}

</style>