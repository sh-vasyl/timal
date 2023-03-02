<script setup>
	defineProps({
		links: Array
	})
</script>

<template>
  <div class="hero-soc">
		<a
			v-for="(link, i) in links"
			class="hero-soc__link alfaLink ttu"
			:href="link.link_social"
			target="_blank"
		>
			{{ link.name_social }}
		</a>
	</div>
</template>


<style lang="scss" scoped>

.hero-soc__link {
	margin-right: vw(32px);
	@include max(bg) {
		margin-right: 32px;
	}
}

</style>