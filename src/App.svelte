<script lang="ts">
  import { onMount } from "svelte";
  import AppNavigation from "./lib/AppNavigation.svelte";
  import { sections, type SectionID } from "./lib/app.context";

  let currentSection: SectionID = "home";

  onMount(() => {
    const observer = new IntersectionObserver(handleIntersection, {
      root: null,
      rootMargin: "0px",
      threshold: 0.5, // Trigger when at least 50% of the target is visible
    });

    sections.forEach(({ id }) => {
      const section = document.getElementById(id);
      if (section) observer.observe(section);
    });

    return () => {
      observer.disconnect();
    };
  });

  function handleIntersection(entries: IntersectionObserverEntry[]) {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        currentSection = entry.target.id as SectionID;
      }
    });
  }
</script>

<div class="md:grid grid-cols-3">
  <header
    class="bg-indigo-50 top-0 z-20 md:col-span-1 md:order-last sticky md:h-screen md:flex-col md:justify-center md:p-16"
  >
    <AppNavigation {currentSection} />
  </header>
  <main class="col-span-2">
    <div class="mx-auto max-w-3xl">
      {#each sections as { id, component }}
        <section {id} class="py-8 px-2 md:px-0 md:py-16">
          <svelte:component this={component} />
        </section>
      {/each}
    </div>
  </main>
</div>
<footer
  class="h-screen flex flex-col gap-1 items-center justify-center bg-black text-white"
>
  <p>That's it, The End!</p>
  <p>
    Oh, here's the <a
      href="https://github.com/krystlc/alex-cv"
      class="underline underline-offset-4 text-indigo-400"
      target="_blank"
      rel="noopener noreferrer">source code</a
    >.
  </p>
</footer>
