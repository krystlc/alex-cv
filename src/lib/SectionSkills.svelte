<script>
  import viewport from "../hooks/useViewportAction";
  import SectionTitle from "./SectionTitle.svelte";

  const timeline = [
    {
      year: "2019",
      duration: "2017 - 2019",
      description:
        "Explored data visualization and micro web app development techniques.",
    },
    {
      year: "2020",
      duration: "2020-2021",
      description:
        "Mastered advanced JavaScript, CSS; enhanced data analysis skills.",
    },
    {
      year: "2021",
      duration: "2021 - 2023",
      description:
        "Perfected Vue.js, React; learned Vite, TypeScript, state management, routing, various frameworks. Spearheaded DeFi projects; integrated GraphQL, Nest.js, AWS, Netlify, Vercel.",
    },
    {
      year: "2023",
      duration: "2023 - current",
      description:
        "Adopted modern web practices; developed project management, collaboration skills; explored Electron. Implemented CI/CD pipelines, end-to-end testing; delved into federated runtime microservices.",
    },
  ];

  const skills = [
    {
      title: "JavaScript",
      value: 90,
    },
    {
      title: "React",
      value: 80,
    },
    {
      title: "Vue.js",
      value: 85,
    },
    {
      title: "TypeScript",
      value: 85,
    },
    {
      title: "CSS",
      value: 85,
    },
    {
      title: "Node.js",
      value: 85,
    },
    {
      title: "GraphQL",
      value: 75,
    },
    {
      title: "CI/CD",
      value: 70,
    },
    {
      title: "Testing",
      value: 80,
    },
    {
      title: "Collaboration",
      value: 95,
    },
  ];

  let isBlockViewed = false;
</script>

<div>
  <div class="space-y-4">
    <SectionTitle
      title="Skills"
      subtitle="Showcasing my arsenal of skills and expertise"
    />
    <p>
      Whether it's building robust web applications, crafting elegant user
      interfaces, or collaborating with cross-functional teams, the Skills
      section is a testament to my dedication to continuous learning and mastery
      of the craft of software engineering.
    </p>
  </div>
  <div class="p-8 md:p-16 bg-indigo-600 text-white my-8 md:my-16">
    <table>
      {#each timeline as item}
        <tr class="group">
          <td
            class="py-8 text-xl md:text-5xl font-extralight inline-block pr-4 md:pr-16"
          >
            <span
              class="transition-transform group-hover:-translate-x-2 inline-block"
            >
              {item.year}</span
            >
          </td>
          <td class="py-8">
            <p
              class="transition-transform group-hover:translate-x-2 inline-block"
            >
              <span class="font-semibold mr-2">{item.duration}</span>
              {item.description}
            </p>
          </td>
        </tr>
      {/each}
    </table>
  </div>
  <section
    class="grid md:grid-cols-2 gap-x-16 gap-y-8 md:gap-y-4"
    use:viewport
    on:enterViewport={() => (isBlockViewed = true)}
    on:exitViewport={() => (isBlockViewed = false)}
  >
    {#each skills as skill}
      <div class="grid grid-cols-5 items-center">
        <h5 class=" col-span-2 uppercase tracking-widest font-semibold text-xs">
          {skill.title}
        </h5>
        <div class="bg-indigo-200 h-2 col-span-3 overflow-hidden">
          <div
            class="bg-indigo-500 h-full transition-transform duration-1000 -translate-x-full"
            class:translate-x-0={isBlockViewed}
            data-fill={`${skill.value}%`}
            style={`width: ${skill.value}%`}
          ></div>
        </div>
      </div>
    {/each}
  </section>
</div>
