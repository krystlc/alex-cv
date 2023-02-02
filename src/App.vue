<template>
  <KeepAlive>
    <transition name="fade-right"><component :is="currentView" /></transition
  ></KeepAlive>
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

window.addEventListener("hashchange", () => {
  currentPath.value = window.location.hash;
  scrollTo({ top: 0, left: 0 });
});
</script>

<style scoped>
.fade-right-enter-active {
  animation: fade-right-in 0.6s ease-out;
}
.fade-right-leave-active {
  animation: fade-right-out 0.3s ease-out;
}

@keyframes fade-right-in {
  from {
    opacity: 0;
    transform: translateX(10px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

@keyframes fade-right-out {
  from {
    opacity: 1;
    transform: translateX(0);
  }
  to {
    opacity: 0;
    transform: translateX(10px);
  }
}
</style>
