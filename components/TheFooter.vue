
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
	@include max(bg) {
		padding-bottom: 32px;
	}
	@include max(xs) {
		padding-bottom: 38px;
	}
}

.footer-head {
	display: flex;
	align-items: flex-end;
	justify-content: space-between;
	@include max(bg) {
		margin-top: 60px;
	}
	@include max(xs) {
		flex-direction: column;
	}
}

</style>