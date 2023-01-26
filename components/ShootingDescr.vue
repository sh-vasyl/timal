<script setup>

	import gsap from 'gsap'

	/**
	 * Animation descr
	 */
	const store = useDefaultStore()
	const shootingDescr = ref(null)

	function anim() {
		gsap.from(shootingDescr.value, {
			opacity: 0,
			xPercent: -100,
			duration: 1.5,
			delay: 0.1
		})
	}

	tryOnMounted(() => anim())
	watch(() => store.isPreloaderVisible, () => anim())

</script>

<template>

	<div ref="shootingDescr" class="shooting-descr">
		<div class="shooting-descr__item">
			<span class="shooting-descr__item-prof">photographer</span>
			<span class="shooting-descr__item-slash">-</span>
			<span class="shooting-descr__item-name ttu">Tanya Timal</span>
		</div>
		<div class="shooting-descr__item">
			<span class="shooting-descr__item-prof">model</span>
			<span class="shooting-descr__item-slash">-</span>
			<span class="shooting-descr__item-name ttu">Sasha Z.</span>
		</div>
		<div class="shooting-descr__item">
			<span class="shooting-descr__item-prof">MUA/Hair</span>
			<span class="shooting-descr__item-slash">-</span>
			<span class="shooting-descr__item-name ttu">Anna Nikolchenko</span>
		</div>
	</div>

</template>


<style lang="scss" scoped>
.shooting-descr {
	line-height: 160%;
	writing-mode: vertical-rl;
	font-size: vw(11px);
	transform: rotate(-180deg);
	position: absolute;
	bottom: vw(32px);
	left: vw(387px);
	height: vw(320px);
	mix-blend-mode: difference;
	z-index: 1;
	color: $c-white;
}

.shooting-descr__item-prof {
	font-family: $ultralight;
}

.shooting-descr__item-slash {
	margin-top: vw(3px);
	margin-bottom: vw(3px);
}
</style>