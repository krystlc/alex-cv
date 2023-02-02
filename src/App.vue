<template>
  <KeepAlive> <component :is="currentView" /></KeepAlive>
</template>

<script lang="ts" setup>
import PageResume from "./views/PageResume.vue";
import PageCoverLetter from "./views/PageCoverLetter.vue";
import { ref, computed } from "vue";

const routes = {
  "/": PageResume,
  "/cover": PageCoverLetter,
};

const currentPath = ref(window.location.hash);
const currentView = computed(() => routes[currentPath.value.slice(1) || "/"]);

window.addEventListener(
  "hashchange",
  () => (currentPath.value = window.location.hash)
);
</script>
