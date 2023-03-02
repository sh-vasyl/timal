<script setup>

	import gsap from 'gsap'
	import { Country, State }  from 'country-state-city'

	const form = ref(null)

	const countries = ref([])
	const cities = ref([])

	const cityCurrent = ref(null)
	const countryCurrent = ref(null)

	const cityFieldWrapper = ref(null)
	const countryFieldWrapper = ref(null)

	function onKeydown(e) {
		if(e.key === 'ArrowUp' || e.key === 'ArrowDown' || e.key === '+') {
			e.preventDefault()
		}
	}

	function createNameForSelects() {
		const selectCountry = document.querySelector('.select-country')
		const selectCity = document.querySelector('.select-city')

		selectCountry.querySelector('.vs__search').setAttribute('name', 'country')
		selectCity.querySelector('.vs__search').setAttribute('name', 'city')
	}

	function selectedCountry(country) {
		cityFieldWrapper.value.$el.classList.remove('disabled')

		countryCurrent.value = country.label
		if(cityCurrent.value) {
			clearCities()
		}
		cities.value = []
		if(!State.getStatesOfCountry(country.code).length) {
			cityCurrent.value = 'There are no cities'
		}
		State.getStatesOfCountry(country.code).forEach(city => {
			cities.value.push(city.name)
		})
	}

	function clearCities() {
		const citySelectElement = document.querySelector('.select-city')
		const clearButton = citySelectElement.querySelector('.vs__clear')
		clearButton.click()
	}

	function clearCountries() {
		const countriesSelectElement = document.querySelector('.select-country')
		const clearButton = countriesSelectElement.querySelector('.vs__clear')
		clearButton.click()
	}

	function onClickCountryClearButton(e) {
		if(e.target.closest('.vs__clear')) {
			cityFieldWrapper.value.$el.classList.add('disabled')
			countryCurrent.value = null
			clearCities()
		}
	}

	tryOnMounted(() => {
		nextTick(() => createNameForSelects())

		Country.getAllCountries().forEach(country => {
			countries.value.push({
				label: country.name,
				code: country.isoCode
			})
		})
	})


	async function handleSubmit(e) {
		e.preventDefault()

		const inputName = document.querySelector('.input-name')
		const inputPhone = document.querySelector('.input-phone')
		const selectCountry = document.querySelector('.select-country')
		const selectCity = document.querySelector('.select-city')
		const formCategories = document.querySelectorAll('.popup__category-item')
		const fieldWrappers = document.querySelectorAll('.field__wrap')

		function addOrRemoveErrorClass(field, value) {
			if(!value) {
				field.closest('.field__wrap').classList.add('is-empty')
			} else {
				field.closest('.field__wrap').classList.remove('is-empty')
			}
		}

		function addSending() {
			gsap.to('#viewport', {pointerEvents: 'none', opacity: 0.5})
		}

		function removeSending() {
			gsap.set('#viewport', {clearProps: 'all'})
		}

		function removeErrorClasses() {
			fieldWrappers.forEach(fieldWrap => {
				fieldWrap.classList.remove('is-empty')
			})
		}

		function removeAllCategories() {
			formCategories.forEach(category => {
				category.classList.remove('active')
			})
		}

		function removePlusPhone() {
			const plus = document.querySelector('.phone-plus')
			inputPhone.classList.remove('offset')
			gsap.set(plus, {opacity: 0})
		}

		if(
			inputName.value &&
			cityCurrent.value &&
			countryCurrent.value &&
			inputPhone.value.length >= 10 &&
			inputPhone.value.length <= 15
		) {

			addSending()

			let formData = new FormData(form.value);
			let response = await fetch("https://timal.vercel.app/smtp.php", {
				method: "POST",
				body: formData,
			});


			if (response.ok) {
				removeSending()
				removePlusPhone()
				removeErrorClasses()
				removeAllCategories()
				clearCountries()
				form.value.reset()
				console.log('готово!')
			} else {
				removeSending()
				console.log("Помилка")
			}

		} else {
			addOrRemoveErrorClass(inputName, inputName.value)
			addOrRemoveErrorClass(selectCountry, countryCurrent.value)
			addOrRemoveErrorClass(selectCity, cityCurrent.value)

			if(inputPhone.value.length < 10 || inputPhone.value.length > 15) {
				inputPhone.closest('.field__wrap').classList.add('is-empty')
			} else {
				inputPhone.closest('.field__wrap').classList.remove('is-empty')
			}
		}

	}

	const categories = [
		'Studio', 'Image', 'commercial', 'nude', 'Jewelry', 'Nature',
		'pregnant', 'Corporate', 'Image', 'Studio'
	]


</script>
<template>

	<ClientOnly>

		<form
			method="POST"
			action="smtp.php"
			ref="form"
			class="popup__form"
			novalidate
			autocomplete="off"
			@submit="handleSubmit($event)"
		>
			<PopupTitle />

			<PopupFormWrapper>
				<TheFieldWrap>
					<TheField
						class="input-name"
						type="text"
						name="name"
						placeholder="Name" />
				</TheFieldWrap>

				<TheFieldWrap>
					<PhonePlus />
					<TheField
						class="input-phone"
						type="number"
						name="phone"
						placeholder="Phone"
						@keydown="onKeydown($event)" />
				</TheFieldWrap>

				<TheFieldWrap>
					<TheField
						class="input-instagram"
						type="text"
						name="instagram"
						placeholder="Instagram" />
				</TheFieldWrap>

				<TheFieldWrap
					ref="countryFieldWrapper">
					<TheSelect
						class="select-country"
						placeholder="Country"
						:options="countries"
						@option:selected="selectedCountry"
						@click="onClickCountryClearButton($event)"/>
				</TheFieldWrap>

				<TheFieldWrap
					ref="cityFieldWrapper"
					class="disabled">
					<TheSelect
						class="select-city"
						placeholder="City"
						v-model="cityCurrent"
						:options="cities" />
				</TheFieldWrap>

				<PopupFormCategory>
					<PopupFormCategoryTitle />
					<TheCheckbox
						v-for="categoryName in categories"
						name="category[]"
						:value="categoryName"
					/>
				</PopupFormCategory>


				<PopupFormButton />
			</PopupFormWrapper>

		</form>

	</ClientOnly>


</template>

<style lang="scss" scoped>
.popup__form {
	flex: 1 1 auto;
	padding: vw(69px) vw(110px) vw(64px);
	@include max(bg) {
		padding: 69px 39px 64px;
	}
	@include max(sm) {
		padding: 69px 89px 73px;
	}
	@include max(xs) {
		padding: 36px 20px 36px;
	}
}

</style>