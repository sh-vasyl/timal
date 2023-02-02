<script setup></script>

<template>

	<ClientOnly>
		<div id="viewport">
			<ThePreloader />
			<TheHeaderInner />
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
	</ClientOnly>

</template>

<style lang="scss" scoped>

</style>
