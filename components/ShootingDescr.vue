<script setup>

	defineProps({
		descr: Array
	})

</script>

<template>

	<div class="shooting-descr vt">
		<div
			v-for="info in descr"
			class="shooting-descr__item"
		>
			<span class="shooting-descr__item-prof">{{ info?.title }}</span>
			<span class="shooting-descr__item-slash">-</span>
			<span class="shooting-descr__item-name ttu">{{ info?.description }}</span>
		</div>
	</div>

</template>


<style lang="scss" scoped>
.shooting-descr {
	line-height: 160%;
	font-size: vw(11px);
	@include max(bg) {
		font-size: 11px;
	}
}

.shooting-descr__item-prof {
	font-family: $ultralight;
}

.shooting-descr__item-slash {
	margin-top: vw(3px);
	margin-bottom: vw(3px);
	@include max(sm) {
		margin-top: 0;
		margin-bottom: 0;
		margin-left: 5px;
		margin-right: 5px;
	}
}
</style>