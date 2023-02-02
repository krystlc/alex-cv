<template>
  <div class="sm:max-w-screen-lg mx-auto sm:flex justify-end relative">
    <div class="overflow-hidden sm:h-screen sm:sticky top-0">
      <div class="sm:-rotate-90 origin-right h-12 sm:h-auto">
        <FitText viewBox="0 0 115 40" content="Alex Valle" valueY="11" />
      </div>
    </div>
    <div
      class="bg-amber-100 text-black sm:w-4/5 min-h-screen border-l border-black"
    >
      <header class="grid sm:grid-cols-2 gap-2 px-4 py-8 sm:p-8 sm:gap-8">
        <picture class="block">
          <img
            src="/public/alex.jpg"
            alt="Alex Valle"
            class="object-cover h-full w-48 sm:w-full mx-auto"
          />
        </picture>
        <div class="space-y-2">
          <div>symbols</div>
          <h1 class="text-4xl">Hello!</h1>
          <p>
            Welcome to my web developer resume site. I'm a skilled developer
            with a passion for creating high-quality, user-friendly websites.
            With years of experience in HTML, CSS, JavaScript and more, I'm
            ready to bring your project to life. Explore my skills and
            experience, and let's work together to create something great.
            <a href="#/cover"> Read cover letter </a>.
          </p>
        </div>
      </header>
      <aside
        class="bg-black text-white p-4 sm:px-8 flex flex-col sm:flex-row justify-between gap-y-1 gap-x-8"
      >
        <h3>Contact</h3>
        <a href="mailto:alex.valle@gmail.com">alex.valle@gmail.com</a>
        <a
          href="https://github.com/krystlc"
          target="_blank"
          rel="noopener noreferrer"
          >github.com/krystlc</a
        >
      </aside>
      <main class="px-4 py-8 grid sm:grid-cols-2 auto-cols-fr gap-8">
        <section>
          <h2>Profile</h2>
          <p>
            I started my journey as a freelance web developer while traveling
            and have since elevated my skills in the tech-driven environment of
            New York City. With a focus on frontend development, I've recently
            delved into the exciting world of web3 and smart contracts. In my
            free time, I enjoy challenging myself through rock climbing and
            cross country cycling. Looking to bring my passion for web
            development and my diverse interests to new and exciting projects.
          </p>
        </section>
        <section>
          <h2>Work Experience</h2>
          <ul class="space-y-2">
            <li v-for="item in workExperienceItems">
              <h4>{{ item.heading }} {{ item.year }}</h4>
              <span>{{ item.subheading }}</span>
            </li>
          </ul>
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
          <dl class="grid grid-cols-5 gap-4">
            <template v-for="item in skillItems">
              <dt class="col-span-2">
                <h4>{{ item.heading }}</h4>
              </dt>
              <dd class="col-span-3">
                <span>{{ item.subheading }}</span>
              </dd>
            </template>
          </dl>
        </section>
        <section>
          <h2>Languages</h2>
          <ul class="space-y-2">
            <li v-for="(item, key) in languageItems" class="flex">
              <h4 class="w-2/5">{{ key }}</h4>
              <div class="grid grid-cols-5 gap-1 flex-1">
                <span
                  v-for="n in 5"
                  class="border border-black border-opacity-10 p-1 relative"
                  :class="{
                    'before:bg-black before:inset-px before:absolute before:opacity-25 border-opacity-50':
                      n <= item,
                  }"
                ></span>
              </div>
            </li>
          </ul>
        </section>
      </main>
    </div>
  </div>
</template>

<script lang="ts" setup>
import FitText from "../components/FitText.vue";

interface BaseItem {
  heading: string;
  subheading: string;
}

interface BaseItemWithYear extends BaseItem {
  year: string;
}

const educationItems: BaseItemWithYear[] = [
  {
    year: "2004-2006",
    heading: "University of South Florida",
    subheading: "Tampa, FL",
  },
  {
    year: "2003",
    heading: "Freedom High School",
    subheading: "Tampa, FL",
  },
];

const workExperienceItems: BaseItemWithYear[] = [
  {
    year: "2021-2023",
    heading: "THE WELL",
    subheading: "Software Engineer",
  },
  {
    year: "2019-2021",
    heading: "Spirion",
    subheading: "Software Engineer",
  },
  {
    year: "2015-2019",
    heading: "VICE Media",
    subheading: "System Manager, Information Systems",
  },
  {
    year: "2010-2015",
    heading: "Freelance",
    subheading: "Web Developer",
  },
];

const skillItems: BaseItem[] = [
  {
    heading: "Buzzwords",
    subheading: "Vue, React, Nuxt, Metamask, Ethereum, etc.",
  },
  {
    heading: "Platforms",
    subheading: "AWS, GCP, Netlify, Vercel, Moralis, IPFS, Alchemy, etc.",
  },
];

const languageItems: Record<string, number> = {
  English: 4,
  Spanish: 4,
  Japanese: 1,
  Korean: 1,
};
</script>

<style scoped>
section h2 {
  @apply text-2xl mb-4;
}
section h4 {
  @apply font-bold uppercase;
}
section span {
  @apply opacity-75;
}
</style>
