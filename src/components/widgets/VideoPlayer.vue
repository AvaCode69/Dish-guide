<!-- VideoPlayer.vue -->
<template>
  <div v-if="meal && meal.strYoutube">
    <h3>Video:</h3>
    <iframe :src="getEmbeddedVideoLink()" frameborder="0" allowfullscreen></iframe>
  </div>
</template>

<script setup lang="ts">
import { defineProps } from 'vue'
import type { Meal } from '@/types/types'

const props = defineProps<{ meal: Meal | null }>()

function getEmbeddedVideoLink() {
  const youtubeLink = props.meal?.strYoutube

  if (youtubeLink && youtubeLink.includes('youtube.com')) {
    const videoId = youtubeLink.split('v=')[1]
    return `https://www.youtube.com/embed/${videoId}`
  }

  return undefined
}
</script>
