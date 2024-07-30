document.addEventListener('DOMContentLoaded', function() {
    const searchTermInput = document.getElementById('searchTerm');
    const resultContainer = document.getElementById('resultContainer');

    async function searchTerm() {
        const term = searchTermInput.value;
        if (!term) {
            resultContainer.innerHTML = 'Por favor, ingresa un término de búsqueda.';
            return;
        }

        const apiUrl = `https://es.wikipedia.org/w/api.php?action=query&list=search&srsearch=${term}&format=json&origin=*`;

        try {
            const response = await fetch(apiUrl);
            const data = await response.json();
            displayResults(data.query.search);
        } catch (error) {
            resultContainer.innerHTML = 'Hubo un error al realizar la búsqueda.';
            console.error('Error al buscar el término:', error);
        }
    }

    function displayResults(results) {
        if (results.length === 0) {
            resultContainer.innerHTML = 'No se encontraron resultados.';
            return;
        }

        const resultsHtml = results.map(result => `
            <div class="definicion">
                <h2>${result.title}</h2>
                <p>${result.snippet}</p>
                <a href="https://es.wikipedia.org/wiki/${result.title}" target="_blank">Leer más</a>
            </div>
        `).join('');

        resultContainer.innerHTML = resultsHtml;
    }

    window.searchTerm = searchTerm;
});
