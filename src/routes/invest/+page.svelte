<script>
  const investmentHighlights = [
    {
      title: 'Crescita Sostenibile',
      value: '+45%',
      description: 'Crescita anno su anno'
    },
    {
      title: 'Mercato TAM',
      value: '€50B',
      description: 'Total Addressable Market'
    },
    {
      title: 'ROI Medio',
      value: '28%',
      description: 'Return on Investment'
    }
  ];
</script>

<section class="bg-brandbg py-16">
  <div class="container mx-auto px-4">
    <h1 class="text-4xl font-bold text-center mb-12">Investi Con Noi</h1>
    
    <div class="max-w-4xl mx-auto">
      <div class="bg-white rounded-lg shadow-lg p-8 mb-8">
        <h2 class="text-2xl font-semibold mb-6">Opportunità di Investimento</h2>
        <p class="text-gray-600 mb-6">
          Offriamo opportunità uniche di investimento in un mercato in rapida crescita.
          Il nostro approccio innovativo e il team esperto garantiscono un potenziale
          di crescita significativo.
        </p>
        
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
          {#each investmentHighlights as highlight}
            <div class="text-center">
              <div class="text-3xl font-bold text-blue-600 mb-2">
                {highlight.value}
              </div>
              <div class="font-semibold mb-1">{highlight.title}</div>
              <div class="text-sm text-gray-500">{highlight.description}</div>
            </div>
          {/each}
        </div>
      </div>
      
      <div class="text-center">
        <button class="bg-blue-600 text-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-blue-700">
          Richiedi Informazioni
        </button>
      </div>
    </div>
  </div>
</section>
