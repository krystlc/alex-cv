<script lang="ts">
  export let title: string;
  export let subtitle: string;
</script>

<div class="max-w-lg space-y-4">
  <h2>{title}</h2>
  {#if subtitle}
    <h4>
      {subtitle}
    </h4>
  {/if}
</div>

<style scoped>
  h2 {
    @apply text-2xl uppercase font-semibold tracking-widest;
  }
  h4 {
    @apply text-xl;
  }
</style>
