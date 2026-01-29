<script lang="ts">
    import { sections, type SectionID } from "./lib/app.context";
    import NeuralNetwork from "./lib/NeuralNetwork.svelte";
    import SectionAbout from "./lib/SectionAbout.svelte";
    import SectionSkills from "./lib/SectionSkills.svelte";
    import SectionExperience from "./lib/SectionExperience.svelte";
    import SectionContact from "./lib/SectionContact.svelte";
    import SectionTestimonials from "./lib/SectionTestimonials.svelte";
    import { onMount } from "svelte";
    import AppNavigation from "./lib/AppNavigation.svelte";

    let currentSection: SectionID = "top";

    function handleIntersection(entries: IntersectionObserverEntry[]) {
        const intersectingEntries = entries.filter(
            (entry) => entry.isIntersecting,
        );

        if (intersectingEntries.length > 0) {
            const mostVisibleEntry = intersectingEntries.reduce(
                (prev, current) =>
                    prev.intersectionRatio > current.intersectionRatio
                        ? prev
                        : current,
            );
            const id = mostVisibleEntry.target.id as SectionID;

            if (id !== currentSection) {
                currentSection = id;
            }
        }
    }

    function syncHashToState() {
        const hash = window.location.hash.substring(1) as SectionID;
        const isValidSection = sections.includes(hash);
        currentSection = isValidSection ? hash : "top";
    }

    onMount(() => {
        const observer = new IntersectionObserver(handleIntersection, {
            root: null,
            rootMargin: "0px",
            threshold: [0.4, 0.8],
        });

        sections.forEach((id) => {
            const section = document.getElementById(id);
            if (section) observer.observe(section);
        });

        window.addEventListener("hashchange", syncHashToState);
        syncHashToState();

        return () => {
            observer.disconnect();
            window.removeEventListener("hashchange", syncHashToState);
        };
    });

    $: if (typeof window !== "undefined" && currentSection) {
        const newHash = `#${currentSection}`;
        if (window.location.hash !== newHash) {
            history.replaceState(null, "", newHash);
        }
    }

    const blackBackground = [
        "font-size: 50px",
        "background-color: black",
        "color: white",
    ].join(" ;");

    const whiteBackground = [
        "font-size: 50px",
        "background-color: white",
        "color: black",
    ].join(" ;");

    console.log("%cHi! %cYou made it here!", blackBackground, whiteBackground);
    console.table({
        Role: "Senior Frontend Engineer",
        Expertise: ["React", "Vue", "TypeScript", "PCI Compliance"],
        Status: "Open to the right challenge",
        Coffee_Preference: "Dark Roast / Black",
    });
</script>

<div id="top" class="p-px md:grid md:grid-cols-2">
    <header
        class="md:h-auto md:relative flex items-center flex-1 justify-center"
    >
        <div class="relative z-10 text-center py-80 md:py-0">
            <h1 class="text-4xl font-display text-white">Alex Valle</h1>
            <span class="uppercase tracking-[8px] text-xs text-neon_ice"
                >Frontend developer</span
            >
        </div>
        <div class="inset-0 fixed md:absolute">
            <NeuralNetwork />
        </div>
    </header>
    <div class="wrapper relative z-10 bg-prussian_blue">
        <aside>
            <AppNavigation {currentSection} />
        </aside>
        <main>
            <SectionAbout />
            <SectionSkills />
            <SectionExperience />
            <SectionTestimonials />
            <SectionContact />
        </main>
    </div>
</div>
