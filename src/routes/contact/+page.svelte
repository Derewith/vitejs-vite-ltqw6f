<script>
  let formData = {
    email: '',
    subject: '',
    message: ''
  };
  let sending = false;
  let success = false;
  let error = '';

  async function handleSubmit() {
    sending = true;
    error = '';
    success = false;

    try {
      const response = await fetch('public/send-email.php', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData)
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.error || 'Failed to send message');
      }

      success = true;
      formData = { email: '', subject: '', message: '' };
    } catch (err) {
      error = err.message;
    } finally {
      sending = false;
    }
  }
</script>

<section class="bg-brandbg">
  <div class="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
    <h2 class="mb-4 text-4xl tracking-tight font-extrabold text-center text-gray-900">
      Contattaci
    </h2>
    <p class="mb-8 lg:mb-16 font-light text-center text-gray-500 sm:text-xl">
      Hai domande tecniche? Vuoi darci un feedback? Hai bisogno di dettagli sui nostri servizi? Scrivici.
    </p>

    {#if success}
      <div class="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded relative mb-4" role="alert">
        <strong class="font-bold">Grazie! </strong>
        <span class="block sm:inline">Il tuo messaggio è stato inviato con successo.</span>
      </div>
    {/if}

    {#if error}
      <div class="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative mb-4" role="alert">
        <strong class="font-bold">Errore! </strong>
        <span class="block sm:inline">{error}</span>
      </div>
    {/if}

    <form on:submit|preventDefault={handleSubmit} class="space-y-8">
      <div>
        <label for="email" class="block mb-2 text-sm font-medium text-gray-900">La tua email</label>
        <input
          type="email"
          id="email"
          bind:value={formData.email}
          class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-orange-500 focus:border-orange-500 block w-full p-2.5"
          placeholder="nome@esempio.com"
          required
        />
      </div>
      <div>
        <label for="subject" class="block mb-2 text-sm font-medium text-gray-900">Oggetto</label>
        <input
          type="text"
          id="subject"
          bind:value={formData.subject}
          class="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-orange-500 focus:border-orange-500"
          placeholder="Come possiamo aiutarti?"
          required
        />
      </div>
      <div class="sm:col-span-2">
        <label for="message" class="block mb-2 text-sm font-medium text-gray-900">Il tuo messaggio</label>
        <textarea
          id="message"
          bind:value={formData.message}
          rows="6"
          class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-orange-500 focus:border-orange-500"
          placeholder="Lascia un commento..."
          required
        ></textarea>
      </div>
      <button
        type="submit"
        disabled={sending}
        class="py-3 px-5 text-sm font-medium text-center text-white rounded-lg bg-orange-700 sm:w-fit hover:bg-orange-800 focus:ring-4 focus:outline-none focus:ring-orange-300 disabled:opacity-50"
      >
        {sending ? 'Invio in corso...' : 'Invia messaggio'}
      </button>
    </form>
  </div>
</section>
