import { useInputStore } from '@/components/Harness/inputStore';
import { defineStore } from 'pinia'

export const initialState = {
  data: null as null | string[]
}

export const useDataStore = defineStore({
  id: 'chartdata',
  state: () => initialState,
  getters: {
    filteredData: (state) => {
      const search = useInputStore('search')()
      let data = state.data
      if(!data) return data

      if(search.val !== '') {
        data = state.data!.filter(item => item === search.val)
      }
      return data
    }
  },
  actions: {
    async fetch() {
      this.data = await new Promise((resolve, reject) => {
        setTimeout(() => resolve(['Syd', 'Jane', 'Tom']), 500)
      })
    }
  }
})
