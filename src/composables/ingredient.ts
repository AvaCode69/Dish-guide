import axios from '@/services/config'
import { ref } from 'vue'
import type { Ref } from 'vue'
import type { Ingredient } from '@/types/types.ts'

export default function useIngredient() {
  const ingredients = ref<Ingredient[]>([])
  const error: Ref<any> = ref(null)
  const isLoading: Ref<boolean> = ref(false)

  const getIngredientList = async (): Promise<Ingredient | null> => {
    try {
      isLoading.value = true
      const { data } = await axios.get('/list.php?i=list')
      isLoading.value = false
      error.value = undefined
      ingredients.value = data.meals
      return data.ingredients
    } catch (err) {
      isLoading.value = false
      error.value = err
      return null
    }
  }

  return {
    getIngredientList,
    ingredients,

    error
  }
}
