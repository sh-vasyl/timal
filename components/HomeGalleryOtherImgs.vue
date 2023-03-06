<script setup>

	import gsap from 'gsap'

	const runTimeConfig = useRuntimeConfig()
	const url = runTimeConfig.public.baseUrl

	/**
	 * Props
	 */
	defineProps({
		images: Array,
	})

	/**
	 * Parallax on mousemove
	 */
	const homeGalleryImg = ref([])
	const cursor = ref({})
	cursor.value.x = 0
	cursor.value.y = 0

	tryOnMounted(() => {
		useEventListener(document, 'mousemove', (e) => {
			cursor.value.x = e.clientX / window.innerWidth - 0.5
			cursor.value.y = e.clientY / window.innerHeight - 0.5

			anim()
		})
	})

	function anim() {
		const paralaxX = cursor.value.x
		const paralaxY = -cursor.value.y
		if(homeGalleryImg.value[0]) {
			gsap.to(homeGalleryImg.value[0], {
				ease: 'none',
				x: paralaxX * 50,
				y: paralaxY * 50,
			})
		}
		if(homeGalleryImg.value[1]) {
			gsap.to(homeGalleryImg.value[1], {
				ease: 'none',
				x: -paralaxX * 40,
				y: -paralaxY * 40,
			})
		}

		if(homeGalleryImg.value[2]) {
			gsap.to(homeGalleryImg.value[2], {
				ease: 'none',
				x: paralaxX * 30,
				y: paralaxY * 30,
			})
		}

		if(homeGalleryImg.value[3]) {
			gsap.to(homeGalleryImg.value[3], {
				ease: 'none',
				x: paralaxX * 10,
				y: paralaxY * 10,
			})
		}

		if(homeGalleryImg.value[4]) {
			gsap.to(homeGalleryImg.value[4], {
				ease: 'none',
				x: -paralaxX * 15,
				y: -paralaxY * 15,
			})
		}
	}

	function zoomIn(e) {
		gsap.to(e.target, {
			scale: 1.2
		})
	}
	function zoomOut(e) {
		gsap.to(e.target, {
			scale: 1
		})
	}

</script>

<template>

	<div
		v-for="(img, i) in images"
		v-animation-images
		ref="homeGalleryImg"
		class="home-gallery-img__wrap"
		:class="`home-gallery-img home-gallery-img-${i + 5}`"
	>
		<img
			:src="url + img"
			alt="home gallery image"
			class="home-gallery-img__photo"
			@mouseenter="zoomIn"
			@mouseleave="zoomOut"
		/>
	</div>


</template>


<style lang="scss" scoped>

.home-gallery-img__wrap {
	overflow: hidden;
}
.home-gallery-img {
	position: absolute;
	left: 50%;
	transform: translateX(-50%);
	width: vw(150px);
	@include max(bg) {
		width: 90px;
	}
	@include max(xs) {
		width: 60px;
	}
}

.home-gallery-img-5 {
	top: vw(334px);
	margin-left: vw(-414px);
	@include max(bg) {
		top: 249px;
		margin-left: -350px;
	}
	@include max(sm) {
		top:  175px;
		margin-left: -290px;
	}
	@include max(xs) {
		top: 132px;
		margin-left: -140px;
	}
}

.home-gallery-img-6 {
	top: vw(260px);
	margin-left: vw(412px);
	@include max(bg) {
		top: 196px;
		margin-left: 380px;
	}
	@include max(sm) {
		top:  130px;
		margin-left: 280px;
	}
	@include max(xs) {
		top: 91px;
		margin-left: 130px;
	}
}

.home-gallery-img-7 {
	top: vw(648px);
	margin-left: vw(-376px);
	@include max(bg) {
		top: 472px;
		margin-left: -320px;
	}
	@include max(sm) {
		top:  370px;
		margin-left: -265px;
	}
	@include max(xs) {
		top: 317px;
		margin-left: -130px;
	}
}

.home-gallery-img-8 {
	top: vw(547px);
	@include max(bg) {
		top: 420px;
	}
	@include max(sm) {
		top:  307px;
	}
	@include max(xs) {
		top: 259px;
	}
}

.home-gallery-img-9 {
	top: vw(689px);
	margin-left: vw(395px);
	@include max(bg) {
		top: 500px;
		margin-left: 340px;
	}
	@include max(sm) {
		top:  396px;
		margin-left: 258px;
	}
	@include max(xs) {
		top: 335px;
		margin-left: 130px;
	}
}
</style>