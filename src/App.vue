<script setup lang="ts">
import { computed } from 'vue'
import { RouterLink, RouterView, useRoute } from 'vue-router'

const route = useRoute()

const routes = [
  {
    name: 'Home',
    path: '/'
  },
  {
    name: 'Hacker text',
    path: '/hackertext'
  }
]

const activeRouteStyle = computed(() => {
  const activeIndex = routes.findIndex((r) => r.path === route.path) + 1
  return {
    top: `${57 * activeIndex}px`
  }
})
</script>

<template>
  <div class="application">
    <header>
      <nav>
        <div class="title"></div>
        <RouterLink
          v-for="route in routes"
          :key="route.path"
          :to="route.path"
          exact
          :class="{ active: $route.path === route.path }"
        >
          <span class="icon">A</span>
          <span>{{ route.name }}</span>
        </RouterLink>
        <div class="activeLine" :style="activeRouteStyle" />
      </nav>
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

header {
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
}

nav {
  position: relative;
  display: grid;
  grid-template-rows: repeat(3, 57px);

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
