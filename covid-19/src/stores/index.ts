import { ref, computed, reactive } from 'vue'
import { defineStore } from 'pinia'
import { getApiList } from '../server/index'
import type { RootObject, Children } from './type'
 
/* export const useCounterStore = defineStore('counter', () => {
  const count = ref(0)
  const doubleCount = computed(() => count.value * 2)
  function increment() {
    count.value++
  }

  return { count, doubleCount, increment }
}) */
/* export const useStore = defineStore('main', () => {
  let list = <RootObject>{}
  async function getList () {
    const result = await getApiList()
    list = result
    console.log(result)
  } 
  return { list, getList }
}) */
export const useStore = defineStore( {
  id: 'counter',
  state: ()=>({
    list:<RootObject>{},
    item:<Children[]>[],
  }),
  actions: {
    async  getList () {
      const result = await getApiList()
      this.list = result
    } 
  }
})

