<script setup>
	import { gsap } from 'gsap'

	const buttonPath = ref(null)

	function anim() {
		gsap.set(buttonPath.value, {
			strokeDasharray: buttonPath.value.getTotalLength(),
			strokeDashoffset: buttonPath.value.getTotalLength()
		})

		gsap.to(buttonPath.value, {
			strokeDashoffset: 0,
			ease: 'none'
		})
	}

</script>

<template>

  <a href="/" class="home-gallery-btn" @mouseenter="anim">
		<svg class="home-gallery-btn__line" viewBox="0 0 220 54" fill="none" xmlns="http://www.w3.org/2000/svg">
			<path ref="buttonPath" d="M140.775 53C191.139 41.1649 219.284 7.22883 119.344 1.62734C-0.671907 -5.09936 -39.2484 44.3927 49.6919 48.6963C123.599 52.2726 192.211 33.9922 219 21.7985" stroke="white" stroke-width="1.5"/>
		</svg>

		<span class="home-gallery-btn__first tf1">Send</span>
		<span class="home-gallery-btn__second tf2 s32">request</span>
	</a>

</template>


<style lang="scss" scoped>

.home-gallery-btn {
	position: absolute;
	bottom: vw(120px);
	left: 50%;
	transform: translateX(-50%);
}

.home-gallery-btn__line {
	position: absolute;
	max-width: none;
	width: vw(220px);
	height: vw(54px);
	left: vw(-30px);
	top: vw(-13px)
}

.home-gallery-btn__first {
	font-size: vw(29px);
	line-height: 100%;
	margin-right: vw(5px);
}

</style>