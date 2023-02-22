<script setup>
	defineProps({
		currentNumber: Number,
		totalImages: Number,
	})
</script>
<template>

	<div ref="shootingCount" class="shooting-count h5">
		<span class="shooting-count__current">{{ currentNumber }}</span>
		<span class="shooting-count__slash">/</span>
		<span class="shooting-count__total">
			<span class="shooting-count__total_mob">(</span>
			{{ totalImages }}
			<span class="shooting-count__total_mob">)</span>
		</span>
	</div>

</template>


<style lang="scss" scoped>

.shooting-count {
	height: vw(70px);
}
.shooting-count__total {
	font-size: vw(16px);
	right: vw(6px);
	position: relative;
	@include max(sm) {
		font-size: 24px;
		position: static;
	}
}

.shooting-count__current {
	@include max(sm) {
		display: none;
	}
}
.shooting-count__slash {
	@include max(sm) {
		display: none;
	}
}
.shooting-count__total_mob {
	display: none;
	@include max(sm) {
		display: inline;
	}
}
</style>