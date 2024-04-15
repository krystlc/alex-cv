<script>
  import { Icon } from "svelte-icons-pack";
  import SectionTitle from "./SectionTitle.svelte";
  import { CgCommunity, CgDesignmodo, CgGitFork } from "svelte-icons-pack/cg";
  import { TrOutlineWaveSawTool } from "svelte-icons-pack/tr";
  import viewport from "../hooks/useViewportAction";

  const services = [
    {
      icon: CgDesignmodo,
      title: "UX/UI Focus",
      body: "Craft intuitive interfaces, prioritizing user experience for optimal engagement and satisfaction.",
    },
    {
      icon: CgGitFork,
      title: "Develop",
      body: "Deliver high-quality solutions using modern technologies, ensuring scalability and maintainability.",
    },
    {
      icon: TrOutlineWaveSawTool,
      title: "Latest Tech",
      body: "Stay abreast of emerging technologies, leveraging them to drive innovation and efficiency.",
    },
    {
      icon: CgCommunity,
      title: "Team Work",
      body: "Collaborate effectively in small to medium teams, fostering synergy and achieving shared goals.",
    },
  ];

  let isBlockViewed = false;
</script>

<div>
  <div class="space-y-8">
    <SectionTitle
      title="Experience"
      subtitle="With a decade in software engineering, I've honed my skills to deliver
      solutions that truly matter"
    />
    <p>
      At <a
        href="https://www.linkedin.com/company/the-inc-lab"
        target="_blank"
        rel="noopener noreferrer">TheIncLab</a
      >, I contributed to projects for the Department of Defense, leveraging
      JavaScript, TypeScript, and React to ensure top-quality software delivery.
      And at
      <a
        href="https://www.linkedin.com/company/the-well1/"
        target="_blank"
        rel="noopener noreferrer">The WELL</a
      >, I led frontend development, enhancing the online booking experience and
      overhauling the editorial blog. These projects highlighted my commitment
      to user-centric design and seamless functionality.
    </p>
    <p>
      Additionally, I've explored emerging technologies like blockchain through
      projects such as the Decentralized Wine Marketplace and the NFT Rarity
      Scanner, showcasing my passion for innovation. As I continue my
      engineering journey, I'm dedicated to creating solutions that make a real
      impact. If you're seeking a confident engineer ready to tackle challenges
      head-on, let's connect and explore how we can achieve remarkable results
      together.
    </p>
  </div>
  <aside
    class=" bg-indigo-600 p-8 text-center md:text-left md:p-16 my-8 md:my-16 font-bold uppercase text-white tracking-widest text-sm underline underline-offset-4 space-x-4 md:space-x-16 transition-all block duration-1000 opacity-0"
    class:is-active={isBlockViewed}
    use:viewport
    on:enterViewport={() => (isBlockViewed = true)}
    on:exitViewport={() => (isBlockViewed = false)}
  >
    <a href="#projects">My Projects</a>
  </aside>
  <aside class="grid md:grid-cols-2 gap-16">
    {#each services as item}
      <div class="space-y-4 max-w-xs">
        <div class=" text-rose-500">
          <Icon src={item.icon} size={48} />
        </div>
        <h3>{item.title}</h3>
        <p>
          {item.body}
        </p>
      </div>
    {/each}
  </aside>
</div>

<style scoped>
  .is-active {
    @apply md:-translate-x-4 opacity-100;
  }
</style>
