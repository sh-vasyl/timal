<template>

	<div class="designed">
		<span class="designed-text">Designed by Maks Stepenko</span>
		<a href="https://thefirstthelast.agency/" target="_blank" class="designed-link alfaLink">@THE FIRST THE LAST</a>
	</div>

</template>

<style lang="scss" scoped>

.designed {
	@include max(sm) {
		display: flex;
		flex-direction: column;
		align-items: flex-end;
	}
	@include max(xs) {
		flex: 0 0 100%;
		width: 100%;
		margin-top: 24px;
		display: block;
	}
}

.designed-text {
	margin-right: vw(5px);
	font-family: $ultralight;
	@include max(bg) {
		margin-right: 5px;
	}
}

</style>