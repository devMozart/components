<script setup lang="ts">
import { RouterView } from 'vue-router'
import NavBar from './components/nav-bar/NavBar.vue'

const menuItems = [
  {
    name: 'Home',
    path: '/'
  },
  {
    name: 'Image mask',
    path: '/image-mask'
  },
  {
    name: 'Psychedelic cards',
    path: '/psychedelic-cards'
  },
  {
    name: 'Hacker text',
    path: '/hackertext'
  }
]
</script>

<template>
  <div class="application">
    <header>
      <NavBar :menu-items="menuItems" />
    </header>
    <main>
      <RouterView />
    </main>
  </div>
</template>

<style scoped>
.application {
  display: grid;
  grid-template-columns: 12rem 1fr;
}

main {
  height: 100dvh;
}
</style>
