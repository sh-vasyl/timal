
<template>
	<footer v-animation-fade-in class="footer">
		<div class="footer-head _container">
			<slot />
		</div>
	</footer>
</template>

<style lang="scss" scoped>

.footer {
	padding-bottom: vw(32px);
}

.footer-head {
	display: flex;
	align-items: flex-end;
	justify-content: space-between;
}

</style>