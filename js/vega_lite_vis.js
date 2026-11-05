var spec1 = "json/world-choropleth.json";
vegaEmbed('#vis1', spec1).then(function(result) {
    // Access the Vega view instance (https://vega.github.io/vega/docs/api/view/) as result.view
}).catch(console.error);
