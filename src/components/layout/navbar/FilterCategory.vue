<!--FilterArea-->
<template>
  <div class="filter-list">
    <ul class="w-auto">
      <li v-for="item in categories" :key="item.strCategory" class="p-2 border-bottom">
        <router-link :to="`/category/${item.strCategory}`" class="item-link">
          <span class="text-secondary">{{ item.strCategory }}</span></router-link
        >
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
import useCategory from '@/composables/category'
import { onMounted } from 'vue'

const { getCategoriesList, categories } = useCategory()

onMounted(() => {
  getCategoriesList()
})
</script>

<style scoped></style>
