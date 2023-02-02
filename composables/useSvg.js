import gsap from 'gsap'

export default function useSvg() {

	function animate(el) {
		const paths = el.querySelectorAll('path')
		paths.forEach(path => {
			gsap.set(path, {
				strokeDasharray: path.getTotalLength(),
				strokeDashoffset: path.getTotalLength()
			})
		})

		gsap.set(el, {
			opacity: 1
		})

		gsap.to(paths, {
			strokeDashoffset: 0,
			duration: 1.5,
			delay: 1,
			ease: 'none'
		})
	}

	return {
		animate
	}
}
