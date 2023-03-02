<script setup>
	import gsap from 'gsap'
	import ScrollSmoother from 'gsap/ScrollSmoother'

	const popup = ref(null)
	const popupContainer = ref(null)

	function closePopup() {
		const tl = gsap.timeline({
			onComplete() {
				ScrollSmoother.get().paused(false)
			}
		})
		tl.to(popup.value, {
			autoAlpha: 0,
		})
		tl.to('.wrapper', {
			filter: 'blur(0rem)',
			clearProps: 'filter'
		}, '-0.5')
	}

</script>
<template>

	<div class="popup" ref="popup">
		<PopupContainer ref="popupContainer">

			<PopupClose @click="closePopup()" />
			<PopupSignature />
			<PopupPhoto />
			<PopupForm />

		</PopupContainer>
	</div>

</template>

<style lang="scss" scoped>

.popup {
	position: fixed;
	top: 0;
	left: 0;
	right: 0;
	opacity: 0;
	visibility: hidden;
	bottom: 0;
	background: rgba($c-black, 0.4);
	z-index: 9999;
}
</style>