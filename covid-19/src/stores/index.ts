import { ref, computed, reactive } from 'vue'
import { defineStore } from 'pinia'
import { getApiList } from '../server/index'
import type { RootObject, Children, ChinaAdd, ChinaTotal, LocalCityNCOVDataList } from './type'
 
/* export const useCounterStore = defineStore('counter', () => {
  const count = ref(0)
  const doubleCount = computed(() => count.value * 2)
  function increment() {
    count.value++
  }

  return { count, doubleCount, increment }
}) */
export const useStore = defineStore( {
  id: 'counter',
  state: ()=>({
    list:<RootObject>{},
    item:<Children[]>[],
    chinaTotal:<ChinaTotal>{},
    chinaAdd:<ChinaAdd>{},
    cityDetail:<LocalCityNCOVDataList[]>[]
  }),
  actions: {
    async  getList () {
      const result = await getApiList()
      this.list = result
      this.chinaAdd = this.list.diseaseh5Shelf.chinaAdd
      this.chinaTotal = this.list.diseaseh5Shelf.chinaTotal
      this.cityDetail = this.list.localCityNCOVDataList.slice(0,10)
    } 
  }
})

