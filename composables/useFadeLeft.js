import gsap from 'gsap'

export default function useFadeLeft() {

	function animate(el) {
		gsap.to(el, {
			opacity: 1,
			xPercent: 0,
			duration: 1.5,
			ease: 'Power2.easeOut'
		})
	}

	return {
		animate
	}
}
