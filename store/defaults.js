import { defineStore } from 'pinia'

export const useDefaultStore = defineStore('default', {
  state: () => ({
		isPreloaderVisible: true,
		category: null,
		transitionComplete: false,
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
		},
		toggleTransitionComplete(value) {
			this.transitionComplete = value;
		}
  },
})