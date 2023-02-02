<template>
  <svg :viewBox="viewBox" class="w-full">
    <text x="0" :y="valueY" class="font-display uppercase fill-current">
      {{ content }}
    </text>
  </svg>
</template>

<script lang="ts" setup>
defineProps(["viewBox", "valueY", "content"]);
</script>
