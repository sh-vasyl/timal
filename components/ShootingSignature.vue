
<script setup>
	/**
	 * Animate first screen
	 */
	const store = useDefaultStore()
	const shootingSignature = ref(null)
	const { animate } = useSvg()
	tryOnMounted(() => {if(!store.isPreloaderVisible) animate(shootingSignature.value)})
	watch(() => store.isPreloaderVisible, () => animate(shootingSignature.value))

</script>

<template>

	<svg ref="shootingSignature" class="shooting-signature" viewBox="0 0 346 467" fill="none" xmlns="http://www.w3.org/2000/svg">
		<path d="M1 347.822C11.4142 191.777 111.711 343.38 149.94 386.866C-61.9309 326.35 144.163 65.1156 310.208 415.915C280.327 367.334 268.881 358.84 295.912 466C-67.1785 18.609 -17.5186 81.9812 344 398.826C56.0578 377.399 216.963 460.509 35.8866 1" stroke="#2828BD"/>
	</svg>

</template>


<style lang="scss" scoped>
.shooting-signature {
	position: absolute;
	width: vw(346px);
	height: vw(467px);
	top: vw(116px);
	transform: translateX(-50%);
	left: 50%;
}
</style>