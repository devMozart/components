<script setup lang="ts">
import { onMounted, ref } from 'vue'

interface IHackerTextProps {
  text: string
  options?: {
    animateOnMount?: boolean
    animateOnMouseOver?: boolean
  }
}

const props = defineProps<IHackerTextProps>()

const defaultOptions = {
  animateOnMount: true,
  animateOnMouseOver: false
}

const mergedOptions = {
  ...defaultOptions,
  ...props.options
}

const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
const originalText = ref<string>(props.text.toUpperCase())
const animatedText = ref<string>(originalText.value)

const interval = ref<null | number>(null)

const animate = () => {
  let iteration = 0

  if (interval.value !== null) clearInterval(interval.value)

  interval.value = setInterval(() => {
    animatedText.value = animatedText.value
      .split('')
      .map((_, index) => {
        if (index < iteration) {
          return originalText.value[index]
        }
        return letters[Math.floor(Math.random() * 26)]
      })
      .join('')

    if (interval.value !== null && iteration >= originalText.value.length) {
      clearInterval(interval.value)
    }

    iteration += 1 / 3
  }, 50)
}

onMounted(() => {
  if (mergedOptions.animateOnMount) setTimeout(animate, 500)
})

const onMouseOver = () => {
  if (mergedOptions.animateOnMouseOver) {
    animate()
  }
}
</script>

<template>
  <h1 @mouseover="onMouseOver">{{ animatedText }}</h1>
</template>

<style scoped>
h1 {
  font-family: 'Space Mono', monospace;
  font-size: clamp(3rem, 10vw, 10rem);
  color: white;
  padding: 0rem clamp(1rem, 2vw, 3rem);
  border-radius: clamp(0.4rem, 0.75vw, 1rem);
}

h1:hover {
  background-color: white;
  color: black;
}
</style>
