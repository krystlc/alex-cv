<script>
    import { Icon } from "svelte-icons-pack";
    import { BsArrowReturnRight } from "svelte-icons-pack/bs";
</script>

<div class="flex-1 p-2 relative">
    <p>
        Excepturi aliquam eum vero dolorum accusamus quidem quibusdam nam,
        excepturi aliquam eum provident eius dolor dicta consequatur beatae.
        provident eius dolor dicta consequatur beatae.
    </p>
</div>
<form action="" class="relative z-10">
    <input
        type="text"
        class="w-full"
        autofocus
        placeholder="Ask me anything..."
    />
    <button type="submit" class="btn text-xl absolute inset-0 left-auto">
        <span class="sr-only">Submit</span>
        <Icon src={BsArrowReturnRight} />
    </button>
</form>
