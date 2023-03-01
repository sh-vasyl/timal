<script setup>

defineProps({
	categories: Array
})

function pickCategory(e) {
	if(e.target.classList.contains('active')) {
		e.target.classList.remove('active')
	} else {
		e.target.classList.add('active')
	}
}

</script>
<template>

	<div class="popup__category">
		<div class="popup__category-title ttu">choose of category photography</div>
		<div
			v-for="category in categories"
			class="popup__category-item ttu"
			@click="pickCategory">
			{{ category }}
		</div>
	</div>


</template>

<style lang="scss" scoped>
.popup__category {
	flex: 0 0 100%;
	display: flex;
	flex-wrap: wrap;
}

.popup__category-title {
	font-size: vw(11px);
	font-family: $i400;
	flex: 0 0 100%;
	margin-bottom: vw(16px);
}

.popup__category-item {
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
	&:hover, &.active {
		background: $c-black;
		color: $c-white;
	}
}

</style>