<script lang="ts">
  import SectionTitle from "./SectionTitle.svelte";

  const posts: {
    title: string;
    url: string;
    date: string;
    categories: string[];
  }[] = [];
</script>

<div>
  <SectionTitle
    title="Blog"
    subtitle="Insights and musings on coding, development, and software engineering"
  />
  <ul class="mt-8 divide-y divide-white">
    {#each posts as post}
      <li class="py-8 md:flex justify-between items-center gap-16">
        <h4 class="mb-4 md:mb-0 font-semibold text-2xl max-w-xl">
          <a href={post.url} class="hover:text-indigo-600">
            {post.title}
          </a>
        </h4>
        <div class="tracking-widest font-semibold text-xs uppercase space-y-1">
          <div>{post.date}</div>
          <ul>
            {#each post.categories as cat}
              <li>
                <a href="#">
                  {cat}
                </a>
              </li>
            {/each}
          </ul>
        </div>
      </li>
    {/each}
    {#if posts.length === 0}
      <li class="py-8 text-center bg-indigo-200 tracking-widest opacity-50">
        coming soon...
      </li>
    {/if}
  </ul>
</div>
