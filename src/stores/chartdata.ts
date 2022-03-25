import { defineStore } from 'pinia'

export const useDataStore = defineStore({
  id: 'chartdata',
  state: () => ({
    data: null,
    filter1: '',
  }),
  getters: {
    filteredData: (state) => {
      let data = state.data
      if(state.filter1 !== '') {
        data = state.data.filter(item => item === state.filter1)
      }
      return data
    }
  },
  actions: {
    async fetch() {
      this.data = await new Promise((resolve, reject) => {
        setTimeout(() => resolve(['Syd', 'Jane', 'Tom']), 500)
      })
    },
    setFilter1() {
      this.filter1 = 'Jane'
    }
  }
})
