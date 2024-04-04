<!--SideBar-->

<template>
  <nav class="p-2 position-fixed w-100 z-1">
    <div class="container d-flex justify-content-between">
      <button
        class="d-flex justify-content-between align-items-center"
        id="menu-btn"
        @click="toggleMenu"
      >
        <ToggleButtonIcon />
      </button>
      <router-link to="/">
        <h5 class="text-light">
          The Meal
          <i class="fa-solid fa-bowl-food"></i>
        </h5>
      </router-link>
    </div>
  </nav>
  <aside
    class="navbar navbar-expand d-flex flex-column align-item-start z-2"
    id="sidebar"
    :class="{ 'active-nav': isOpen }"
  >
    <div
      class="d-flex justify-content-between text-secondary p-3 w-100 pointer"
      @click="toggleAccordion('category')"
    >
      <h6>Filter by Category</h6>

      <span
        :class="{
          'fas fa-chevron-down': isAccordionOpen === 'category',
          'fas fa-chevron-up': isAccordionOpen !== 'category'
        }"
      ></span>
    </div>

    <div class="accordion-content w-100 text-start p-3" v-show="isAccordionOpen === 'category'">
      <filter-category></filter-category>
    </div>
    <div
      class="d-flex justify-content-between text-secondary p-3 w-100 pointer"
      @click="toggleAccordion('area')"
    >
      <h6>Filter by Area</h6>
      <span
        :class="{
          'fas fa-chevron-down': isAccordionOpen === 'area',
          'fas fa-chevron-up': isAccordionOpen !== 'area'
        }"
      ></span>
    </div>
    <div class="accordion-content w-100 text-start p-3" v-show="isAccordionOpen === 'area'">
      <filter-area></filter-area>
    </div>
  </aside>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import ToggleButtonIcon from '@/components/icons/ToggleButtonIcon.vue'
import FilterArea from './FilterArea.vue'
import FilterCategory from './FilterCategory.vue'

const isOpen = ref<boolean>(false)
const isAccordionOpen = ref<string | null>(null)

const toggleMenu = () => {
  isOpen.value = !isOpen.value
}

const toggleAccordion = (accordion: string) => {
  isAccordionOpen.value = isAccordionOpen.value === accordion ? null : accordion
}

const handleOutsideClick = (event: MouseEvent) => {
  const targetElement = event.target as Element
  if (!targetElement.closest('#sidebar') && !targetElement.closest('#menu-btn')) {
    isOpen.value = false
  }
}

onMounted(() => {
  document.body.addEventListener('click', handleOutsideClick)
})

onUnmounted(() => {
  document.body.removeEventListener('click', handleOutsideClick)
})
</script>

<style lang="scss" scoped></style>
