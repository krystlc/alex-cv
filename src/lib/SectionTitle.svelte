<script lang="ts">
    export let title: string;
    export let subtitle: string;
</script>

<div class="card-title">
    <h2>{title}</h2>
    {#if subtitle}
        <h4>
            {subtitle}
        </h4>
    {/if}
</div>

<style scoped>
    h2 {
        @apply font-display;
    }
    h4 {
        @apply tracking-widest text-sm;
    }
</style>
