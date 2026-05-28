const list = document.getElementById('countries-list');

const fetchCountries = async () => {
    try {
        const response = await fetch('https://restcountries.com/v3.1/all');
        if (!response.ok) throw new Error('Failed to fetch');
        
        const countries = await response.json();
        
        countries.slice(0, 10).forEach(country => {
            const li = document.createElement('li');
            li.textContent = country.name.common;
            list.appendChild(li);
        });
    } catch (error) {
        console.error(error);
    }
};

fetchCountries();
