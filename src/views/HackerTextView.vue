<script setup lang="ts">
import HackerText from '@/components/hacker-text/HackerText.vue'
</script>

<template>
  <div class="hackerTextView">
    <HackerText text="Amadeus Zancotti" :options="{ animateOnMouseOver: true }" />
  </div>
</template>

<style scoped>
.hackerTextView {
  height: 100%;
  display: grid;
  place-items: center;
  background-color: black;
  overflow: hidden;
}
</style>
