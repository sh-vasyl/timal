<script setup>

	import gsap from 'gsap'
	import { Country, State }  from 'country-state-city'

	const form = ref({})

	const countries = ref([])
	const cities = ref([])

	const countryCurrent = ref(null)
	const cityCurrent = ref(null)

	const cityFieldWrapper = ref(null)
	const countryFieldWrapper = ref(null)

	const inputName = ref(null)
	const inputPhone = ref(null)
	const inputInstagram = ref(null)
	const checkboxCategory = ref(null)
	const selectCountry = ref(null)
	const selectCity = ref(null)

	function onKeydown(e) {
		if(e.key === 'ArrowUp' || e.key === 'ArrowDown' || e.key === '+') {
			e.preventDefault()
		}
	}

	function createNameForSelects() {
		selectCountry.value.$el.querySelector('.vs__search').setAttribute('name', 'country')
		selectCity.value.$el.querySelector('.vs__search').setAttribute('name', 'city')
	}

	function selectedCountry(country) {
		cityFieldWrapper.value.$el.classList.remove('disabled')

		countryCurrent.value = country.label
		if(selectCity.value) {
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
		selectCity.value.$el.querySelector('.vs__clear').click()
	}

	function clearCountries() {
		selectCountry.value.$el.querySelector('.vs__clear').click()
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


	async function handleSubmit() {
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
			checkboxCategory.value.forEach(category => {
				category.$el.querySelector('input').checked = false
			})
		}

		function clearInputs() {
			inputName.value.$el.value = null
			inputPhone.value.$el.value = null
			inputInstagram.value.$el.value = null
		}

		function removePlusPhone() {
			const plus = document.querySelector('.phone-plus')
			inputPhone.value.$el.classList.remove('offset')
			gsap.set(plus, {opacity: 0})
		}

		let pickedCategories = []

		checkboxCategory.value.forEach(category => {
			if(category.$el.querySelector('input').checked) {
				pickedCategories.push(category.$el.querySelector('.checkmark').textContent)
			}
		})

		if(
			inputName.value.$el.value &&
			inputPhone.value.$el.value.length >= 10 &&
			inputPhone.value.$el.value.length <= 15 &&
			selectCountry.value.$el.querySelector('.vs__selected') &&
			selectCity.value.$el.querySelector('.vs__selected')
		) {

			addSending()

			form.value.name = inputName.value.$el.value
			form.value.phone = inputPhone.value.$el.value
			form.value.instagram = inputInstagram.value.$el.value
			form.value.country = selectCountry.value.$el.querySelector('.vs__selected').textContent
			form.value.city = selectCity.value.$el.querySelector('.vs__selected').textContent
			form.value.categories = pickedCategories.join()

			await $fetch('https://timal.vercel.app/api/contact', {
				method: 'POST',
				body: form.value,
			})
				.then(() => {
					removeSending()
					removePlusPhone()
					removeErrorClasses()
					removeAllCategories()
					clearCountries()
					clearInputs()
					console.log('готово!')
				})
				.catch(() => {
					removeSending()
					console.log("помилка!")
				});
		} else {
			addOrRemoveErrorClass(inputName.value.$el, inputName.value.$el.value)
			addOrRemoveErrorClass(selectCountry.value.$el, selectCountry.value.$el.querySelector('.vs__selected'))
			addOrRemoveErrorClass(selectCity.value.$el, selectCity.value.$el.querySelector('.vs__selected'))

			if(inputPhone.value.$el.value.length < 10 || inputPhone.value.$el.value.length > 15) {
				inputPhone.value.$el.closest('.field__wrap').classList.add('is-empty')
			} else {
				inputPhone.value.$el.closest('.field__wrap').classList.remove('is-empty')
			}
		}

	}

	const categories = [
		'Studio',
		'Image',
		'Commercial',
		'Nude',
		'Jewelry',
		'Nature',
		'Pregnant',
		'Corporate',
		'Image',
		'Studio'
	]


</script>
<template>

	<ClientOnly>

		<form

			method="POST"
			action="smtp.php"
			class="popup__form"
			novalidate
			autocomplete="off"
			@submit.prevent="handleSubmit($event)"
		>
			<PopupTitle />

			<PopupFormWrapper>
				<TheFieldWrap>
					<TheField
						ref="inputName"
						class="input-name"
						type="text"
						name="name"
						placeholder="Name" />
				</TheFieldWrap>

				<TheFieldWrap>
					<PhonePlus />
					<TheField
						ref="inputPhone"
						class="input-phone"
						type="number"
						name="phone"
						placeholder="Phone"
						@keydown="onKeydown($event)" />
				</TheFieldWrap>

				<TheFieldWrap>
					<TheField
						ref="inputInstagram"
						class="input-instagram"
						type="text"
						name="instagram"
						placeholder="Instagram" />
				</TheFieldWrap>

				<TheFieldWrap
					ref="countryFieldWrapper">
					<TheSelect
						ref="selectCountry"
						placeholder="Country"
						:options="countries"
						@option:selected="selectedCountry"
						@click="onClickCountryClearButton($event)"/>
				</TheFieldWrap>

				<TheFieldWrap
					ref="cityFieldWrapper"
					class="disabled">
					<TheSelect
						ref="selectCity"
						class="select-city"
						placeholder="City"
						v-model="cityCurrent"
						:options="cities" />
				</TheFieldWrap>

				<PopupFormCategory>
					<PopupFormCategoryTitle />
					<TheCheckbox
						v-for="categoryName in categories"
						ref="checkboxCategory"
						:name="categoryName"
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