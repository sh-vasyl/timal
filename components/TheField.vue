<script setup>

	import gsap from 'gsap'

	defineProps({
		name: String,
		type: String,
		placeholder: String,
	});

	function onFocus(e) {
		if(e.target.classList.contains('input-phone')) {
			const plus = document.querySelector('.phone-plus')
			e.target.classList.add('offset')
			gsap.set(plus, {opacity: 1})
		}
	}
	function onBlur(e) {
		if(e.target.classList.contains('input-phone')) {
			const plus = document.querySelector('.phone-plus')
			if(!e.target.value) {
				e.target.classList.remove('offset')
				gsap.set(plus, {opacity: 0})
			}
		}
	}

</script>

<template>

	<input
		:type="type"
		class="field__input"
		:placeholder="placeholder"
		@focus="onFocus($event)"
		@blur="onBlur($event)"
	/>

</template>


<style lang="scss" scoped>
.field__input {
	border-bottom: vw(1px) solid rgba($c-black, 0.3);
	height: vw(30px);
	font-size: vw(11px);
	font-family: $i400;
	text-transform: uppercase;
	padding-bottom: vw(10px);
	&::placeholder {
		color: $c-black;
	}
	&:focus::placeholder {
		opacity: 0.3;
	}
	@include max(bg) {
		font-size: 11px;
		padding-bottom: 10px;
		border-bottom: 1px solid rgba($c-black, 0.3);
		height: 30px;
	}
	@include max(xs) {
		padding-bottom: 16px;
	}
}

.input-phone:focus::placeholder {
	opacity: 0;
}
.input-phone.offset {
	padding-left: vw(8px);
	@include max(bg) {
		padding-left: 8px;
	}
}
</style>