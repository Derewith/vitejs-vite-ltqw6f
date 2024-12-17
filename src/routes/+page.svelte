<script lang="ts">
  import { translations } from "../i18n/translations";
  import { onMount } from "svelte";

  import Swiper from "swiper";
  import { Autoplay, Navigation, Pagination } from "swiper/modules";
  import "swiper/css";
  import "swiper/css/navigation";
  import "swiper/css/pagination";

  let currentLang = "it";
  let t = translations[currentLang];

  const faqItems = [
    {
      icon: "fa-leaf",
      key: "whatIs",
    },
    {
      icon: "fa-people-arrows",
      key: "howWorks",
    },
    {
      icon: "fa-tree",
      key: "forestPoints",
    },
    {
      icon: "fa-id-card",
      key: "howToStart",
    },
    {
      icon: "fa-user-shield",
      key: "safeData",
    },
    {
      icon: "fa-store",
      key: "whereToUse",
    },
    {
      icon: "fa-dumbbell",
      key: "howToSee",
    },
    {
      icon: "fa-receipt",
      key: "advantages",
    },
  ];

  onMount(() => {
    new Swiper(".swiper", {
      modules: [Navigation, Pagination],
      slidesPerView: "auto",
      spaceBetween: 24,
      grabCursor: true,
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
      loop: true,
      breakpoints: {
        640: {
          slidesPerView: 2,
        },
        1024: {
          slidesPerView: 3,
        },
      },
    });

    new Swiper(".swiper-2", {
      modules: [Autoplay],
      slidesPerView: 1,
      loop: true,
      grabCursor: true,
      autoplay: {
        delay: 5000,
        disableOnInteraction: false,
        pauseOnMouseEnter: false,
        stopOnLastSlide: false,
        waitForTransition: false,
      },
    });
  });
</script>

<div class="overflow-hidden">
  <div class="relative">
    <div class="swiper-2">
      <div class="swiper-wrapper">
        <div class="swiper-slide">
          <section class="bg-brandbg wrapper-inside">
            <div
              class="flex flex-col md:flex-row gap-4 justify-center items-center md:justify-between w-full"
            >
              <div class="max-w-[500px]">
                <h1
                  class="inter-font max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl"
                >
                  Il tuo scontrino digitale
                </h1>
                <p
                  class="max-w-2xl mb-6 font-light lg:mb-8 md:text-lg lg:text-xl"
                >
                  Ci pensi mai a quanti scontrini vengano stampati ogni giorno
                  nel mondo? Quanti ne servirebbero realmente?
                </p>
                <!-- <a
                  href="/support"
                  class="inter-font inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-gray-900 border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 w-full md:w-auto bg-white"
                >
                  Sostieni questo progetto
                </a> -->
              </div>
              <div class="">
                <img
                  src="./public/main-2.png"
                  alt="mockup"
                  style="height: 360px;object-fit:contain;"
                />
              </div>
            </div>
          </section>
        </div>
        <div class="swiper-slide">
          <section class="bg-brandbg wrapper-inside">
            <div
              class="flex flex-col md:flex-row gap-4 justify-center items-center md:justify-between w-full"
            >
              <div class="max-w-[500px]">
                <h1
                  class="inter-font max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl"
                >
                  Facendo la spesa con WhyNot guadagnerai punti foresta!
                </h1>
                <p class="mb-5 font-light sm:text-xl">
                  Potrai utilizzarli per sconti e iniziative. Ogni punto foresta
                  equivale a circa 1m di scontrini risparmiati solo e soltanto
                  grazie al tuo contributo.
                </p>
                <!-- <a
                  href="/support"
                  class="inter-font inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-gray-900 border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 w-full md:w-auto bg-white"
                >
                  Sostieni questo progetto
                </a> -->
              </div>

              <div class="">
                <img
                  src="./public/main.png"
                  alt="mockup"
                  style="height: 360px;object-fit:contain;"
                />
              </div>
            </div>
          </section>
        </div>
        <div class="swiper-slide">
          <section class="bg-brandbg wrapper-inside">
            <div
              class="flex flex-col md:flex-row gap-4 justify-between items-center md:justify-between w-full"
            >
              <div class="max-w-[500px]">
                <h1
                  class="inter-font max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl"
                >
                  Ogni giorno vengono sprecati chilometri di carta
                </h1>
                <p class="mb-5 font-light sm:text-xl">
                  Gran parte dei quali sono scontrini di bar o supermercati,
                  presi in mano e subito dopo gettati nel cestino.
                </p>
                <!-- <a
                  href="/support"
                  class="inter-font inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-gray-900 border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 w-full md:w-auto bg-white"
                >
                  Sostieni questo progetto
                </a> -->
              </div>
              <div class="">
                <img
                  src="./public/main-3.png"
                  alt="mockup"
                  style="height: 360px;object-fit:contain;"
                />
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  </div>
</div>

<section class="my-6">
  <div class="mx-auto max-w-screen-xl">
    <div class="relative">
      <!-- Swiper Container -->
      <div class="swiper wrapper-inside">
        <!-- <div class="swiper-buttons pb-8 justify-self-end">
          <div class="swiper-button-prev !text-black"></div>
          <div class="swiper-button-next !text-black"></div>
        </div> -->
        <div class="swiper-wrapper">
          {#each faqItems as item}
            <div class="swiper-slide" style="width: auto">
              <div
                class="flex flex-col h-full p-6 bg-white border border-gray-200 transition-colors duration-250"
              >
                <div class="mb-12">
                  <div class="inline-flex items-center bg-white">
                    <div class="w-12 h-12 flex items-center justify-center">
                      <i class="fa {item.icon} text-2xl"></i>
                    </div>
                  </div>
                </div>

                <div class="mt-auto w-full">
                  <span
                    class="inline-block bg-gray-200 text-black text-xs px-2 py-1 mb-3"
                    >FAQ</span
                  >
                  <h3 class="text-xl mb-2">{t.faq[item.key].title}</h3>
                  <p class="text-gray-500 text-sm mb-4">
                    {t.faq[item.key].description}
                  </p>
                  <!-- <span class="inline-flex items-center text-sm">
                    {t.cta} <i class="fa fa-chevron-right ml-1"></i>
                  </span> -->
                </div>
              </div>
            </div>
          {/each}
        </div>

        <!-- Pagination -->
      </div>
      <div class="swiper-pagination !bottom-[-30px]"></div>
    </div>
  </div>
</section>

<section class="bg-brandbg">
  <div class="max-w-screen-xl px-4 py-8 mx-auto text-center lg:py-16 lg:px-6">
    <div class="mx-auto max-w-screen-md sm:text-center">
      <h2
        class="inter-font mb-4 text-3xl tracking-tight font-extrabold sm:text-4xl"
      >
        🌿 Unisciti a noi e fai la differenza! 🌿
      </h2>
      <div class="mx-auto mb-8 max-w-2xl font-light md:mb-12">
        <p><b class="font-bold">Accesso anticipato all’app WhyNot.</b></p>
        <p>
          <b class="font-bold">5 Punti Foresta </b>come benvenuto, equivalenti a
          5 metri di scontrini risparmiati!
        </p>
        <p>
          Aggiornamenti su roadmap, novità e il nostro impegno per un futuro più
          sostenibile.
        </p>
        <b class="font-bold">📩 Iscriviti ora</b> e inizia a trasformare ogni tua
        spesa in un piccolo passo per salvare il pianeta.
      </div>
      <form action="#">
        <div
          class="items-center mx-auto mb-3 space-y-4 max-w-screen-sm sm:flex sm:space-y-0 space-x-2"
        >
          <div class="relative w-full">
            <label
              for="email"
              class="hidden mb-2 text-sm font-medium text-gray-900">Email</label
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
              class="py-3 px-5 w-full text-sm font-medium text-center text-black rounded-lg border cursor-pointer bg-white border-primary-600 sm:rounded-none sm:rounded-r-lg hover:bg-primary-800 focus:ring-4 focus:ring-primary-300"
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
</section>

<!-- <section class="bg-brandbg">
  <div class="max-w-screen-xl px-4 py-8 mx-auto text-center lg:py-16 lg:px-6">
    <figure class="max-w-screen-md mx-auto">
      <svg
        class="h-12 mx-auto mb-3 text-gray-400"
        viewBox="0 0 24 27"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M14.017 18L14.017 10.609C14.017 4.905 17.748 1.039 23 0L23.995 2.151C21.563 3.068 20 5.789 20 8H24V18H14.017ZM0 18V10.609C0 4.905 3.748 1.038 9 0L9.996 2.151C7.563 3.068 6 5.789 6 8H9.983L9.983 18L0 18Z"
          fill="currentColor"
        />
      </svg>
      <blockquote>
        <p class="text-2xl font-medium text-gray-900">
          "WhyNot è semplicemente rivoluzionario. Combina la comodità di un
          portafoglio digitale con un impegno concreto per l'ambiente. Dagli
          scontrini digitali ai Punti Foresta, ogni funzionalità è pensata per
          rendere i nostri acquisti quotidiani più sostenibili. La scelta
          perfetta per chi vuole fare la differenza con un semplice gesto."
        </p>
      </blockquote>
      <figcaption class="flex items-center justify-center mt-6 space-x-3">
        <img
          class="w-6 h-6 rounded-full"
          src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/michael-gouch.png"
          alt=""
        />
        <div class="flex items-center divide-x-2 divide-gray-500">
          <div class="pr-3 font-medium text-gray-900">Enrico di Franco</div>
          <div class="pl-3 text-sm font-light text-gray-500">CEO di WhyNot</div>
        </div>
      </figcaption>
    </figure>
  </div>
</section> -->

<style lang="postcss">
  :global(.swiper-button-next),
  :global(.swiper-button-prev) {
    @apply text-gray-800 hover:text-black transition-colors;
  }

  :global(.swiper-pagination-bullet) {
    @apply bg-gray-300 opacity-100;
  }

  :global(.swiper-pagination-bullet-active) {
    @apply bg-gray-800;
  }

  :global(.swiper-slide) {
    height: auto !important;
  }

  .swiper-buttons {
    display: flex;
    flex-direction: row;
  }

  .swiper-button-prev,
  .swiper-button-next {
    display: block !important;
    position: relative !important;
    right: unset !important;
    left: unset !important;
    margin: 0 !important;
    width: 30px;
    height: 30px;
  }

  .swiper-button-prev:after,
  .swiper-button-next:after {
    font-size: 25px !important;
  }
</style>
