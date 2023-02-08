import gsap from 'gsap'

export default function useFadeIn() {

	function animate(el) {
		gsap.to(el, {
			opacity: 1,
			duration: 1,
			delay: 0.5,
			clearProps: 'opacity',
			ease: 'Power2.easeOut'
		})
	}

	return {
		animate
	}
}
