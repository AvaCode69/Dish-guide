//config.ts
import axios from 'axios'

export const API_URL = 'https://www.themealdb.com/api/json/v1/1/'
export const IMAGE_URL = 'https://www.themealdb.com/images'

export const ingredient_IMAGE_URL = 'https://www.themealdb.com/images/ingredients'

export default axios.create({
  baseURL: 'https://www.themealdb.com/api/json/v1/1/'
})
