<template>
  <div class="sm:max-w-screen-lg mx-auto sm:flex justify-end relative">
    <div class="overflow-hidden sm:h-screen sm:sticky top-0">
      <div class="sm:-rotate-90 origin-right h-12 sm:h-auto">
        <FitText viewBox="0 0 115 40" content="Alex Valle" valueY="11" />
      </div>
    </div>
    <div
      class="bg-amber-100 text-black sm:w-4/5 min-h-screen sm:border-l border-black print:grid grid-cols-10 gap-8"
    >
      <header
        class="grid sm:grid-cols-2 print:flex gap-8 px-4 py-8 sm:p-8 print:col-span-6 print:p-0"
      >
        <picture class="block print:shrink-0">
          <img
            src="/alex.jpg"
            alt="Alex Valle"
            class="object-cover h-full w-48 sm:w-full mx-auto print:h-32 print:w-32"
          />
        </picture>
        <div class="space-y-2 sm:space-y-8">
          <div class="text-2xl space-x-4 print:hidden">
            <a
              href="https://www.linkedin.com/in/alexv/"
              target="_blank"
              rel="noopener noreferrer"
              ><i class="lni lni-linkedin-original"></i
            ></a>
            <a href="https://github.com/krystlc" target="_blank" rel="noopener noreferrer"
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
          <h1 class="text-4xl sm:text-6xl print:hidden">Hello!</h1>
          <div class="space-y-4">
            <p>
              I'm a skilled developer with a passion for creating high-quality,
              user-friendly websites. With years of experience in HTML, CSS, JavaScript
              and more, I'm ready to bring your project to life.
            </p>
            <p>
              Explore my skills and experience, and let's work together to create
              something great.
            </p>
            <p class="print:hidden">
              <a href="#/cover">
                Read cover letter <i class="lni lni-arrow-top-right"></i
              ></a>
            </p>
          </div>
        </div>
      </header>
      <aside
        class="bg-black text-white p-4 sm:px-8 flex flex-col sm:flex-row gap-y-1 gap-x-8 print:col-span-4 print:text-black"
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
      <main
        class="px-4 py-8 sm:px-8 overflow-hidden print:col-span-10 grid sm:grid-cols-2 gap-8"
      >
        <div>
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
                  <ul class="list-outside px-4 pb-8 space-y-2">
                    <li v-for="li in item.list" class="list-disc pl-2">
                      {{ li }}
                    </li>
                  </ul>
                </details>
              </li>
            </ul>
          </section>
        </div>
        <div class="space-y-8">
          <section class="space-y-4">
            <h2>Profile</h2>
            <p>
              I started my journey as a freelance web developer while traveling and have
              since elevated my skills in the tech-driven environment of New York City.
              With a focus on frontend development, I've recently delved into the exciting
              world of web3 and smart contracts.
            </p>
            <p>
              In my free time, I enjoy challenging myself through rock climbing and cross
              country cycling. Looking to bring my passion for web development and my
              diverse interests to new and exciting projects.
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
        </div>
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
import FitText from '../components/FitText.vue'

interface BaseItem {
  heading: string
  subheading: string
}

interface IEducation extends BaseItem {
  year: string
}

interface IWorkExperience extends BaseItem {
  year: string
  list?: string[]
}

const educationItems: IEducation[] = [
  {
    year: '2004-2006',
    heading: 'University of South Florida',
    subheading: 'Tampa, FL'
  },
  {
    year: '2003',
    heading: 'Freedom High School',
    subheading: 'Tampa, FL'
  }
]

const workExperienceItems: IWorkExperience[] = [
  {
    list: [
      'Led front end development of bespoke online booking experience for THE WELL increasing the volume of online booking to 50% of total bookings.',
      'Spearhead end to end development of THE WELL editorial blog re-design, leading it to be the number traffic generator to the website.',
      'Managed continuous enhancements and maintenance of the-well.com e-commerce and content pages.',
      'Collaborated cross functionally with back end engineers, UX/UI designers, product managers, brand/marketing, and operations to launch new features'
    ],
    year: '2021-2023',
    heading: 'THE WELL',
    subheading:
      'Developed and maintained e-commerce website and editorial blog. Created standalone booking management application. Skilled in full-stack development and project management.'
  },
  // {
  //   list: [
  //     'Led front end development of bespoke online booking experience for THE WELL increasing the volume of online booking to 50% of total bookings.',
  //     'Spearhead end to end development of THE WELL editorial blog re-design, leading it to be the number traffic generator to the website.',
  //     'Managed continuous enhancements and maintenance of the-well.com e-commerce and content pages.',
  //     'Collaborated cross functionally with back end engineers, UX/UI designers, product managers, brand/marketing, and operations to launch new features'
  //   ],
  //   year: '2022',
  //   heading: 'Decentralized Marketplace',
  //   subheading:
  //     'Developed and maintained e-commerce website and editorial blog. Created standalone booking management application. Skilled in full-stack development and project management.'
  // },
  // {
  //   list: [
  //     'Led front end development of bespoke online booking experience for THE WELL increasing the volume of online booking to 50% of total bookings.',
  //     'Spearhead end to end development of THE WELL editorial blog re-design, leading it to be the number traffic generator to the website.',
  //     'Managed continuous enhancements and maintenance of the-well.com e-commerce and content pages.',
  //     'Collaborated cross functionally with back end engineers, UX/UI designers, product managers, brand/marketing, and operations to launch new features'
  //   ],
  //   year: '2021',
  //   heading: 'NFT Rarirty Scanner',
  //   subheading:
  //     'Developed and maintained e-commerce website and editorial blog. Created standalone booking management application. Skilled in full-stack development and project management.'
  // },
  {
    list: [
      'Led front end development of bespoke online booking experience for THE WELL increasing the volume of online booking to 50% of total bookings.',
      'Spearhead end to end development of THE WELL editorial blog re-design, leading it to be the number traffic generator to the website.',
      'Managed continuous enhancements and maintenance of the-well.com e-commerce and content pages.',
      'Collaborated cross functionally with back end engineers, UX/UI designers, product managers, brand/marketing, and operations to launch new features'
    ],
    year: '2019-2021',
    heading: 'Spirion',
    subheading:
      'Assisted in developing information security web app. Helped monitor devices to prevent data leaks. Experienced in web development and information security.'
  },
  {
    year: '2015-2019',
    heading: 'VICE Media',
    subheading:
      'Developed internal micro web apps, including data visualizations. Skilled in front-end development and data analysis.'
  }
]

const skillItems: BaseItem[] = [
  {
    heading: 'Frameworks',
    subheading: 'Vue, Nuxt, Graphql, Tailwind, Material, Bulma, etc.'
  },
  {
    heading: 'Platforms',
    subheading:
      'AWS, GCP, Netlify, Vercel, Terraform, Sendgrid, Stripe, Moralis, IPFS, Alchemy, etc.'
  },
  {
    heading: 'Web3',
    subheading: 'Ether.js, OpenZeppelin, Manifold, Metamask, etc.'
  },
  {
    heading: 'Gaming',
    subheading: 'Super Smash Bros Ultimate, Dark Souls III, Elden Ring'
  }
]
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
