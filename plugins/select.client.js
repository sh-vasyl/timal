import VueSelect from "vue-select"
import {h} from 'vue'
import "vue-select/dist/vue-select.css"

export default defineNuxtPlugin((nuxtApp) => {
	VueSelect.props.components.default = () => ({
		Deselect: {
			render: () => h('span', {class: {'select__clear-icon': true}}, ''),
		},
		OpenIndicator: {
			render: () => h('button', {class: {'select__arrow-icon': true}}, ''),
		},
	})
	nuxtApp.vueApp.component('v-select', VueSelect)
})




