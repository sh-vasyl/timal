<script setup></script>

<template>

	<div class="shooting-descr vt">
		<div class="shooting-descr__item">
			<span class="shooting-descr__item-prof">photographer</span>
			<span class="shooting-descr__item-slash">-</span>
			<span class="shooting-descr__item-name ttu">Tanya Timal</span>
		</div>
		<div class="shooting-descr__item">
			<span class="shooting-descr__item-prof">model</span>
			<span class="shooting-descr__item-slash">-</span>
			<span class="shooting-descr__item-name ttu">Sasha Z.</span>
		</div>
		<div class="shooting-descr__item">
			<span class="shooting-descr__item-prof">MUA/Hair</span>
			<span class="shooting-descr__item-slash">-</span>
			<span class="shooting-descr__item-name ttu">Anna Nikolchenko</span>
		</div>
	</div>

</template>


<style lang="scss" scoped>
.shooting-descr {
	line-height: 160%;
	font-size: vw(11px);
}

.shooting-descr__item-prof {
	font-family: $ultralight;
}

.shooting-descr__item-slash {
	margin-top: vw(3px);
	margin-bottom: vw(3px);
}
</style>