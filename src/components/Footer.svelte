<script>
  const currentYear = new Date().getFullYear();

  const links = {
    company: [
      { name: "Chi Siamo", href: "/who" },
      // { name: "Team", href: "/team" },
      { name: "Contattaci", href: "/contact" },
    ],
    legal: [
      { name: "Privacy Policy", href: "/privacy" },
      { name: "Termini e Condizioni", href: "/legal" },
    ],
    social: [
      {
        name: "Instagram",
        href: "https://www.instagram.com/whynotapp2024/",
        icon: "fab fa-instagram",
      },
      {
        name: "YouTube",
        href: "https://www.youtube.com/whynotapp2024/",
        icon: "fab fa-youtube",
      },
    ],
  };
</script>

<footer class="bg-[#e95f3b]">
  <div class="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
    <div class="py-16 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8">
      <!-- Brand Column -->
      <div class="space-y-8">
        <img
          src="public/logo.png"
          alt="WhyNot Logo"
          class="h-8 w-auto brightness-0 invert"
        />
        <p class="text-white/80 text-sm">
          Rivoluzionando il modo in cui gestiamo gli scontrini, un passo alla
          volta verso un futuro più sostenibile.
        </p>
        <div class="flex space-x-4">
          {#each links.social as { href, icon }}
            <a
              {href}
              target="_blank"
              rel="noopener noreferrer"
              class="text-white hover:text-white/80 text-2xl transition-colors"
            >
              <i class={icon}></i>
            </a>
          {/each}
        </div>
      </div>

      <!-- Links Columns -->
      <div class="space-y-4">
        <h3 class="text-white font-semibold uppercase tracking-wider text-sm">
          Azienda
        </h3>
        <ul class="space-y-3">
          {#each links.company as { name, href }}
            <li>
              <a
                {href}
                class="text-white/80 hover:text-white text-sm transition-colors"
              >
                {name}
              </a>
            </li>
          {/each}
        </ul>
      </div>

      <div class="space-y-4">
        <h3 class="text-white font-semibold uppercase tracking-wider text-sm">
          Legale
        </h3>
        <ul class="space-y-3">
          {#each links.legal as { name, href }}
            <li>
              <a
                {href}
                class="text-white/80 hover:text-white text-sm transition-colors"
              >
                {name}
              </a>
            </li>
          {/each}
        </ul>
      </div>

    </div>

    <!-- Bottom Bar -->
    <div class="border-t border-white/10 py-8">
      <div class="text-center sm:flex sm:justify-between sm:text-left">
        <p class="text-white/60 text-sm">
          © {currentYear} WhyNot. Tutti i diritti riservati.
        </p>
        <p class="text-white/60 text-sm mt-2 sm:mt-0">
          whynotapp.it - Via dei Pupi, 1 (VE) - 30172
        </p>
      </div>
    </div>
  </div>
</footer>
