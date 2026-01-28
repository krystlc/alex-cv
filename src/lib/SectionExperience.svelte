<script lang="ts">
    import SectionTitle from "./SectionTitle.svelte";

    const exp = [
        {
            title: "SuperSonic POS | Senior Software Engineer",
            href: "https://www.linkedin.com/company/supersonic-pos",
            items: [
                "Architecture & Microservices: Architect and deliver end-to-end features within a high-stakes microservice ecosystem, leveraging React SPAs and GraphQL servers for real-time POS operations.",

                "Fintech & Compliance: Spearheaded the total revamp of authentication protocols to meet strict PCI compliance standards, ensuring secure multi-device transactions.",

                "Mobile Ecosystem: Develop and maintain cross-platform mobile applications using React Native (Expo), unifying the user experience across handheld and desktop POS terminals.",

                "Feature Engineering: Integrated complex 3rd-party delivery services and built internal analytics engines to capture and visualize vendor advertising data.",
            ],
        },
        {
            title: "TheIncLab | Software Engineer",
            href: "https://www.linkedin.com/company/the-inc-lab",
            items: [
                "Mission-Critical Engineering: Delivered high-fidelity software solutions for the Department of Defense (DoD), utilizing JavaScript/TypeScript and React in a rigorous, process-driven environment.",

                '              Quality & Process: Championed Agile ceremonies and strict engineering standards, ensuring the delivery of "life-critical" software with zero-fail tolerance.',

                "             Mentorship: Acted as a technical lead for junior developers, raising the bar for code quality through rigorous peer reviews and architectural guidance.",
            ],
        },
        {
            title: "The WELL | Frontend Engineer",
            href: "https://www.linkedin.com/company/well1",
            items: [
                "System Architecture: Engineered a high-traffic booking system using Nuxt.js and PostgreSQL, integrating the Mindbody API to handle complex scheduling and real-time availability.",

                "Performance & Caching: Implemented Redis caching layers to provide instant search results and optimized Node.js cron jobs for automated multi-channel notifications (Instructor/Student).",

                "Content & Distribution: Developed a headless CMS architecture using Sanity.io for the editorial blog and built a white-labeled web component library on top of Nuxt to allow seamless platform integration.",

                "Leadership: Directed the frontend roadmap, prioritizing user-centric design and high-performance editorial experiences.",
            ],
        },
    ];
</script>

<section id="experience" class="card">
    <SectionTitle
        title="Experience"
        subtitle="With a decade in software engineering, I've honed my skills to deliver
      solutions that truly matter"
    />
    <div class="card-body">
        <dl>
            {#each exp as experience}
                <dt>
                    <a
                        href={experience.href}
                        target="_blank"
                        rel="noopener noreferrer">{experience.title}</a
                    >
                </dt>
                <dd>
                    <ul class=" list-disc list-outside pl-4 py-4">
                        {#each experience.items as item}
                            <li class="mb-4">{item}</li>
                        {/each}
                    </ul>
                </dd>
            {/each}
        </dl>
    </div>
</section>
