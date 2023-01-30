import gsap from 'gsap'

export default function useFadeIn() {

	function animate(el) {
		gsap.from(el, {
			opacity: 0,
			duration: 1,
			delay: 0.5
		})
	}

	return {
		animate
	}
}
