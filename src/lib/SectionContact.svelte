<script>
  import SectionTitle from "./SectionTitle.svelte";
</script>

<div>
  <section class="max-w-2xl space-y-8">
    <SectionTitle
      title="Contact"
      subtitle="Reach out to connect, collaborate, and create together"
    />
    <div class="grid md:grid-cols-2 gap-x-16">
      <p>
        <strong>Name:</strong> Alex Valle<br /><strong>Status:</strong>
        US Citizen<br /><strong>Location:</strong>
        Tampa, FL
      </p>
      <p class="overflow-hidden text-ellipsis">
        <strong>Clearance:</strong> Secret<br /><strong>Email:</strong>
        alex.valle@gmail.com<br /><strong>Languages:</strong>
        English, Español
      </p>
    </div>
  </section>
  <div class="py-8 md:py-16">
    <div>
      <a
        href="https://maps.app.goo.gl/gT2vDgTimcv8yVwm6"
        target="_blank"
        rel="nofollow"
        class="h-48 block"
      >
        <img
          src="/map.png"
          alt="Tampa, FL"
          class=" object-cover w-full h-full"
        />
      </a>
    </div>
  </div>
  <div class="max-w-3xl">
    <form class="space-y-4">
      <p>
        <span data-name="your-name"
          ><input
            placeholder="Name"
            value=""
            type="text"
            name="your-name"
            required
          /></span
        >
      </p>
      <p>
        <span data-name="your-email"
          ><input
            placeholder="Email"
            value=""
            type="email"
            name="your-email"
            required
          /></span
        >
      </p>
      <p>
        <span data-name="your-message">
          <textarea rows="4" placeholder="Message" name="your-message" required
          ></textarea>
        </span>
      </p>
      <p>
        <button type="submit">Send</button>
      </p>
    </form>
  </div>
</div>

<style scoped>
  form input,
  form textarea {
    @apply font-semibold border-b-2 border-black pb-2 w-full bg-transparent outline-none placeholder:text-black placeholder:uppercase placeholder:tracking-widest;
  }
  button {
    @apply uppercase font-semibold tracking-widest block p-4 w-full border-2 border-black hover:bg-indigo-200;
  }
</style>
