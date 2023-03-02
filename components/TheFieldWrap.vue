
<template>

	<div class="field__wrap">
		<slot />
	</div>

</template>


<style lang="scss">
.field__wrap {
	position: relative;
	margin-bottom: vw(32px);
	flex: 0 0 vw(200px);
	@include max(bg) {
		flex: 0 0 200px;
		margin-bottom: 32px;
	}
}
.field__wrap.disabled {
	pointer-events: none;
	opacity: 0.3;
}
.field__wrap.is-empty .field__input {
	border-color: red;
}
.field__wrap.is-empty .field__label {
	color: red;
}
.field__wrap.is-empty .vs__dropdown-toggle {
	border-color: red;
}
.field__wrap:nth-child(1) {
	flex: 0 0 100%;
}
</style>