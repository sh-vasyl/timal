import gsap from 'gsap'

export default function useFadeLeft() {

	function animate(el) {
		gsap.from(el, {
			opacity: 0,
			xPercent: -150,
			duration: 1.5
		})
	}

	return {
		animate
	}
}
