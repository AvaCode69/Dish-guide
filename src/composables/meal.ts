//meal.js
import axios from '../services/config'
import { ref } from 'vue'
import type { Ref } from 'vue'
import type { Meal } from '../types/types.ts'

export default function useMeal() {
  const meals: Ref<Meal[]> = ref([])
  const searchResult: Ref<Meal[]> = ref([])
  const categoryResult: Ref<Meal[]> = ref([])
  const areaResult: Ref<Meal[]> = ref([])
  const meal: Ref<Meal | null> = ref(null)
  const isLoading: Ref<boolean> = ref(false)
  const error: Ref<any> = ref(null)

  const handleError = (error: any) => {
    if (error.response) {
      console.error('Server Error:', error.response.status, error.response.data)
    } else if (error.request) {
      console.error('No response received:', error.request)
    } else {
      console.error('Error:', error.message)
    }
  }

  const getMealListByName = async (name: string): Promise<Meal[]> => {
    try {
      isLoading.value = true
      const { data } = await axios.get('/search.php?s=' + name)
      isLoading.value = false
      searchResult.value = data.meals
      return data.meals
    } catch (err: any) {
      isLoading.value = false
      handleError(err)
      return []
    }
  }
  const getMealListByIngredient = async (name: string): Promise<Meal[]> => {
    try {
      isLoading.value = true
      const { data } = await axios.get('/filter.php?i=' + name)
      isLoading.value = false
      searchResult.value = data.meals
      return data.meals
    } catch (err) {
      isLoading.value = false
      handleError(err)
      return []
    }
  }
  const getMealListById = async (id: string): Promise<Meal | null> => {
    try {
      isLoading.value = true
      const { data } = await axios.get('/lookup.php?i=' + id)
      isLoading.value = false
      meal.value = data.meals[0]
      return data.meals[0]
    } catch (err) {
      isLoading.value = false
      handleError(err)
      return null
    }
  }
  const getRandomMeal = async (): Promise<Meal[]> => {
    try {
      const { data } = await axios.get('/random.php')
      meal.value = data.meals[0]
      return data.meals[0]
    } catch (err) {
      handleError(err)
      return []
    }
  }

  const filterMealByCategory = async (category: string): Promise<Meal[]> => {
    try {
      isLoading.value = true
      const { data } = await axios.get('/filter.php?c=' + category)
      isLoading.value = false
      categoryResult.value = data.meals
      return data.meals
    } catch (err) {
      isLoading.value = false
      handleError(err)
      return []
    }
  }

  const filterMealByLocation = async (location: string): Promise<Meal[]> => {
    try {
      isLoading.value = true
      const { data } = await axios.get('/filter.php?a=' + location)
      isLoading.value = false
      areaResult.value = data.meals
      return data.meals
    } catch (err) {
      isLoading.value = false
      handleError(err)
      return []
    }
  }

  return {
    getMealListByName,
    filterMealByCategory,
    filterMealByLocation,
    getMealListByIngredient,
    getRandomMeal,
    getMealListById,
    meals,
    meal,
    isLoading,
    error,
    categoryResult,
    areaResult,
    searchResult
  }
}
