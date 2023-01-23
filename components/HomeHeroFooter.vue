<template>
  <div v-animation-text-lines class="home-hero-footer">
		<div class="_container home-hero-footer__wrap">
			<slot></slot>
		</div>
	</div>
</template>


<style lang="scss" scoped>

.home-hero-footer {
	position: absolute;
	bottom: vw(16px);
	left: 0;
	width: 100vw;
}

.home-hero-footer__wrap {
	display: flex;
	align-items: center;
	justify-content: space-between;
}

</style>