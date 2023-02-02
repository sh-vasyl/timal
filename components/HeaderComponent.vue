<template>
  <header class="HEADER">
		<NuxtLink to="/index2">INDEX2</NuxtLink>
		<NuxtLink to="/index3">INDEX3</NuxtLink>
  </header>
</template>
<style scoped>

.HEADER {
	position: fixed;
	z-index: 9999;
	height: 50px;
	background: yellow;
	color: black;
	width: 100%;
	left: 0;
	top: 0;
	display: flex;
	font-size: 30px;
	align-items: center;
	justify-content: space-around;
	display: none;
}

</style>
