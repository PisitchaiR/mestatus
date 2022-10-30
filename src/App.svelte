<script>
  import { InstagramIcon, FacebookIcon, GithubIcon } from "svelte-feather-icons";
</script>

<main class="bg-primary w-full min-h-screen flex items-center justify-center font-kanit">
  <div class="rounded-md border shadow-flate p-32 text-7xl flex flex-col justify-center items-center relative duration-1000">
    <div class="flex gap-x-5 absolute top-5 left-5">
      <div class="w-6 h-6 bg-red-600 hover:bg-red-600/60 rounded-full" />
      <div class="w-6 h-6 bg-yellow-400 hover:bg-yellow-400/60 rounded-full" />
      <div class="w-6 h-6 bg-green-600 hover:bg-green-600/60 rounded-full" />
    </div>
    <p>Pisitchai Thun</p>
    <p class="flex gap-x-10 mt-16">
      <a href="https://www.instagram.com/pisitchai_thun/">
        <InstagramIcon size="50" class="rounded-xl bg-primary shadow-flate p-2 w-20 h-20 hover:shadow-pressed" />
      </a>
      <a href="https://www.facebook.com/mctplo.admplo/">
        <FacebookIcon size="50" class="rounded-xl bg-primary shadow-flate p-2 w-20 h-20 hover:shadow-pressed" />
      </a>

      <a href="https://github.com/PisitchaiR">
        <GithubIcon size="50" class="rounded-xl bg-primary shadow-flate p-2 w-20 h-20 hover:shadow-pressed" />
      </a>
    </p>
  </div>
</main>
