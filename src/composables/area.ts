// area.ts

import { ref } from 'vue'
import type { Ref } from 'vue'
import axios from '../services/config'
import type { MealArea } from '../types/types.ts'

export default function useArea() {
  const areas: Ref<MealArea[]> = ref([])
  const error: Ref<any> = ref(null)

  const getAreasList = async (): Promise<MealArea | null> => {
    try {
      const { data } = await axios.get('/list.php?a=list')
      error.value = undefined
      areas.value = data.meals

      return areas.value.length > 0 ? areas.value[0] : null
    } catch (err) {
      error.value = err
      return null
    }
  }

  return {
    getAreasList,
    areas,
    error
  }
}
