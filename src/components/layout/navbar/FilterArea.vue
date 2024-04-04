<!--FilterArea-->
<template>
  <div class="filter-list">
    <ul class="w-auto">
      <li v-for="item in areas" :key="item.strArea" class="p-2 border-bottom">
        <router-link :to="`/area/${item.strArea}`" class="item-link">
          <span class="text-secondary">{{ item.strArea }}</span></router-link
        >
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
import useArea from '@/composables/area'
import { onMounted } from 'vue'

const { getAreasList, areas } = useArea()

onMounted(() => {
  getAreasList()
})
</script>

<style scoped></style>
