<script lang="ts">
  import { Icon } from "svelte-icons-pack";
  import type { SectionID } from "./app.context";
  import { CgMenuLeftAlt, CgClose } from "svelte-icons-pack/cg";
  import { BsGithub, BsLinkedin } from "svelte-icons-pack/bs";

  export let currentSection: string;
  let openNav = false;

  const navItems: { label: string; value: SectionID }[] = [
    {
      label: "Home",
      value: "home",
    },
    {
      label: "Experience",
      value: "experience",
    },
    {
      label: "About",
      value: "about",
    },
    {
      label: "Projects",
      value: "projects",
    },
    // {
    //   label: "Blog",
    //   value: "blog",
    // },
    {
      label: "Skills",
      value: "skills",
    },
    {
      label: "Contact",
      value: "contact",
    },
  ];

  $: sectionNum = `0${navItems.findIndex((item) => item.value === currentSection) + 1}`;
</script>

<div>
  <div class="flex justify-between p-4 lg:p-0">
    <button on:click={() => (openNav = !openNav)} class="lg:hidden">
      <Icon src={CgMenuLeftAlt} size={32} />
      <span class=" sr-only">Menu</span>
    </button>
    <div class="flex gap-1 font-bold items-center">
      <span
        class="bg-black text-indigo-100 text-center w-8 pl-2 mr-2 after:contain-none relative after:absolute after:left-full after:inset-y-0 after:border-black after:border-l-8 after:border-t-[1rem] after:border-b-[1rem] after:border-b-transparent"
        >{sectionNum}</span
      >
      <span>07</span>
    </div>
  </div>
  <div
    class="text-xl lg:text-base fixed overflow-auto top-0 left-0 h-screen bg-white z-20 flex flex-col p-4 gap-16 w-80 lg:px-0 py-16 lg:static lg:h-auto lg:w-auto lg:bg-transparent transition-transform delay-75 duration-150 ease-out {openNav
      ? 'translate-x-0 shadow-2xl'
      : '-translate-x-full lg:translate-x-0'}"
  >
    <button
      class="lg:hidden ml-auto text-xs uppercase tracking-widest"
      on:click={() => (openNav = false)}
    >
      <Icon src={CgClose} size={24} />
      <span class=" sr-only">Close</span>
    </button>
    <h2
      class="font-black uppercase tracking-widest underline underline-offset-4"
    >
      <a href="/">Alex Valle</a>
    </h2>
    <nav>
      <ul class="space-y-4">
        {#each navItems as item}
          <li>
            <a
              href={`#${item.value}`}
              class="block hover:opacity-70 transition-opacity"
              class:text-indigo-500={item.value === currentSection}
              on:click={() => (openNav = false)}
            >
              {item.label}
            </a>
          </li>
        {/each}
      </ul>
    </nav>
    <div class="flex gap-4 text-2xl font-light">
      <a href="https://www.linkedin.com/in/alexv/"
        ><Icon src={BsLinkedin} /><span class="sr-only">Linkedin</span></a
      >
      <a href="https://github.com/krystlc"
        ><Icon src={BsGithub} /><span class="sr-only">Github</span></a
      >
    </div>
  </div>
</div>
