<script>
    import {
        FaBrandsGithub,
        FaBrandsLinkedin,
        FaEnvelope,
    } from "svelte-icons-pack/fa";
    import SectionTitle from "./SectionTitle.svelte";
    import { Icon } from "svelte-icons-pack";

    const links = [
        {
            title: "Email",
            href: "mailto:alex.valle@gmail.com",
            icon: FaEnvelope,
        },
        {
            title: "LinkedIn",
            href: "https://www.linkedin.com/in/alexv",
            icon: FaBrandsLinkedin,
        },
        {
            title: "Github",
            href: "https://github.com/krystlc",
            icon: FaBrandsGithub,
        },
    ];
</script>

<section id="contact" class="card">
    <SectionTitle
        title="Contact"
        subtitle="Reach out to connect, collaborate, and create together"
    />
    <div class="card-body">
        <ul class="grid grid-cols-3 gap-1">
            {#each links as link}
                <li class="flex">
                    <a href={link.href} class="btn flex gap-2 w-full">
                        <Icon src={link.icon} size={24} />
                        <span>{link.title}</span>
                    </a>
                </li>
            {/each}
        </ul>
    </div>
</section>
