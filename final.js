async function searchCountry() {
    const country = document.getElementById('countryInput').value.trim();
    const resultDiv = document.getElementById('result');
    resultDiv.innerHTML = '';

    if (!country) return;

    try {
        const response = await fetch(`https://restcountries.com/v3.1/name/${country}`);
        const data = await response.json();
        const c = data[0];

        const html = `
            <h2>${c.name.common}</h2>
            <img src="${c.flags.png}" alt="Flag of ${c.name.common}">
            <p><strong>Capital:</strong> ${c.capital ? c.capital[0] : 'N/A'}</p>
            <p><strong>Currency:</strong> ${Object.values(c.currencies)[0].name} (${Object.values(c.currencies)[0].symbol})</p>
            <p><strong>Population:</strong> ${c.population.toLocaleString()}</p>
            <p><strong>Region:</strong> ${c.region}</p>
            <p><strong>Subregion:</strong> ${c.subregion}</p>
        `;

        resultDiv.innerHTML = html;
    } catch (error) {
        resultDiv.innerHTML = '<p style="color: red; font-weight: bold;">Country not found. Please check the spelling and try again.</p>';
    }
}
