<template>
  <div class="max-w-screen-md mx-auto flex justify-end">
    <div class="rotate-90">
      <FitText viewBox="0 0 49 11" content="Alex Valle" valueY="11" />
    </div>
    <div
      class="bg-amber-100 text-black w-4/5 min-h-screen border-l border-black"
    >
      <header class="grid grid-cols-2 gap-8 p-8">
        <picture class="block">
          <img
            src="/public/alex.jpg"
            alt="Alex Valle"
            class="object-cover h-full w-full"
          />
        </picture>
        <div class="grid grid-rows-3 h-full">
          <div>symbols</div>
          <h1 class="text-5xl">Hello!</h1>
          <p class="text-sm">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eum
            blanditiis obcaecati, laudantium sequi corrupti fugit totam saepe
            qui molestiae magnam ea praesentium porro! Incidunt laudantium vitae
            aliquam tempora consequuntur? Consectetur!
          </p>
        </div>
      </header>
      <aside class="bg-black text-white py-4 px-8 flex gap-8">
        <h3>Contact</h3>
        <a href="mailto:alex.valle@gmail.com">alex.valle@gmail.com</a>
      </aside>
      <main class="p-8 text-sm grid grid-cols-2 auto-cols-fr gap-8">
        <section>
          <h2>Profile</h2>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minus
            vitae similique magnam, saepe quasi animi dicta repellat deserunt
            soluta mollitia sed. Possimus minus accusamus fuga non iure
            accusantium ipsum odio.
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
          <h2>Work Experience</h2>
          <ul>
            <li v-for="item in workExperienceItems">
              <h4>{{ item.heading }} {{ item.year }}</h4>
              <span>{{ item.subheading }}</span>
            </li>
          </ul>
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
            <li v-for="(item, key) in languageItems">
              <h4>{{ key }}</h4>
              <div><span v-for="n in item"></span></div>
            </li>
          </ul>
        </section>
      </main>
      <footer class="text-center py-16 border-t-2 border-black">
        <p>
          <span>{{
            new Date(import.meta.env.VITE_GIT_COMMIT_DATE).toLocaleString()
          }}</span>
          <span>{{ import.meta.env.VITE_GIT_LAST_COMMIT_MESSAGE }}</span>
          <span
            >{{ import.meta.env.VITE_GIT_BRANCH_NAME }} /
            {{ import.meta.env.VITE_GIT_COMMIT_HASH }}</span
          >
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

interface BaseItemWithYear extends BaseItem {
  year: string;
}

const educationItems: BaseItemWithYear[] = [
  {
    year: "1234",
    heading: "heading",
    subheading: "subheading",
  },
];

const workExperienceItems: BaseItemWithYear[] = [
  {
    year: "1234",
    heading: "company",
    subheading: "position",
  },
];

const skillItems: BaseItem[] = [
  {
    heading: "Javascript",
    subheading: "Vue, React, Nuxt, etc",
  },
];

const languageItems: Record<string, number> = {
  English: 5,
  Spanish: 5,
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
</style>
