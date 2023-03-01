<script setup>

	import { gsap } from 'gsap'

	/**
	 * Animation hover on button
	 */
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

	<div class="form__submit-wrap">
		<button
			class="form__submit"
			type="submit"
			@mouseenter="anim"
		>
			<svg class="form-btn__line" viewBox="0 0 220 54" fill="none" xmlns="http://www.w3.org/2000/svg">
				<path ref="buttonPath" d="M140.775 53C191.139 41.1649 219.284 7.22883 119.344 1.62734C-0.671907 -5.09936 -39.2484 44.3927 49.6919 48.6963C123.599 52.2726 192.211 33.9922 219 21.7985" stroke="black" stroke-width="1.5"/>
			</svg>

			<span class="form-btn__first tf1">Send</span>
			<span class="form-btn__second tf2 s32">request</span>
		</button>
	</div>

</template>

<style lang="scss" scoped>

.form__submit {
	position: relative;
}

.form__submit-wrap {
	flex: 0 0 100%;
	display: flex;
	justify-content: center;
	margin-top: vw(37px);
}

.form-btn__line {
	position: absolute;
	max-width: none;
	width: vw(220px);
	height: vw(54px);
	left: vw(-30px);
	top: vw(-13px)
}

.form-btn__first {
	font-size: vw(29px);
	line-height: 100%;
	margin-right: vw(5px);
}

</style>