<script lang="ts">
    import { onMount } from "svelte";
    import { sections, type SectionID } from "./lib/app.context";
    import { Icon } from "svelte-icons-pack";
    import {
        FaBrandsAndroid,
        FaBrandsAppStoreIos,
        FaBrandsAws,
        FaBrandsCss3,
        FaBrandsDocker,
        FaBrandsEthereum,
        FaBrandsHtml5,
        FaBrandsJs,
        FaBrandsLinux,
        FaBrandsNodeJs,
        FaBrandsReact,
        FaBrandsVuejs,
        FaMoon,
        FaSolidGlasses,
    } from "svelte-icons-pack/fa";
    import NeuralNetwork from "./lib/NeuralNetwork.svelte";
    import ChatForm from "./lib/ChatForm.svelte";
    import Tooltip from "./lib/Tooltip.svelte";

    const brands = [
        FaBrandsJs,
        FaBrandsHtml5,
        FaBrandsCss3,
        FaBrandsReact,
        FaBrandsVuejs,
        FaBrandsNodeJs,
        FaBrandsAppStoreIos,
        FaBrandsAndroid,
        FaBrandsDocker,
        FaBrandsLinux,
        FaBrandsAws,
        FaBrandsEthereum,
    ];

    let theme: "hifi" | "lofi";

    onMount(() => {
        // Set initial state from the DOM, which is set by the script in index.html
        theme =
            document.documentElement.dataset.theme === "lofi" ? "lofi" : "hifi";
    });

    const toggleTheme = () => {
        if (theme === "hifi") {
            theme = "lofi";
            document.documentElement.dataset.theme = "lofi";
            localStorage.setItem("theme", "lofi");
        } else {
            theme = "hifi";
            document.documentElement.removeAttribute("data-theme");
            localStorage.setItem("theme", "hifi");
        }
    };
</script>

<div
    class="flex flex-col gap-1 -outline-offset-4 outline-theme-border-primary/75 outline-double outline-4 p-2 md:flex-row md:h-screen md:-outline-offset-8"
>
    <div class="card column">
        <div class="card text-center flex justify-between">
            <div class="flex items-center px-2 gap-2">
                <h1 class="tracking-widest font-bold text-sm">Alex Valle</h1>
                <h2
                    class="h-full flex items-center bg-theme-bg-secondary/10 px-2 rounded-sm"
                >
                    Software Engineer
                </h2>
            </div>
            <button
                on:click={toggleTheme}
                class="btn flex items-center justify-center"
            >
                {#if theme === "hifi"}
                    <Icon src={FaSolidGlasses} size={16} />
                {:else}
                    <Icon src={FaMoon} size={16} />
                {/if}
            </button>
        </div>
        <div class="card md:max-h-48 md:overflow-auto">
            <h2 class="card-title">Bio</h2>
            <div class="card-body">
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Nihil ducimus dolore doloremque doloribus, odio distinctio a
                    eius consequatur vel voluptates amet nobis earum culpa, ab
                    autem, minus est? Dolore, nam.
                </p>
                <ul class="list-decimal list-outside px-6">
                    <li>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    </li>
                    <li>
                        Blanditiis eius possimus labore odit inventore molestiae
                        molestias necessitatibus, explicabo, neque debitis
                        error?
                    </li>
                    <li>
                        Quis, facilis quisquam. Vel accusamus quasi tempora hic
                        sit.
                    </li>
                </ul>
            </div>
        </div>
        <div class="card md:max-h-64 md:overflow-auto">
            <h2 class="card-title">History</h2>
            <div class="card-body">
                <dl>
                    <dt>employer 1</dt>
                    <dd>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Dolor voluptatibus ducimus incidunt sapiente hic
                        similique voluptatum nostrum, nemo doloremque
                        temporibus? Repellat qui modi, impedit eius molestias
                        fugit inventore hic ipsum.
                    </dd>
                    <dt>employer 1</dt>
                    <dd>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Dolor voluptatibus ducimus incidunt sapiente hic
                        similique voluptatum nostrum, nemo doloremque
                        temporibus? Repellat qui modi, impedit eius molestias
                        fugit inventore hic ipsum.
                    </dd>
                    <dt>employer 1</dt>
                    <dd>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Dolor voluptatibus ducimus incidunt sapiente hic
                        similique voluptatum nostrum, nemo doloremque
                        temporibus? Repellat qui modi, impedit eius molestias
                        fugit inventore hic ipsum.
                    </dd>
                </dl>
            </div>
        </div>
        <div class="card md:flex-1">
            <h2 class="card-title">contact</h2>
            <div class="card-body">
                <p>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Ipsum sit ad veniam praesentium placeat quidem nihil labore
                    provident, fugit iusto, ipsam ducimus nobis sed non aliquam
                    veritatis totam culpa commodi.
                </p>
            </div>
        </div>
    </div>
    <div class="card column md:flex-1">
        <div class="card hidden md:block h-48 overflow-hidden">
            <h2 class="card-title">Network Status</h2>
            <div><NeuralNetwork /></div>
        </div>
        <div class="card flex flex-col flex-1">
            <h2 class="card-title">Chat</h2>
            <div class="flex-1 flex flex-col p-1">
                <ChatForm />
            </div>
        </div>
    </div>
    <div class="card column">
        <div class="card md:max-h-48 md:overflow-auto">
            <h2 class="card-title">Website stats</h2>
            <div class="card-body">
                <table class="table w-full">
                    <tbody>
                        {#each Array(5)
                            .fill(null)
                            .map((_, index) => index) as row}
                            <tr
                                class=" border-b border-theme-bg-secondary border-dashed last:border-b-0"
                            >
                                <td class="py-1">Name of something ({row})</td>
                                <td
                                    class="pl-4 border-l border-dashed border-theme-bg-secondary"
                                    >234</td
                                >
                            </tr>
                        {/each}
                    </tbody>
                </table>
            </div>
        </div>
        <div class="card md:max-h-48 md:overflow-auto">
            <h2 class="card-title">Visitor Data</h2>
            <div class="card-body">
                <ul>
                    <li>
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. Iusto sapiente illo omnis accusantium ab
                        architecto recusandae amet, maiores porro dolorum
                        delectus voluptas harum perspiciatis officiis obcaecati
                        ratione, minima ullam. Omnis!
                    </li>
                    <li>
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. Iusto sapiente illo omnis accusantium ab
                        architecto recusandae amet, maiores porro dolorum
                        delectus voluptas harum perspiciatis officiis obcaecati
                        ratione, minima ullam. Omnis!
                    </li>
                    <li>
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. Iusto sapiente illo omnis accusantium ab
                        architecto recusandae amet, maiores porro dolorum
                        delectus voluptas harum perspiciatis officiis obcaecati
                        ratione, minima ullam. Omnis!
                    </li>
                </ul>
            </div>
        </div>
        <div class="card flex-1 md:overflow-auto">
            <h2 class="card-title">Latest commits</h2>
            <div class="card-body">
                <ul>
                    <li>
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. Iusto sapiente illo omnis accusantium ab
                        architecto recusandae amet, maiores porro dolorum
                        delectus voluptas harum perspiciatis officiis obcaecati
                        ratione, minima ullam. Omnis!
                    </li>
                    <li>
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. Iusto sapiente illo omnis accusantium ab
                        architecto recusandae amet, maiores porro dolorum
                        delectus voluptas harum perspiciatis officiis obcaecati
                        ratione, minima ullam. Omnis!
                    </li>
                    <li>
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. Iusto sapiente illo omnis accusantium ab
                        architecto recusandae amet, maiores porro dolorum
                        delectus voluptas harum perspiciatis officiis obcaecati
                        ratione, minima ullam. Omnis!
                    </li>
                </ul>
            </div>
        </div>
        <div class="card">
            <h2 class="card-title">Tech stack</h2>
            <div class="grid grid-cols-4 gap-1 text-xl text-center">
                {#each brands as brand}
                    <Tooltip tooltipText="cool beans">
                        <button
                            class="btn h-8 w-full flex items-center justify-center"
                        >
                            <Icon src={brand} />
                        </button>
                    </Tooltip>
                {/each}
            </div>
        </div>
        <div class="card">
            <h2 class="card-title">Credits</h2>
            <div class="card-body">
                <p>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Iusto rem laborum sequi odio eligendi accusantium
                    voluptates, porro quaerat vero sed illum incidunt nulla
                    recusandae similique nobis maiores commodi nisi asperiores!
                </p>
            </div>
        </div>
    </div>
</div>
