<script setup lang="ts">
import PsychadelicCard from '@/components/psychedelic-card/PsychedelicCard.vue'
</script>

<template>
  <div class="psychedelicCardsView">
    <div class="cards">
      <PsychadelicCard :hue="100" text="Pick me!" />
      <PsychadelicCard :hue="200" text="...or me!" />
      <PsychadelicCard :hue="300" text="...no me!" />
    </div>
  </div>
</template>

<style scoped>
.psychedelicCardsView {
  height: 100%;
  display: grid;
  place-items: center;
  background-color: black;
  overflow: hidden;
  color: white;
}

.cards {
  width: 100%;
  display: flex;
  justify-content: space-evenly;
}
</style>
