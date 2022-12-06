import { ref, computed, reactive } from 'vue'
import { defineStore } from 'pinia'
import { getApiList } from '../server/index'
 
/* export const useCounterStore = defineStore('counter', () => {
  const count = ref(0)
  const doubleCount = computed(() => count.value * 2)
  function increment() {
    count.value++
  }

  return { count, doubleCount, increment }
}) */
export const useStore = defineStore('main', () => {
  const list = {}
  async function getList () {
    const result = await getApiList()
    console.log(result)
  } 
  return { list, getList }
})

