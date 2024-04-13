<script>
  import SectionTitle from "./SectionTitle.svelte";

  const items = [
    {
      title: "2048 + Supertab",
      subtitle: "Nuxt 3, Typescript, Micropayments",
      url: "https://github.com/krystlc/2048-nuxt-3-supertab",
    },
    {
      title: "Loren Valle Art Gallery",
      subtitle: "Vite + React SPA",
      url: "https://github.com/krystlc/lorenvalleart-web",
    },
    {
      title: "Beta Blitz",
      subtitle: "React Native, Expo, Typescript",
      url: "https://github.com/briklabs/beta-blitz-mobile",
    },
  ];
</script>

<div>
  <SectionTitle
    title="Projects"
    subtitle="Projects in the making, hoping to serve a purpose someday"
  />
  <div class=" divide-y mt-16">
    {#each items as item}
      <a
        href={item.url}
        target="_blank"
        rel="noopener noreferrer"
        class=" bg-slate-50/50 h-48 flex flex-col items-center justify-center hover:bg-indigo-200/50"
      >
        <h3>{item.title}</h3>
        <p>{item.subtitle}</p>
      </a>
    {/each}
  </div>
</div>
