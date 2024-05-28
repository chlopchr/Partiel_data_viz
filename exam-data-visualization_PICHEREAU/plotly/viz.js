fetch('data.json')
    .then((response) => response.json())
    .then((data) => run_visualization(data));

function run_visualization(data) {
    sortByCountryPopulation(data);
    const top30Pays = data.slice(-30);

    const nom = top30Pays.map(country => country.country);
    const pop = top30Pays.map(country => country.population);
    const trace = {
        x: nom,
        y: pop,
        type: 'bar',
        marker: {
            color: 'green'
        }
    };
    const layout = {
        title: 'Graphique des pays avec les populations les plus nombreuse',
        xaxis: {
            title: 'Pays'
        },
        yaxis: {
            title: 'Population'
        }
    };
    Plotly.newPlot('graph', [trace], layout);
}




function sortByCountryPopulation(data) {
    data.sort((acc, value) => acc.population < value.population ? -1 : 1);
}

