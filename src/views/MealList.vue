<!--CategoryList.vue-->

<template>
  <div class="container">
    <div v-if="isLoading" class="row justify-content-center"><Spinner /></div>
    <div v-else class="row row-cols-lg-4 row-cols-md-3 row-cols-2 g-4 mt-5">
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
</template>

<script setup lang="ts">
import { ref, watch } from 'vue'
import { useRoute } from 'vue-router'
import CardMeal from '@/components/widgets/BaseCardMeal.vue'
import Spinner from '@/components/widgets/BaseSpinner.vue'
import useMeal from '@/composables/meal'
import NoResult from '@/components/widgets/NoResult.vue'
import type { Meal, MealResult } from '@/types/types.ts'

const {
  filterMealByCategory,
  filterMealByLocation,
  areaResult,
  categoryResult,
  isLoading
}: MealResult = useMeal()
const route = useRoute()

const searchResult = ref<Meal[]>([])
watch(
  () => route.params,
  async () => {
    if (route.params.areaName) {
      await filterMealByLocation(route.params.areaName as string)
      searchResult.value = areaResult.value
    } else if (route.params.catName) {
      await filterMealByCategory(route.params.catName as string)
      searchResult.value = categoryResult.value
    }
  },
  { immediate: true }
)
</script>
