<template>
	<div v-animation-text-lines class="copyrights">
		<div  class="copyrights-title">
			<span class="copyrights-title__first tf1">© All rights</span>
			<span class="copyrights-title__second tf2">Reserved</span>
		</div>
		<div class="copyrights-descr ttu">
			Please, be informed, that the intellectual property rights to all the photos, designs and other materials on this Site belong to Private Entrepreneur “Tatiana Malitska”. You may request permission to use them by contacting us at: privacy@taniatimal.studio
		</div>
	</div>

</template>

<style lang="scss" scoped>

.copyrights-title {
	margin-bottom: vw(4px);
}

.copyrights-title__first {
	font-size: vw(21px);
	line-height: 100%;
}

.copyrights-title__second {
	font-size: vw(24px);
	text-transform: uppercase;
	margin-left: vw(5px);
	line-height: 100%;
}

.copyrights-descr {
	width: vw(520px);
	font-family: $i300;
}

</style>