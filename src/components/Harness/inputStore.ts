import { defineStore } from 'pinia'

export const useInputStore = (id:string) => defineStore({
  id: id,
  state: () => ({
    val: '',
  }),
  actions: {
    setVal(val: string) {
      this.val = val
    }
  }
})
