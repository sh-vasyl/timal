<script setup>
	import { gsap } from 'gsap'

	const infiniteLine = ref([])
	let ticking = ref(false)

	tryOnMounted(() => {
		scrollInfinite()
	})

	function scrollInfinite() {
		if(!ticking.value) {
			window.requestAnimationFrame(() => {
        gsap.to(infiniteLine.value[0], {
					duration: 20,
					ease: "none",
					xPercent: -50,
					repeat: -1,
				});

				gsap.to(infiniteLine.value[1], {
					duration: 25,
					ease: "none",
					xPercent: 50,
					repeat: -1,
				});

        ticking.value = false;
      });

			ticking.value = true;
		}
	}

</script>

<template>

	<div class="home-infinite-lines">

		<div
			v-for="(line, idx) in 2"
			:key="idx"
			class="home-infinite-line__wrap"
			:class="`home-infinite-line__wrap-${idx + 1}`"
		>
			<div
				class="home-infinite-line"
				ref="infiniteLine"
			>
				<img
					v-for="(img, i) in 2"
					:key="i"
					class="home-infinite-line__img"
					src="/images/home/line.png"
					alt="line"
				/>
			</div>
		</div>

	</div>

</template>

<style lang="scss" scoped>

.home-infinite-line__wrap {
	position: absolute;
	left: 0;
	width: 100%;
}

.home-infinite-line__wrap-1 {
	transform: rotate(-4.51deg);
	top: vw(430px);
}

.home-infinite-line__wrap-2 {
	transform: rotate(1.16deg);
	top: vw(400px);
	display: flex;
	justify-content: flex-end;
}

.home-infinite-line {
	display: flex;
	align-items: center;
	width: max-content;
}

.home-infinite-line__img {
	width: vw(1733px);
	max-width: none;
	margin-right: vw(-1px);
	margin-left: vw(-1px);
}

</style>