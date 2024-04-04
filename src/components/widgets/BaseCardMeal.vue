<template>
  <div class="col">
    <router-link :to="link" class="card p-2">
      <div class="text-end">
        <div class="card-title d-inline-block rounded p-1">
          <p class="text-light mb-0">{{ title }}</p>
        </div>
      </div>
      <img
        class="card-img-top p-2"
        :src="image"
        :alt="title"
        :style="{ transform: hoverImage ? 'scale(0.8)' : '' }"
        @mouseover="hoverImage = true"
        @mouseleave="hoverImage = false"
      />
    </router-link>
  </div>
</template>

<script setup lang="ts">
import { defineProps, ref } from 'vue'

const props = defineProps({
  title: String,
  image: String,
  idMeal: String
})

const hoverImage = ref<boolean>(false)

const link = props.idMeal ? `/recipe/${props.idMeal}` : `/category/${props.title}`
</script>
