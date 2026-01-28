<script lang="ts">
    import SectionTitle from "./SectionTitle.svelte";
    import { Icon } from "svelte-icons-pack";
    import {
        FaBrandsAndroid,
        FaBrandsAppStoreIos,
        FaBrandsCss3,
        FaBrandsHtml5,
        FaBrandsJs,
        FaBrandsNodeJs,
        FaBrandsReact,
        FaBrandsVuejs,
    } from "svelte-icons-pack/fa";
    import { SiSvelte } from "svelte-icons-pack/si";

    const skills = [
        {
            icons: [FaBrandsJs, FaBrandsHtml5, FaBrandsCss3],
            blurb: "The Core Fundamentals: Deep-rooted mastery of the vanilla web. I believe frameworks are only as strong as the underlying code; I prioritize clean, semantic HTML and modern CSS, leveraging TypeScript to ensure every line of JavaScript is type-safe, performant, and maintainable from the ground up.",
        },
        {
            icons: [FaBrandsReact, FaBrandsVuejs, SiSvelte],
            blurb: "Framework Agnosticism: Expertise across the big three: React, Vue/Nuxt, and Svelte. Whether architecting complex state management in a React SPA or building high-speed interfaces with SvelteKit, I select the optimal tool for the project to deliver high-end UI/UX without getting lost in framework jargon.",
        },
        {
            icons: [FaBrandsNodeJs, FaBrandsAppStoreIos, FaBrandsAndroid],
            blurb: "Runtime & Mobile Deployment: Extending the JavaScript ecosystem to the server and the pocket. I build robust backends using Node.js and Deno runtimes, while bridging the gap to mobile by deploying high-performance React Native applications directly to the iOS App Store and Google Play.",
        },
    ];
</script>

<section id="skills" class="card">
    <SectionTitle
        title="Tech Stack"
        subtitle="The technologies I use to bridge design and deployment."
    />

    <div class="card-body">
        <p>
            Modern tools for complex problems. I specialize in the React and Vue
            ecosystems, with extended proficiency in mobile development, cloud
            systems, and decentralized web technologies.
        </p>
        {#each skills as skill}
            <div class="grid grid-cols-3 py-8">
                <div class="col-span-1 text-3xl flex gap-2">
                    {#each skill.icons as icon}
                        <Icon src={icon} />
                    {/each}
                </div>
                <div class=" col-span-2">
                    <p>{skill.blurb}</p>
                </div>
            </div>
        {/each}
    </div>
</section>
