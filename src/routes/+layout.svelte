<script>
  // export const prerender = true;
  export const trailingSlash = "always";
  import "../css/app.css";
  import NavBar from "../components/NavBar.svelte";
  import Footer from "../components/Footer.svelte";

</script>

<div>
  <NavBar />
  <slot />
  <Footer />
</div>
