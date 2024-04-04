//types

import type { Ref } from 'vue'

export interface MealCategory {
  idCategory: string
  strCategory: string
  strCategoryThumb: string
  strCategoryDescription: string
}

export interface Meal {
  idMeal: string
  strMeal: string
  strInstructions?: string
  strMealThumb: string
  strYoutube?: string
  strCategory: string
  strArea: string
  ingredients?: Ingredient[]
}

export interface Ingredient {
  name: string
  measure: string
  image: string
}

export interface MealArea {
  strArea: string
}
interface ApiLoaderResult {
  isLoading: Ref<boolean>
  error: Ref<any | null>
}

export interface MealResult extends ApiLoaderResult {
  filterMealByCategory: (category: string) => Promise<Meal[]>
  filterMealByLocation: (location: string) => Promise<Meal[]>
  getMealListByName: (location: string) => Promise<Meal[]>
  getMealListByIngredient: (location: string) => Promise<Meal[]>
  areaResult: Ref<Meal[]>
  categoryResult: Ref<Meal[]>
  searchResult: Ref<Meal[]>
}

export interface MealCategories extends ApiLoaderResult {
  getCategoriesList: () => Promise<MealCategory | null>
  categories: Ref<MealCategory[]>
}
export interface MealDetailsPage extends ApiLoaderResult {
  getMealListById: (id: string) => Promise<Meal | null>
  meal: Ref<Meal | null>
}

export interface ApiLoaderResultMealType {
  data: Ref<Meal | null>
}

export interface ApiLoaderResultAreaType {
  data: Ref<MealArea[] | null>
}

export interface ApiLoaderResultCategoryType {
  data: Ref<MealCategory[] | null>
}
