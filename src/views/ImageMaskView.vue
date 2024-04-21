<script setup lang="ts">
import warlock from '@/assets/warlock.webp'
import { computed, onMounted, onUnmounted, reactive, ref } from 'vue'

const maskPosition = reactive({ x: 0, y: 0 })
const maskSize = ref(50)
const intervalId = ref<number | undefined>(undefined)

const updateMaskPosition = () => {
  maskPosition.x = Math.floor(Math.random() * 101)
  maskPosition.y = Math.floor(Math.random() * 101)
  maskSize.value = Math.random() * (80 - 40) + 40
}

const maskStyle = computed(() => {
  return {
    maskPosition: `${maskPosition.x}% ${maskPosition.y}%`,
    maskSize: `${maskSize.value}% ${maskSize.value}%`
  }
})

onMounted(() => {
  intervalId.value = setInterval(updateMaskPosition, 2000)
})

onUnmounted(() => {
  if (intervalId.value) clearInterval(intervalId.value)
})
</script>

<template>
  <div class="ImageMaskView">
    <img :src="warlock" :style="maskStyle" />
  </div>
</template>

<style scoped>
.ImageMaskView {
  height: 100%;
  display: grid;
  place-items: center;
  background-color: black;
  overflow: hidden;
  color: white;

  img {
    aspect-ratio: 4/3;
    object-fit: contain;
    mask-image: radial-gradient(
      circle,
      rgba(0, 0, 0, 1) 0%,
      rgba(0, 184, 222, 0) 50%,
      rgba(0, 212, 255, 0) 100%
    );
    mask-repeat: no-repeat;
    transition:
      mask-position 2000ms ease-in-out,
      mask-size 2000ms ease-in-out;
  }
}
</style>
