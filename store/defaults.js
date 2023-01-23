import { defineStore } from 'pinia'

export const useDefaultStore = defineStore('default', {
  state: () => ({
		isPreloaderVisible: true
	}),
	actions: {
		hidePreloader() {
			this.isPreloaderVisible = false
		}
  },
  // getters: {
  //   doubleCount: (state) => state.count * 2,
  // },
})