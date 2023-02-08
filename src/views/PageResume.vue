<template>
  <div class="sm:max-w-screen-md mx-auto sm:flex justify-end relative">
    <div class="overflow-hidden sm:h-screen sm:sticky top-0">
      <div
        class="sm:-rotate-90 origin-right h-12 sm:h-auto print:text-black print:h-24"
      >
        <FitText viewBox="0 0 115 40" content="Alex Valle" valueY="11" />
      </div>
    </div>
    <div
      class="bg-amber-100 text-black sm:w-4/5 min-h-screen sm:border-l border-black grid print:gap-8"
    >
      <header
        class="sm:flex gap-8 px-4 py-8 sm:p-8 print:col-span-6 print:p-0 print:hidden"
      >
        <div class="space-y-4">
          <figure>
            <picture class="block aspect-square w-32">
              <img
                src="/alex.jpg"
                alt="Alex Valle"
                class="object-cover h-32 w-32"
              />
            </picture>
          </figure>
          <div class="text-xl space-x-4">
            <a
              href="https://www.linkedin.com/in/alexv/"
              target="_blank"
              rel="noopener noreferrer"
              ><i class="lni lni-linkedin-original"></i
            ></a>
            <a
              href="https://github.com/krystlc"
              target="_blank"
              rel="noopener noreferrer"
              ><i class="lni lni-github-original"></i
            ></a>
            <a
              href="https://etherscan.io/address/0xa8f85ddef6e25ccb073ef0f0c04ce53852e0f666"
              target="_blank"
              rel="noopener noreferrer"
              ><i class="lni lni-ethereum"></i
            ></a>
            <a href="http://" target="_blank" rel="noopener noreferrer"></a>
          </div>
        </div>
        <div class="space-y-2 sm:space-y-4">
          <h1 class="text-4xl sm:text-6xl">Hello!</h1>
          <div class="space-y-4">
            <p>
              I'm a skilled developer with a passion for creating high-quality,
              user-friendly websites. With years of experience in HTML, CSS,
              JavaScript and more, I'm ready to bring your project to life.
            </p>
            <p>
              Explore my skills and experience, and let's work together to
              create something great.
            </p>
            <p>
              <a href="#/cover">
                Read cover letter <i class="lni lni-arrow-top-right"></i
              ></a>
            </p>
          </div>
        </div>
      </header>
      <aside
        class="bg-black text-white p-4 sm:px-8 flex flex-col sm:flex-row gap-y-1 gap-x-8 print:flex-row print:text-black print:gap-x-4 print:p-0"
      >
        <h3>Contact</h3>
        <span class="inline-flex items-center gap-2">
          <i class="lni lni-envelope"></i>
          <a href="mailto:alex.valle@gmail.com"> alex.valle@gmail.com</a>
        </span>
        <span class="inline-flex items-center gap-2"
          ><i class="lni lni-discord-alt"></i> <code>peluchino#1541</code></span
        >
      </aside>
      <main class="px-4 py-8 sm:px-8 overflow-hidden grid gap-8 print:p-0">
        <section>
          <h2>Work Experience</h2>
          <ul class="space-y-4 sm:space-y-2">
            <li v-for="(item, n) in workExperienceItems">
              <h4>{{ item.heading }} {{ item.year }}</h4>
              <p>{{ item.subheading }}</p>
              <details
                v-if="item.list"
                class="group [&_summary::-webkit-details-marker]:hidden"
                :open="n === 0"
              >
                <summary
                  class="inline-flex text-xs font-medium tracking-widest uppercase gap-1 items-center justify-between py-2 cursor-pointer print:hidden"
                >
                  Read more
                  <i
                    class="lni lni-chevron-down group-open:-rotate-180 transition-all"
                  ></i>
                </summary>
                <ul class="list-outside px-4 pb-4 space-y-2">
                  <li v-for="li in item.list" class="list-disc pl-2">
                    {{ li }}
                  </li>
                </ul>
              </details>
            </li>
          </ul>
        </section>
        <section class="space-y-4 print:order-first">
          <h2>Profile</h2>
          <p>
            I started my journey as a freelance web developer while traveling
            and have since elevated my skills in the tech-driven environment of
            New York City. With a focus on frontend development, I've recently
            delved into the exciting world of web3 and smart contracts.
          </p>
          <p>
            In my free time, I enjoy challenging myself through rock climbing
            and cross country cycling. Looking to bring my passion for web
            development and my diverse interests to new and exciting projects.
          </p>
        </section>
        <section>
          <h2>Education</h2>
          <dl class="grid grid-cols-8 gap-4">
            <template v-for="item in educationItems">
              <dt class="font-bold col-span-3">{{ item.year }}</dt>
              <dd class="col-span-5">
                <h4>{{ item.heading }}</h4>
                <span>{{ item.subheading }}</span>
              </dd>
            </template>
          </dl>
        </section>
        <section>
          <h2>Skills</h2>
          <dl class="grid grid-cols-8 gap-4">
            <template v-for="item in skillItems">
              <dt class="col-span-3">
                <h4>{{ item.heading }}</h4>
              </dt>
              <dd class="col-span-5">
                <span>{{ item.subheading }}</span>
              </dd>
            </template>
          </dl>
        </section>
      </main>
      <footer
        class="clear-both py-8 border-t-2 border-black text-center space-y-4 print:hidden"
      >
        <a
          href="https://github.com/krystlc/alex-cv"
          target="_blank"
          rel="noopener noreferrer"
          class="inline-flex gap-1 items-center"
          >source code</a
        >
        <p>
          made with
          <span class="flex items-center gap-1 justify-center">
            <i class="lni lni-vuejs text-teal-600"></i>
            <i class="lni lni-lineicons-symbol text-purple-500"></i>
          </span>
        </p>
      </footer>
    </div>
  </div>
</template>

<script lang="ts" setup>
import FitText from "../components/FitText.vue";

interface BaseItem {
  heading: string;
  subheading: string;
}

interface IEducation extends BaseItem {
  year: string;
}

interface IWorkExperience extends BaseItem {
  year: string;
  list?: string[];
}

const educationItems: IEducation[] = [
  {
    year: "2004-2006",
    heading: "University of South Florida",
    subheading: "Tampa, FL",
  },
];

const workExperienceItems: IWorkExperience[] = [
  {
    year: "2021-2023",
    heading: "THE WELL",
    subheading:
      "Developed and maintained e-commerce website and editorial blog. Created standalone booking management application. Skilled in full-stack development and project management.",
    list: [
      "Led front end development of bespoke online booking experience for THE WELL increasing the volume of online booking to 50% of total bookings.",
      "Spearhead end to end development of THE WELL editorial blog re-design, leading it to be the number one traffic generator to the website.",
      "Managed continuous enhancements and maintenance of the-well.com e-commerce and content pages.",
      "Collaborated cross functionally with back end engineers, UX/UI designers, product managers, brand/marketing, and operations to launch new features",
    ],
  },
  {
    year: "2022",
    heading: "Decentralized Wine Marketplace",
    subheading:
      "Developed a decentralized marketplace and inventory system managed by smart contracts on the Polygon network, with data hosted on the IPFS platform.",
    list: [
      "Designed and developed a decentralized wine marketplace that enabled users to buy and sell wine bottles in a transparent and trust-based environment.",
      "Implemented a decentralized inventory system managed by smart contracts on the Polygon network, ensuring the security and integrity of the wine data.",
      "Created tokens to represent each bottle of wine and hosted their metadata on IPFS, providing investors with a trustless historical record and greater confidence in their purchases.",
    ],
  },
  {
    year: "2021",
    heading: "NFT Rarity Scanner",
    subheading:
      "Created an NFT ranking system that intake a smart contract address and ranks tokens based on their metadata.",
    list: [
      "Developed a highly successful and lucrative NFT ranking system that was able to rank tokens based on their metadata.",
      "Implemented an efficient system to capture and save token metadata, ensuring the accuracy and reliability of the ranked data.",
      "Built a proprietary NFT that provided users with access to the ranked data, which became incredibly popular in a short period of time.",
      "The NFT Rarity Scanner ranked in the top 20,000 websites in the world within weeks of launch, with over 500 backers supporting the project. This was a testament to the success and high demand for the NFT ranking system.",
    ],
  },
  {
    year: "2019-2021",
    heading: "Spirion",
    subheading:
      "Frontend developer for an application that finds all structured and unstructured data across all networks, cloud file storage systems, remote file servers, and endpoints.",
    list: [
      "Developed a brand new application for administrators.",
      "Utilized Spirion's legacy software through RESTful APIs.",
      "Worked with design team to create a user-friendly dashboard.",
      "Improved user experience for administrators monitoring servers and endpoints.",
    ],
  },
  {
    year: "2015-2019",
    heading: "VICE Media",
    subheading:
      "Developed internal micro web apps, including data visualizations. Skilled in front-end development and data analysis.",
  },
];

const skillItems: BaseItem[] = [
  {
    heading: "Frameworks",
    subheading: "Vue, Nuxt, Graphql, Tailwind, Material, Bulma, etc.",
  },
  {
    heading: "Platforms",
    subheading:
      "AWS, GCP, Netlify, Vercel, Terraform, Sendgrid, Stripe, Moralis, IPFS, Alchemy, etc.",
  },
  {
    heading: "Web3",
    subheading: "Ether.js, OpenZeppelin, Manifold, Metamask, etc.",
  },
  {
    heading: "Gaming",
    subheading: "Super Smash Bros Ultimate, Dark Souls III, Elden Ring",
  },
];
</script>

<style scoped>
section h2 {
  @apply text-3xl mb-4;
}
section h4 {
  @apply font-bold uppercase;
}
section span {
  @apply opacity-75;
}
</style>
