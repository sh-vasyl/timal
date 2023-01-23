<template>
	<div id="viewport">
		<ThePreloader />
		<TheHeader />
		<div id="smooth-wrapper">
			<div id="smooth-content">
				<slot />
			</div>
		</div>
	</div>
</template>
<style lang='scss' scoped>
</style>