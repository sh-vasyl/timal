<script setup>

	const preloaderTitleFirst = ref(null)
	const preloaderTitle = ref(null)

	defineExpose({
		preloaderTitleFirst,
		preloaderTitle
	})

</script>

<template>

	<div ref="preloaderTitle" class="preloader-title">
		<img class="preloader-title__first" src="/images/preloader/title.svg" alt="title">
		<div
			ref="preloaderTitleFirst"
			class="preloader-title__second-wrap"
		>
			<img class="preloader-title__second" src="/images/preloader/title.svg" alt="title">
		</div>
	</div>

</template>

<style lang="scss" scoped>

.preloader-title {
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
}

.preloader-title__first {
	opacity: 0.1;
}

.preloader-title__second-wrap {
	position: absolute;
	top: 0;
	left: 0;
	width: 0%;
	overflow: hidden;
}

.preloader-title__second {
	width: 100vw;
	max-width: none;
}

</style>