<script>
  const mediaItems = [
    {
      title: 'Comunicato Stampa 2024',
      date: '15 Gennaio 2024',
      description: 'Ultime novità e sviluppi della nostra azienda',
      type: 'press'
    },
    {
      title: 'Intervista al CEO',
      date: '10 Gennaio 2024',
      description: 'Intervista esclusiva sul futuro dell\'azienda',
      type: 'video'
    },
    {
      title: 'Report Annuale',
      date: '1 Gennaio 2024',
      description: 'Risultati e obiettivi raggiunti nel 2023',
      type: 'report'
    }
  ];
</script>

<section class="bg-brandbg py-16">
  <div class="container mx-auto px-4">
    <h1 class="text-4xl font-bold text-center mb-12">Media Center</h1>
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {#each mediaItems as item}
        <div class="bg-white rounded-lg shadow-lg p-6">
          <div class="mb-4">
            <span class="text-sm text-gray-500">{item.date}</span>
            <h3 class="text-xl font-semibold mt-2">{item.title}</h3>
          </div>
          <p class="text-gray-600 mb-4">{item.description}</p>
          <button class="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
            Leggi di più
          </button>
        </div>
      {/each}
    </div>
  </div>
</section>
