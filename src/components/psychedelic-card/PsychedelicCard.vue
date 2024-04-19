<script setup lang="ts">
import { computed } from 'vue'

interface IPsychedelicCardProps {
  hue: number
  text: string
}

const props = defineProps<IPsychedelicCardProps>()

const backgroundColor = computed(() => {
  return {
    background: `linear-gradient(-135deg, hsla(${props.hue}, 100%, 80%, 1), hsla(${props.hue}, 90%, 45%, 1))`
  }
})
</script>

<template>
  <div class="card">
    <div class="card-content" :style="backgroundColor">
      <span>{{ text }}</span>
    </div>
    <div class="card-faders">
      <div class="card-fader" :style="backgroundColor"></div>
      <div class="card-fader" :style="backgroundColor"></div>
      <div class="card-fader" :style="backgroundColor"></div>
      <div class="card-fader" :style="backgroundColor"></div>
      <div class="card-fader" :style="backgroundColor"></div>
      <div class="card-fader" :style="backgroundColor"></div>
      <div class="card-fader" :style="backgroundColor"></div>
      <div class="card-fader" :style="backgroundColor"></div>
    </div>
  </div>
</template>

<style scoped>
.card {
  width: clamp(300px, 20vw, 500px);
  aspect-ratio: 2/3;
  cursor: pointer;
  position: relative;
}

.card-content {
  position: relative;
  width: clamp(300px, 20vw, 500px);
  aspect-ratio: 2/3;
  z-index: 2;
  display: grid;
  place-content: center;

  span {
    font-size: 4rem;
  }
}

.card-faders {
  height: 100%;
  width: 100%;
  position: absolute;
  left: 0px;
  top: 0px;
  z-index: 1;
  opacity: 0;
  transition: opacity 1500ms;
  pointer-events: none;
}

.card-fader {
  position: absolute;
  left: 0px;
  top: 0px;
  width: clamp(300px, 20vw, 500px);
  aspect-ratio: 2/3;
}

.card-fader:nth-child(odd) {
  animation: fade-left 3s linear infinite;
}

.card-fader:nth-child(even) {
  animation: fade-right 3s linear infinite;
}

.card-fader:is(:nth-child(3), :nth-child(4)) {
  animation-delay: 750ms;
}

.card-fader:is(:nth-child(5), :nth-child(6)) {
  animation-delay: 1500ms;
}

.card-fader:is(:nth-child(7), :nth-child(8)) {
  animation-delay: 2250ms;
}

.card:hover .card-faders {
  opacity: 1;
}

.card:active {
  scale: 0.98;
}

.card:nth-child(2) {
  background: linear-gradient(-135deg, hsla(100, 100%, 80%, 1), hsla(100, 90%, 45%, 1));
}

.card:nth-child(3) {
  background: linear-gradient(-135deg, hsla(300, 100%, 80%, 1), hsla(300, 90%, 45%, 1));
}

@keyframes fade-left {
  from {
    scale: 1;
    translate: 0%;
    opacity: 1;
  }

  to {
    scale: 0.8;
    translate: -30%;
    opacity: 0;
  }
}

@keyframes fade-right {
  from {
    scale: 1;
    translate: 0%;
    opacity: 1;
  }

  to {
    scale: 0.8;
    translate: 30%;
    opacity: 0;
  }
}
</style>
