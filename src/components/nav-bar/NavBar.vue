<script setup lang="ts">
import { computed } from 'vue'
import { RouterLink, useRoute } from 'vue-router'

interface MenuItem {
  name: string
  path: string
}

interface INavBarProps {
  menuItems: MenuItem[]
}

const props = defineProps<INavBarProps>()

const route = useRoute()

const activeLineStyle = computed(() => {
  const activeIndex = props.menuItems.findIndex((i) => i.path === route.path) + 1
  return {
    top: `${57 * activeIndex}px`
  }
})
</script>

<template>
  <nav>
    <div class="title"></div>
    <RouterLink
      v-for="menuItem in menuItems"
      :key="menuItem.path"
      :to="menuItem.path"
      exact
      :class="{ active: $route.path === menuItem.path }"
    >
      <span class="icon">A</span>
      <span>{{ menuItem.name }}</span>
    </RouterLink>
    <div class="activeLine" :style="activeLineStyle" />
  </nav>
</template>

<style scoped>
nav {
  position: relative;
  display: grid;
  grid-template-rows: repeat(4, 57px);
  background: #373d49;
  color: white;
  height: 100dvh;

  a {
    display: grid;
    grid-template-columns: 40px 1fr;
    color: white;
    text-decoration: none;
    border-bottom: 1px solid #323844;

    span {
      padding: 1rem;
    }

    .icon {
      border-right: 1px solid #323844;
    }
  }

  a:hover {
    background: #4d5159;
  }

  .active {
    background: #464c58;
    transition: background 200ms ease-in-out;
  }

  .title {
    background: #242831;
    display: grid;
    place-items: center;
  }

  .activeLine {
    position: absolute;
    height: 57px;
    width: 2px;
    left: 0;
    border-left: 2px solid white;
    transition: top 200ms ease-in-out;
  }
}
</style>
