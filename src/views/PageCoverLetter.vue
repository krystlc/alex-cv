<template>
  <div>
    <header class="-mt-6 wrapper">
      <div class="-translate-y-8">
        <FitText viewBox="0 0 49 11" content="Alex" valueY="11" />
      </div>
    </header>
    <main>
      <section class="pb-8">
        <div class="bg-green-200 wrapper relative">
          <a href="#/" class="text-black top-4 right-4 absolute">Read resume</a>
          <picture class="aspect-square w-48 sm:w-64 mx-auto block">
            <img
              src="/alex.jpg"
              alt="Alex Valle"
              class="object-fill h-full w-full"
            />
          </picture>
        </div>
      </section>
      <section class="border-y-2">
        <div class="wrapper p-8 sm:px-0">
          <h1 class="text-5xl mb-4">To whom it may concern</h1>
          <article
            class="grid sm:grid-cols-2 gap-4 sm:gap-16 text-justify leading-relaxed sm:text-sm text-gray-200"
          >
            <div class="space-y-4">
              <p>
                I am writing to express my interest in the software engineer
                role, with a focus on front-end web development. With my strong
                background in creating innovative and user-friendly web
                applications, I am confident in my ability to make a valuable
                contribution to your team.
              </p>

              <p>
                I am particularly drawn to companies that strive to build
                exciting applications that help people to do things better and
                more securely, and solve real-world problems. I am eager to be
                part of a team that is making a positive impact on the world
                through technology.
              </p>

              <p>
                In my previous role, I was responsible for developing a project
                designed to book and manage wellness appointments. This project
                allowed me to demonstrate not only my technical skills, but also
                my ability to work effectively within a team and my commitment
                to delivering high-quality results.
              </p>
            </div>
            <div class="space-y-4">
              <p>
                I am a passionate developer with expertise in modern front-end
                technologies, including the <strong>VueJS</strong> ecosystem,
                including <strong>Nuxt</strong>, and popular CSS frameworks like
                <strong>Tailwind</strong> and <strong>Bulma</strong>. I am also
                experienced in backend technologies like
                <strong>Node.js</strong> and Python, and I am familiar with
                other related frameworks and tools that are essential for
                delivering high-quality solutions. My strong proficiency in
                these technologies allows me to develop innovative and
                user-friendly applications that meet the demands of today's
                market. Whether I am working on a complex project or
                collaborating with a team, I bring a level of technical skill
                and creativity that is unmatched.
              </p>

              <p>
                Thank you for considering my application. I look forward to the
                opportunity to discuss my qualifications and enthusiasm for the
                role.
              </p>

              <p>
                *Sincerely,<br />
                Alex Valle <sup>*chatGPT</sup>
              </p>
            </div>
          </article>
        </div>
      </section>
    </main>
    <footer class="wrapper">
      <div class="translate-y-6">
        <FitText viewBox="0 0 59 11" content="Valle" valueY="11" />
      </div>
    </footer>
  </div>
</template>

<script lang="ts" setup>
import FitText from "../components/FitText.vue";
</script>

<style scoped>
.wrapper {
  @apply container mx-auto max-w-2xl overflow-hidden;
}
</style>
