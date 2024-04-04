<!--MealDetailsPage.vue-->

<template>
  <div class="container wrapper">
    <div v-if="isLoading || !meal">
      <Spinner />
    </div>
    <BaseMealDetails v-else :meal="meal" />
    <NoResult v-if="!isLoading && !meal" />
  </div>
</template>

<script setup lang="ts">
import { onMounted, watch } from 'vue'
import { useRoute } from 'vue-router'
import Spinner from '@/components/widgets/BaseSpinner.vue'
import useMeal from '@/composables/meal'
import NoResult from '@/components/widgets/NoResult.vue'
import BaseMealDetails from '@/components/widgets/BaseMealDetails.vue'
import type { MealDetailsPage } from '@/types/types.ts'

const { getMealListById, meal, isLoading }: MealDetailsPage = useMeal()

const route = useRoute()

watch(
  () => route.params.id,
  async (newMealId, oldMealId) => {
    if (newMealId !== oldMealId) {
      await getMealListById(newMealId as string)
    }
  }
)

onMounted(async () => {
  await getMealListById(route.params.id as string)
})
</script>
