//category.ts
import axios from '@/services/config'
import { ref } from 'vue'
import type { Ref } from 'vue'
import type { MealCategory } from '@/types/types.ts'

export default function useCategory() {
  const categories: Ref<MealCategory[]> = ref([])
  const error: Ref<any> = ref(null)
  const isLoading: Ref<boolean> = ref(false)

  const getCategoriesList = async (): Promise<MealCategory | null> => {
    isLoading.value = true
    try {
      const { data } = await axios.get('/categories.php')
      error.value = undefined
      categories.value = data.categories
      return data.categories
    } catch (err) {
      error.value = err
      return null
    } finally {
      isLoading.value = false
    }
  }

  return {
    getCategoriesList,
    categories,
    error,
    isLoading
  }
}
