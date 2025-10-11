import { defineStore } from 'pinia'

interface menuState {
  isMenuOpen: boolean
}

export const useMenuStore = defineStore('menu', {
  state: () : menuState => ({
    isMenuOpen: false,
  }),
  actions: {
    toggleMenuOpen() {
      this.isMenuOpen = !this.isMenuOpen
    },
  },
})
