<script setup>
// import gsap from 'gsap'
// import { useTransitionComposable } from '../composables/transition-composable';
// import transitionConfig from '../helpers/transitionConfig';

// console.log(transitionConfig);


// definePageMeta({
//   pageTransition: transitionConfig
// });

// const { transitionState } = useTransitionComposable();

// watch(() => transitionState.transitionComplete, (newValue) => {
//     if (newValue) {
// 			// gsap.to('body', {opacity: 0})
// 				gsap.to('.sect3', {
// 				opacity: 0,
// 				scrollTrigger: {
// 					trigger: '.sect3',
// 					scrub: true,
// 				}
// 			})

//     }
//   }
// );


</script>

<template>
  <section class="wrapper1">
		<div class="sect sect1"></div>
		<div class="sect sect2"></div>
		<div class="sect sect3"></div>
	</section>
</template>

<style scoped>


.sect {
	height: 100vh;
}
.sect1 {
	background-color: black;
}

.sect2 {
	background-color: green;
}

.sect3 {
	background-color: purple;
}

</style>