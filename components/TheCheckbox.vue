<script setup>

	defineProps({
		name: String,
		value: String
	})
</script>
<template>

<label class="check-category__item">
  <input type="checkbox" :name="name" />
  <span class="checkmark ttu">{{ value }}</span>
</label>

</template>

<style lang="scss" scoped>
.check-category__item {
  cursor: pointer;
  user-select: none;
}
.check-category__item input {
  position: absolute;
  opacity: 0;
  cursor: pointer;
  height: 0;
  width: 0;
}
.checkmark {
	font-size: vw(11px);
	font-family: $i400;
	color: rgba($c-black, 0.7);
	cursor: pointer;
	padding: vw(6px) vw(11px);
	border-radius: vw(74px);
	background: rgba($c-black, 0.05);
	margin-right: vw(8px);
	margin-bottom: vw(10px);
	transition: all .25s ease;
	display: block;
	@include max(bg) {
		font-size: 11px;
		padding: 6px 11px;
		border-radius: 74px;
		margin-right: 8px;
		margin-bottom: 10px;
	}
}

/* On mouse-over, add a grey background color */
.check-category__item:hover input ~ .checkmark {
  background: $c-black;
	color: $c-white;
}

/* When the checkbox is checked, add a blue background */
.check-category__item input:checked ~ .checkmark {
  background: $c-black;
	color: $c-white;
}


</style>