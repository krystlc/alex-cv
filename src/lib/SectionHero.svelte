<script>
  import { Icon } from "svelte-icons-pack";
  import { CgChevronDoubleDown } from "svelte-icons-pack/cg";
  import viewport from "../hooks/useViewportAction";
  import alex from "/alex.jpg";

  let isCoverViewed = false;
</script>

<div class="md:h-screen md:grid md:grid-cols-2 md:-my-16">
  <div class="md:flex md:flex-col justify-center">
    <div class="px-8 -mb-24 md:-mr-32 z-10 relative">
      <h1 class="text-7xl md:text-[6rem] leading-none font-bold">
        Hello, <br />I’m
        <span class=" underline underline-offset-4"> Alex </span>
      </h1>
      <a
        href="#experience"
        rel="nofollow"
        class="inline-block start -ml-3 mt-8 text-indigo-500 animate-pulse"
      >
        <Icon
          src={CgChevronDoubleDown}
          className="text-[4rem] animate-bounce"
        />
      </a>
    </div>
  </div>
  <div class="md:py-16">
    <img
      src={alex}
      alt="Alex Valle"
      class="h-full object-cover transition-all block duration-1000 opacity-0"
      class:translate-x-12={isCoverViewed}
      class:opacity-100={isCoverViewed}
      use:viewport
      on:enterViewport={() => (isCoverViewed = true)}
      on:exitViewport={() => (isCoverViewed = false)}
    />
  </div>
</div>
