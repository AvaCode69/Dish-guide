<template>
  <div class="row p-4">
    <div class="col-md-6 col-12 g-5">
      <img :src="meal.strMealThumb" :alt="meal.strMealThumb" class="img-fluid" />
    </div>
    <div class="col-md-6 col-12 g-5">
      <h3 class="text-orange p-3">{{ meal.strMeal }}</h3>
      <p class="pt-4"><span class="fw-bold">Category</span> : {{ meal.strCategory }}</p>
      <p><span class="fw-bold">Area</span> : {{ meal.strArea }}</p>
      <ingredients-list :meal="meal"></ingredients-list>
    </div>
    <div class="col pt-5">
      <h6 class="fw-bold">Instructions :</h6>
      <ul>
        <li v-for="(instruction, index) in formattedInstructions" :key="index">
          {{ instruction }}
        </li>
      </ul>
    </div>
    <video-player :meal="meal"></video-player>
  </div>
</template>

<script setup lang="ts">
import { computed, defineProps } from 'vue'
import VideoPlayer from './VideoPlayer.vue'
import IngredientsList from './IngredientsList.vue'

import type { Meal } from '@/types/types.ts'

const props = defineProps<{ meal: Meal }>()

const formattedInstructions = computed(() => {
  if (props.meal && props.meal.strInstructions) {
    return props.meal.strInstructions
      .split('\r\n')
      .map((step) => step.trim())
      .filter((step) => step.length > 0)
  } else {
    return []
  }
})
</script>
