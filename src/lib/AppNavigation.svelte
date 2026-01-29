<script lang="ts">
    import { Icon } from "svelte-icons-pack";
    import type { SectionID } from "./app.context";
    import { BsGithub, BsLinkedin } from "svelte-icons-pack/bs";
    import { FaSolidChevronRight } from "svelte-icons-pack/fa";

    export let currentSection: string | null;

    const navItems: { label: string; value: SectionID }[] = [
        {
            label: "About",
            value: "about",
        },
        {
            label: "Skills",
            value: "skills",
        },
        {
            label: "Experience",
            value: "experience",
        },
        {
            label: "Testimonials",
            value: "testimonials",
        },
        {
            label: "Contact",
            value: "contact",
        },
    ];
</script>

<nav class="menu">
    <ul class="space-y-4 mb-4">
        {#each navItems as item}
            <li>
                <a
                    href={`#${item.value}`}
                    class="relative group"
                    class:text-tropical_teal={item.value === currentSection}
                >
                    <span>{item.label}</span>
                    <span
                        class="absolute -bottom-2 -right-0 opacity-0 transition-all group-hover:translate-x-4 group-hover:rotate-45 group-hover:opacity-100"
                        class:translate-x-4={item.value === currentSection}
                        class:opacity-100={item.value === currentSection}
                        class:rotate-45={item.value === currentSection}
                    >
                        <Icon src={FaSolidChevronRight} /></span
                    >
                </a>
            </li>
        {/each}
    </ul>
    <div class="flex gap-4 text-2xl justify-end">
        <a
            href="https://www.linkedin.com/in/alexv/"
            class="hover:text-tropical_teal transition-colors"
            ><Icon src={BsLinkedin} /><span class="sr-only">Linkedin</span></a
        >
        <a
            href="https://github.com/krystlc"
            class="hover:text-tropical_teal transition-colors"
            ><Icon src={BsGithub} /><span class="sr-only">Github</span></a
        >
    </div>
</nav>
