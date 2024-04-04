<!--SearchForm.vue-->
<template>
  <div
    class="form-group mx-sm-3 mb-2 d-flex align-items-center justify-content-center text-center pt-5"
  >
    <input
      type="text"
      class="h-50 w-50 p-3 rounded-pill"
      placeholder="Search..."
      aria-label="Search input"
      v-model="searchQuery"
      @input="handleSearchInputChange"
      @keydown.enter.prevent="handleEnterKey"
      @focus="autocompleteListVisible = true"
      @blur="handleBlur"
      style="outline: none"
    />
    <!-- Search icon -->
    <button
      class="d-flex justify-content-between align-items-center rounded-circle border border-white ms-2"
      type="button"
      id="search-Btn"
      v-if="searchQuery"
      @click="clearSearch"
    >
      <span>&times;</span>
    </button>

    <div
      v-if="!searchQuery"
      id="search-Btn"
      class="d-flex justify-content-between align-items-center rounded-circle border border-white ms-2"
    >
      <SearchIcon />
    </div>
  </div>

  <ul v-show="autocompleteListVisible" class="autocomplete-list">
    <li v-for="result in searchResult" :key="result.idMeal">
      <router-link
        :to="`/recipe/${result.idMeal}`"
        @mousedown.prevent
        @click="handleAutocompleteItemClick"
      >
        {{ result.strMeal }}
      </router-link>
    </li>
  </ul>
</template>

<script setup lang="ts">
import SearchIcon from '@/components/icons/SearchIcon.vue'

import { ref } from 'vue'
import { useRouter } from 'vue-router'

import useMeal from '@/composables/meal'
import type { MealResult } from '@/types/types.ts'

const { getMealListByName, searchResult }: MealResult = useMeal()

const searchQuery = ref<string>('')
const autocompleteListVisible = ref<boolean>(false)
const router = useRouter()

const handleSearchInputChange = () => {
  if (searchQuery.value.trim() !== '') {
    autocompleteListVisible.value = true
    getMealListByName(searchQuery.value)
  }
}

const handleEnterKey = () => {
  autocompleteListVisible.value = false
  if (searchQuery.value.trim() !== '') {
    router.push({ name: 'ResultMeal', query: { q: searchQuery.value } })
  }
}

const handleBlur = () => {
  autocompleteListVisible.value = false
}

const clearSearch = () => {
  searchQuery.value = ''
  searchResult.value = []
}

const handleAutocompleteItemClick = () => {
  autocompleteListVisible.value = false
}
</script>
