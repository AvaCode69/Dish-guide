<!--HomeView.vue-->
<template>
  <div class="container">
    <div v-if="isLoading" class="row justify-content-center"><Spinner /></div>
    <div v-else class="row row-cols-lg-4 row-cols-md-3 row-cols-2 g-4 mt-5">
      <Card
        v-for="category of categories"
        :key="category.idCategory"
        :title="category.strCategory"
        :image="category.strCategoryThumb"
      />
    </div>
    <NoResult v-if="!isLoading && !categories?.length" class="row" />
  </div>
</template>

<script setup lang="ts">
import { onMounted } from 'vue'
import Card from '@/components/widgets/BaseCardMeal.vue'
import Spinner from '@/components/widgets/BaseSpinner.vue'
import useCategory from '@/composables/category'
import NoResult from '@/components/widgets/NoResult.vue'
import type { MealCategories } from '@/types/types.ts'

const { getCategoriesList, categories, isLoading }: MealCategories = useCategory()

onMounted(() => {
  getCategoriesList()
})
</script>
