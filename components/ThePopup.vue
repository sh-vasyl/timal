<script setup>

</script>
<template>

	<div class="popup">
		<PopupContainer>

			<PopupClose />
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
	bottom: 0;
	background: rgba($c-black, 0.4);
	z-index: 9999;
}
</style>