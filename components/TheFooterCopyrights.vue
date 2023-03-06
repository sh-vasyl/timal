<script setup>
	defineProps({
		copyright: String
	})
</script>

<template>
	<div class="copyrights">
		<div  class="copyrights-title">
			<span class="copyrights-title__first tf1">© All rights</span>
			<span class="copyrights-title__second tf2">Reserved</span>
		</div>
		<div v-html="copyright" class="copyrights-descr ttu"></div>
	</div>

</template>

<style lang="scss">

.copyrights-title {
	margin-bottom: vw(4px);
	@include max(bg) {
		margin-bottom: 4px;
	}
}

.copyrights-title__first {
	font-size: vw(21px);
	line-height: 100%;
	@include max(bg) {
		font-size: 21px;
	}
}

.copyrights-title__second {
	font-size: vw(24px);
	text-transform: uppercase;
	margin-left: vw(5px);
	line-height: 100%;
	@include max(bg) {
		font-size: 29px;
		margin-left: 5px;
	}
}

.copyrights-descr {
	width: vw(520px);
	font-family: $i300;
	@include max(bg) {
		width: 550px;
	}
	@include max(xs) {
		width: 100%;
		font-size: 10px;
	}
}

</style>