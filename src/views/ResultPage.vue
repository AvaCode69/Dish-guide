<!--ResultPage.vue-->

<template>
  <div class="container">
    <div v-if="isLoading" class="row justify-content-center"><Spinner /></div>

    <div v-else class="row">
      <!-- Left column for the image -->
      <div v-show="ingredientImage" class="col-md-3 pt-5 mt-5">
        <img :src="ingredientImage" :alt="ingredientImage" class="img-fluid" />
      </div>

      <!-- Right column for meal items -->
      <div
        :class="`${ingredientImage ? 'col-md-9' : 'col-md-12'} ${ingredientImage ? 'row-cols-md-3' : 'row-cols-md-4'} row g-4 mt-5`"
      >
        <card-meal
          v-for="meal of searchResult"
          :key="meal.idMeal"
          :title="meal.strMeal"
          :image="meal.strMealThumb"
          :idMeal="meal.idMeal"
        />

        <NoResult v-if="!isLoading && !searchResult?.length" class="row" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted, watch, ref } from 'vue'
import { useRoute } from 'vue-router'
import CardMeal from '@/components/widgets/BaseCardMeal.vue'
import Spinner from '@/components/widgets/BaseSpinner.vue'
import useMeal from '@/composables/meal'
import NoResult from '@/components/widgets/NoResult.vue'
import { ingredient_IMAGE_URL } from '@/services/config'
import type { MealResult } from '@/types/types.ts'

const { getMealListByName, searchResult, isLoading, getMealListByIngredient }: MealResult =
  useMeal()
const route = useRoute()
const ingredientImage = ref('')

const query = route.query.q as string

const handleRouteQueryChange = async (query: string) => {
  if (route.path === '/ingredient') {
    await getMealListByIngredient(query)
    ingredientImage.value = `${ingredient_IMAGE_URL}/${query}.png`
  } else {
    await getMealListByName(query)
    ingredientImage.value = ''
  }
}
onMounted(() => {
  handleRouteQueryChange(query)
})

watch(
  () => route.query.q as string,
  async (newQuery: string) => {
    handleRouteQueryChange(newQuery)
  }
)
</script>
