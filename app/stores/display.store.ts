import { defineStore } from 'pinia'

interface DisplayState {
  isMobileSmall: boolean
  isMobile: boolean
  isTablet: boolean
  isPc: boolean
}

export const useDisplayStore = defineStore('display', {
  state: (): DisplayState => ({
    isMobileSmall: false,
    isMobile: false,
    isTablet: false,
    isPc: false,
  }),
  actions: {
    checkDisplay() {
      const width = window.innerWidth
      this.isMobileSmall = width <= 480
      this.isMobile = width <= 768
      this.isTablet = width <= 992
      this.isPc = width >= 1602
    },
  }
})
