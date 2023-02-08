import gsap from 'gsap'

export default function useFadeBlur() {

	function animate(el) {
		gsap.from(el, {
			filter: 'blur(2rem)',
			duration: 1,
			ease: 'linear'
		})
	}

	return {
		animate
	}
}
