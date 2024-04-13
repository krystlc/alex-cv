<script>
  import viewport from "../hooks/useViewportAction";
  import SectionTitle from "./SectionTitle.svelte";
  import banner from "/banner.jpeg";

  let isBlockViewed = false;
</script>

<div>
  <div class="space-y-8 mb-8">
    <SectionTitle
      title="About"
      subtitle="Driven self-taught software engineer"
    />
    <p>
      As a self-taught software engineer, my journey has been one of humble
      determination and continuous growth. Initially driven by curiosity, I
      embarked on the path of coding, immersing myself in learning resources and
      hands-on projects.
    </p>
  </div>
  <div class="h-48">
    <img
      src={banner}
      alt="Alex Valle"
      class=" object-cover h-full block duration-1000 opacity-0"
      class:-translate-x-4={isBlockViewed}
      class:opacity-100={isBlockViewed}
      use:viewport
      on:enterViewport={() => (isBlockViewed = true)}
      on:exitViewport={() => (isBlockViewed = false)}
    />
  </div>
  <div
    class="bg-rose-500 text-white p-8 md:p-16 md:float-right md:-mt-16 md:ml-8 md:mb-8 z-10 relative"
  >
    <div class=" space-y-8">
      <div>
        <p class=" uppercase tracking-widest">Email</p>
        <p>
          <a href="mailto:hello@donotsend.com">alex.valle@gmail.com</a>
        </p>
      </div>
      <div>
        <p class=" uppercase tracking-widest">Role</p>
        <p>Software Engineer</p>
      </div>
    </div>
  </div>
  <div class="space-y-4 pt-8">
    <p>
      Through persistent effort and a thirst for knowledge, I've developed solid
      proficiency in various programming languages, frameworks, and
      technologies. My approach to challenges is grounded in pragmatism and a
      commitment to finding effective solutions rather than pursuing perfection.
    </p>
    <p>
      Collaboration is at the heart of my work ethic. I thrive in team
      environments, valuing the opportunity to learn from others and contribute
      my skills to collective efforts. Effective communication and adaptability
      are key strengths that enable me to seamlessly integrate into diverse
      teams and drive successful outcomes.
    </p>
    <p>
      As I continue to evolve as a developer, I remain steadfast in my belief in
      the power of continuous learning and improvement. I am eager to bring my
      skills and collaborative spirit to a team where I can make meaningful
      contributions and grow alongside talented individuals.
    </p>
    <p class="text-right font-mono">— Alex Valle</p>
  </div>
</div>
