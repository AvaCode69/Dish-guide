<!-- UseHeader.vue -->

<template>
  <header className="header">
    <div
      className="container pt-5 header-content flex align-center justify-center flex-column text-center  "
    >
      <SearchForm />
      <h2 className="text-white header-title ls-2 mt-4">Embark on a Global Culinary Adventure!</h2>
      <p className="text-uppercase text-white my-3 ls-1">Customize your culinary journey.</p>
    </div>
  </header>
</template>

<script setup lang="ts">
import SearchForm from './SearchForm.vue'
</script>
