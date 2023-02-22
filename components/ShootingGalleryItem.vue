<script setup>

	import gsap from 'gsap'

	defineProps({
		src: String,
		text: String,
		index: Number
	})

	/**
	 * Animate
	 */

	const { animate } = useFadeIn()
	const store = useDefaultStore()

	const shootingGalleryItem = ref(null)

	tryOnMounted(() => {
		gsap.set(shootingGalleryItem.value, { opacity: 0 })
	})

	watch(() => store.transitionComplete, (newValue) => {
    if (newValue) {
			animate(shootingGalleryItem.value)
    }
  })
	watch(() => store.isPreloaderVisible, () => {
		animate(shootingGalleryItem.value)
  })

</script>

<template>

	<div
		ref="shootingGalleryItem"
		class="shooting-gallery__item"
		:id="`shootingGalleryItem-${index}`"
	>
		<div class="shooting-gallery__img-wrap">
			<div class="shooting-gallery__img-bg"></div>
			<img
				:src="src"
				class="shooting-gallery__img"
				alt="gallery image"
			/>
		</div>
		<div class="shooting-gallery__item-bg"></div>
		<div class="shooting-gallery__text">
			<div class="shooting-gallery__text-wrapper">
				{{ text }}
			</div>
			<div class="shooting-gallery__text-bg"></div>
		</div>
	</div>

</template>


<style lang="scss" scoped>

.shooting-gallery__item {
	height: 100%;
	display: flex;
	flex-direction: column;
	align-items: center;
	position: absolute;
	height: 100%;
	top: 0;

	@include max(sm) {
		position: static;
		margin-bottom: 8px;
	}
}

.shooting-gallery__item-bg {
	width: calc(100% + #{vw(50px)});
	height: calc(100% + #{vw(50px)});
	border-radius: vw(10px);
	background: #E6E6E6;
	position: absolute;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
	opacity: 0;

	@include max(sm) {
		display: none;
	}

}

.shooting-gallery__item:first-child {
	transform: scale(1);
	z-index: 1;
}

.shooting-gallery__img {
	position: relative;
	z-index: 1;
	max-width: none;
	width: auto;
	max-height: 100%;

	@include max(sm) {
		width: 100%;
	}
}

.shooting-gallery__img-wrap {
	position: relative;
	height: 100%;
	width: 100%;
	display: flex;
	align-items: center;
}

.shooting-gallery__img-bg {
	border: vw(5px) solid $c-white;
	filter: drop-shadow(0 vw(2px) vw(4px) rgba($c-black, 0.15));
	position: absolute;
	top: vw(-5px);
	left: vw(-5px);
	width: calc(100% + #{vw(10px)});
	height: calc(100% + #{vw(10px)});
	z-index: 1;
	opacity: 0;

	@include max(sm) {
		display: none;
	}
}

.shooting-gallery__text {
	text-align: center;
	margin-top: vw(16px);
	font-size: vw(13px);
	line-height: vw(16px);
	letter-spacing: 0.523657px;
	white-space: nowrap;
	opacity: 0;
	padding: vw(1px) vw(3px) vw(3px);
	position: absolute;
	top: 100%;
	z-index: 2;


	@include max(sm) {
		display: none;
	}
}

.shooting-gallery__text-bg {
	width: 100%;
	height: 100%;
	background: #1067DE;
	border-radius: vw(3px);
	position: absolute;
	top: 0;
	left: 0;
	opacity: 0;

	@include max(sm) {
		display: none;
	}
}

.shooting-gallery__text-wrapper {
	position: relative;
	z-index: 1;

	@include max(sm) {
		display: none;
	}
}


</style>