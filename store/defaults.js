import { defineStore } from 'pinia'

export const useDefaultStore = defineStore('default', {
  state: () => ({
		isPreloaderVisible: true,
		category: null,
	}),
	actions: {
		hidePreloader() {
			this.isPreloaderVisible = false
		},
		commercialCategory() {
			this.category = 0
		},
		editorialCategory() {
			this.category = 1
		}
  },
  // getters: {
  //   doubleCount: (state) => state.count * 2,
  // },
})