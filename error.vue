<script setup>
</script>

<template>

		<div id="viewport">

			<ThePreloader />
			<TheHeader :external-link="true" />
			<TheSmoothWrapper>
				<TheWrapper class="wrapper-inner">
					<ErrorView>
						<TheTitle class="--darken">
							<ErrorTitle />
						</TheTitle>

						<TheActions class="--darken">
							<ErrorToHome ref="errorToHome" />
						</TheActions>

						<ErrorNumber ref="errorToHome" />
					</ErrorView>
				</TheWrapper>
			</TheSmoothWrapper>
		</div>

</template>

<style lang="scss" scoped>

</style>
