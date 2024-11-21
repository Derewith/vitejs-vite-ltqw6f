<script>
  let isOpen = false;
  let showNewsletter = false;

  function toggleMenu() {
    isOpen = !isOpen;
  }

  function toggleNewsletter() {
    showNewsletter = !showNewsletter;
  }
</script>

<nav class="wrapper bg-brandbg">
  <div class="wrapper-inside">
    <div class="logo-ctn">
      <a href="/" class="logo-wrapper">
        <img src="public/logo.png" alt="logo" height="30" width="90" />
      </a>
    </div>
    <ul class="menu-ctn">
      <li class="menu-item">
        <a href="/who" target="_blank" rel="noopener noreferrer">Chi siamo</a>
      </li>
      <li>
        <div class="menu-divider"></div>
      </li>
    </ul>
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
  } transition-transform duration-300 ease-in-out w-64 bg-brandbg shadow-lg z-20 lg:hidden`}
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
    <li>
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
    </li>
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
    class="fixed inset-0 bg-black bg-opacity-50 z-10 lg:hidden"
    role="presentation"
    on:click={toggleMenu}
  ></div>
{/if}

{#if showNewsletter}
  <!-- svelte-ignore a11y-click-events-without-key -->
  <!-- svelte-ignore a11y-click-events-have-key-events -->
  <!-- svelte-ignore a11y-no-static-element-interactions -->
  <div class="modal-overlay" on:click={toggleNewsletter}>
    <div class="modal-content" on:click|stopPropagation>
      <button class="modal-close" on:click={toggleNewsletter}>✕</button>
      <div class="py-4 lg:py-8 px-2 lg:px-2">
        <div class="mx-auto max-w-screen-md sm:text-center">
          <h2
            class="inter-font mb-4 text-3xl tracking-tight font-extrabold text-gray-900 sm:text-4xl"
          >
            Iscriviti alla nostra newsletter
          </h2>
          <p
            class="mx-auto mb-8 max-w-2xl font-light text-gray-500 md:mb-12 sm:text-xl"
          >
            Per rimanere aggiornati sui progressi della roadmap, sugli annunci e
            sugli sconti esclusivi, non esitate a iscrivervi con la vostra
            e-mail.
          </p>
          <form action="#">
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
                  class="block p-3 pl-10 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 sm:rounded-none sm:rounded-l-lg focus:ring-primary-500 focus:border-primary-500"
                  placeholder="Inserisci la tua mail"
                  type="email"
                  id="email"
                  required
                />
              </div>
              <div>
                <button
                  type="submit"
                  class="py-3 px-5 w-full text-sm font-medium text-center text-black rounded-lg border cursor-pointer bg-primary-700 border-primary-600 sm:rounded-none sm:rounded-r-lg hover:bg-primary-800 focus:ring-4 focus:ring-primary-300"
                  >Iscriviti</button
                >
              </div>
            </div>
            <div
              class="mx-auto max-w-screen-sm text-sm text-left text-gray-500 newsletter-form-footer"
            >
              Abbiamo a cuore la protezione dei vostri dati. <a
                href="/privacy"
                class="font-medium text-primary-600 hover:underline"
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
  .wrapper {
    position: sticky;
    display: flex;
    top: 0px;
    -webkit-box-align: center;
    align-items: center;
    margin-bottom: 1.5rem;
    padding: 0px;
    z-index: 1100;
  }

  .wrapper-inside {
    display: flex;
    flex-wrap: wrap;
    -webkit-box-align: stretch;
    align-items: stretch;
    -webkit-box-pack: justify;
    justify-content: space-between;
    width: 100%;
    padding: 0px 20px;
    margin-right: auto;
    margin-left: auto;
  }

  .logo-ctn {
    display: block;
  }

  .logo-wrapper {
    display: inline-flex;
    margin: 0.7rem 0px;
    height: 30px;
    color: rgb(41, 4, 2);
    text-decoration: underline;
  }

  .menu-ctn {
    list-style: none;
    flex-direction: column;
    margin-left: auto;
    margin-bottom: 0px;
    padding-left: 0px;
    -webkit-box-align: center;
    align-items: center;
    display: none;
  }

  .menu-item,
  .menu-item a {
    color: rgb(41, 4, 2);
    text-decoration: none;
  }

  .menu-item {
    position: relative;
    display: block;
    font-size: 1rem;
    font-weight: 400;
    padding: 0.3rem 0.7rem;
  }

  .menu-divider {
    display: none;
    width: 1px;
    background-color: rgb(222, 222, 222);
    height: 25px;
    margin: 0.3rem 0.7rem;
  }

  .menu-btn {
    border: none;
    background: transparent;
    color: rgb(0, 0, 0);
    padding-inline: 1rem;
  }

  /* .menu-last {
    display: none;
  } */

  @media (prefers-reduced-motion: no-preference) {
    .wrapper {
      transition-property: transform, box-shadow;
      transition-duration: 200ms;
      transition-timing-function: ease-in-out;
    }
  }

  @media (min-width: 576px) {
    .wrapper-inside {
      width: 540px;
    }
  }
  @media (min-width: 768px) {
    .wrapper {
      padding: 0.5rem 1rem;
    }
    .wrapper-inside {
      width: 720px;
      padding-top: 0px;
      padding-bottom: 0px;
      padding-right: 15px;
      padding-left: 15px;
    }
  }
  @media (min-width: 992px) {
    .wrapper-inside {
      flex-wrap: nowrap;
      width: 960px;
    }
    .logo-ctn {
      display: block;
      align-self: center;
      margin-inline-start: 1rem;
    }
    .menu-ctn {
      flex-direction: row;
      -webkit-box-align: center;
      align-items: center;
      display: flex;
    }
    .menu-divider {
      display: block;
    }
    .menu-last {
      display: block;
      align-self: center;
      margin-inline-start: 1rem;
    }
    .menu-btn {
      display: none;
    }
  }
  @media (min-width: 1200px) {
    .wrapper-inside {
      width: 1140px;
    }
    .menu-item {
      padding: 0.7rem 1rem;
    }
    .menu-divider {
      margin: 0.7rem 1rem;
    }
  }

  .modal-overlay {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1200;
  }

  .modal-content {
    background: white;
    padding: 1.4rem;
    border-radius: 0.5rem;
    position: relative;
    max-width: 90%;
    max-height: 90vh;
    overflow-y: auto;
  }

  .modal-close {
    position: absolute;
    top: 1rem;
    right: 1rem;
    border: none;
    background: transparent;
    font-size: 1.5rem;
    cursor: pointer;
  }
</style>
