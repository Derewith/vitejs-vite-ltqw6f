<script>
  let isOpen = false;
  let showNewsletter = false;

  function toggleMenu() {
    isOpen = !isOpen;
  }

  function toggleNewsletter() {
    showNewsletter = !showNewsletter;
  }

  // add a function tho show automatically the newsletter modal after 15seconds

  setTimeout(() => {
    showNewsletter = true;
  }, 15000);

  let email = "";
  let subscriptionStatus = "";
  let isSubmitting = false;

  async function handleSubscribe(e) {
    e.preventDefault();
    if (!email || isSubmitting) return;

    isSubmitting = true;
    subscriptionStatus = "";

    try {
      const response = await fetch("public/subscribe-newsletter.php", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      });

      const data = await response.json();

      if (response.ok) {
        subscriptionStatus = "success";
        email = "";
      } else {
        subscriptionStatus = "error";
      }
    } catch (error) {
      subscriptionStatus = "error";
    } finally {
      isSubmitting = false;
    }
  }
</script>

<nav class="wrapper bg-brandbg">
  <div class="wrapper-inside">
    <div class="logo-ctn">
      <a href="/" class="logo-wrapper">
        <img src="public/logo.png" alt="logo" height="30" width="90" />
      </a>
    </div>
    <!-- <ul class="menu-ctn">
      <li class="menu-item">
        <a href="/who" rel="noopener noreferrer">Chi siamo</a>
      </li>
      <li>
        <div class="menu-divider"></div>
      </li>
    </ul> -->
    <div class="flex items-center gap-2">
      <div class="menu-last">
        <button class="mainbtn" on:click={toggleNewsletter}>Newsletter</button>
      </div>
      <button
        class="menu-btn"
        on:click={toggleMenu}
        type="button"
        aria-controls="navbar-default"
        aria-expanded={isOpen}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 14.088 13.249"
          width="1rem"
          height="1rem"
          ><g
            fill="none"
            stroke-linecap="round"
            stroke-width="1.5"
            stroke="currentColor"
            ><path d="M.75 12.499h12.588"></path><path d="M.75 6.624h12.588"
            ></path><path d="M.75.75h12.588"></path></g
          ></svg
        >
      </button>
    </div>
  </div>
</nav>
<div
  class={`fixed inset-y-0 right-0 transform ${
    isOpen ? "translate-x-0" : "translate-x-full"
  } transition-transform duration-300 ease-in-out w-64 bg-brandbg shadow-lg z-20`}
  id="navbar-default"
>
  <div class="p-4 border-b">
    <button
      class="float-right text-gray-600 hover:text-gray-900"
      on:click={toggleMenu}
    >
      ✕
    </button>
  </div>
  <ul class="font-medium flex flex-col p-4 mt-4" style="border-radius: 0px;">
    <li>
      <a href="/" class="block py-2 px-3 rounded" aria-current="page">Home</a>
    </li>
    <!-- <li>
      <a
        href="/who"
        class="block py-2 px-3 text-gray-900 rounded hover:border hover:border-brand"
        >Su di noi</a
      >
    </li>
    <li>
      <a
        href="/invest"
        class="block py-2 px-3 text-gray-900 rounded hover:border hover:border-brand"
        >Investi</a
      >
    </li>
    <li>
      <a
        href="/media"
        class="block py-2 px-3 text-gray-900 rounded hover:border hover:border-brand"
        >Media</a
      >
    </li>
    <li>
      <a
        href="/team"
        class="block py-2 px-3 text-gray-900 rounded hover:border hover:border-brand"
        >Team</a
      >
    </li> -->
    <li>
      <a
        href="/contact"
        class="block py-2 px-3 text-gray-900 rounded hover:border hover:border-brand"
        >Contattaci</a
      >
    </li>
  </ul>
</div>

{#if isOpen}
  <div
    class="fixed inset-0 bg-black bg-opacity-50 z-10"
    role="presentation"
    on:click={toggleMenu}
  ></div>
{/if}

{#if showNewsletter}
  <!-- svelte-ignore a11y-no-static-element-interactions -->
  <!-- svelte-ignore a11y-click-events-have-key-events -->
  <div class="modal-overlay" on:click={toggleNewsletter}>
    <div class="modal-content" on:click|stopPropagation>
      <button class="modal-close" on:click={toggleNewsletter}>✕</button>
      <div class="py-4 lg:py-8 px-2 lg:px-2">
        <div class="mx-auto max-w-screen-md sm:text-center">
          <div class="py-4">
            {#if subscriptionStatus === "success"}
              <p class="text-green-300 text-sm">
                Iscrizione completata con successo!
              </p>
            {:else if subscriptionStatus === "error"}
              <p class="text-red-300 text-sm">
                Si è verificato un errore. Riprova più tardi.
              </p>
            {/if}
          </div>
          <h2
            class="inter-font mb-4 text-3xl tracking-tight font-extrabold sm:text-4xl"
          >
            🌿 Unisciti a noi e fai la differenza! 🌿
          </h2>
          <div class="mx-auto mb-8 max-w-2xl font-light md:mb-12">
            <p><b class="font-bold">Accesso anticipato all’app WhyNot.</b></p>
            <p>
              <b class="font-bold">5 Punti Foresta </b>come benvenuto,
              equivalenti a 5 metri di scontrini risparmiati!
            </p>
            <p>
              Aggiornamenti su roadmap, novità e il nostro impegno per un futuro
              più sostenibile.
            </p>
            <b class="font-bold">📩 Iscriviti ora</b> e inizia a trasformare ogni
            tua spesa in un piccolo passo per salvare il pianeta.
          </div>
          <form on:submit={handleSubscribe}>
            <div
              class="items-center mx-auto mb-3 space-y-4 max-w-screen-sm sm:flex sm:space-y-0 space-x-2"
            >
              <div class="relative w-full">
                <label
                  for="email"
                  class="hidden mb-2 text-sm font-medium text-gray-900"
                  >Email</label
                >
                <div
                  class="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none"
                >
                  <svg
                    class="w-5 h-5 text-gray-500"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                    ><path
                      d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"
                    ></path><path
                      d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"
                    ></path></svg
                  >
                </div>
                <input
                  class="block p-3 pl-10 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 sm:rounded-none sm:rounded-l-lg focus:ring-orange-500 focus:border-orange-500"
                  placeholder="Inserisci la tua mail"
                  type="email"
                  id="email"
                  bind:value={email}
                  required
                />
              </div>
              <div>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  class="py-3 px-5 w-full text-sm font-medium text-center text-white rounded-lg border cursor-pointer bg-orange-700 border-orange-600 sm:rounded-none sm:rounded-r-lg hover:bg-orange-800 focus:ring-4 focus:ring-orange-300 disabled:opacity-50 disabled:cursor-not-allowed"
                  >{isSubmitting ? "Invio..." : "Iscriviti"}</button
                >
              </div>
            </div>
            <div
              class="mx-auto max-w-screen-sm text-sm text-left text-gray-500 newsletter-form-footer"
            >
              Abbiamo a cuore la protezione dei vostri dati. <a
                href="/privacy"
                class="font-medium text-orange-600 hover:underline"
                >Leggi la nostra Privacy Policy</a
              >.
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
{/if}

<style>
</style>
