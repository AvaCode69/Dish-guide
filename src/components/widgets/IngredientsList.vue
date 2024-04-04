<!--IngredientsList.vue-->
<template>
  <div class="ingredient-list row text-white p-3">
    <p class="fw-bold col-12 text-right">Ingredients</p>
    <router-link
      v-for="ingredient in ingredientsList"
      :key="ingredient.name"
      :to="generateIngredientLink(ingredient.name)"
      class="ingredient-item col-lg-3 col-md-6 col-sm-12 p-2 text-center"
    >
      <img :src="ingredient.image" :alt="ingredient.name" class="w-25" />
      <p class="ingredient-details mb-0 ml-2 text-capitalize text-white">
        {{ ingredient.measure }} {{ ingredient.name }}
      </p>
    </router-link>
  </div>
</template>

<script setup lang="ts">
import { computed, defineProps } from 'vue'
import { useRouter } from 'vue-router'
import { ingredient_IMAGE_URL } from '@/services/config'
import type { Meal, Ingredient } from '@/types/types'

const props = defineProps<{ meal: Meal }>()
const router = useRouter()

const generateIngredientLink = (ingredientName: string) => {
  return { name: 'filterIngredient', query: { q: ingredientName } }
}

const ingredientsList = computed(() => createIngredientsList(props.meal))

function createIngredientsList(meal: Meal) {
  const ingredientsList: Ingredient[] = []

  for (let i = 1; i <= 20; i++) {
    const ingredientKey = `strIngredient${i}` as keyof Meal
    const measureKey = `strMeasure${i}` as keyof Meal

    const ingredient = meal?.[ingredientKey]
    const measure = meal?.[measureKey]

    if (typeof ingredient === 'string' && typeof measure === 'string') {
      const imageUrl = `${ingredient_IMAGE_URL}/${ingredient}.png`

      ingredientsList.push({
        image: imageUrl,
        name: ingredient,
        measure: measure
      })
    }
  }

  return ingredientsList
}
</script>
