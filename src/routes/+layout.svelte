<script>
  export const prerender = true;
  import NavBar from "../components/NavBar.svelte";
  import Footer from "../components/Footer.svelte";
</script>

<div style="background-color:#e95f3b">
  <NavBar />
  <slot />
  <Footer />
</div>
