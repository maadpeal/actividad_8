google.charts.load('current', {packages: ['corechart', 'line']});
google.charts.setOnLoadCallback(drawAreaChart);

function drawAreaChart() {
    var data = new google.visualization.DataTable();

    // Cambiar el orden de las columnas para que las áreas más pequeñas se muestren encima
    data.addColumn('number', 'Año');
    data.addColumn('number', 'Población en Pobreza (%)'); // Más grande al fondo
    data.addColumn('number', 'Pobreza Moderada (%)');     // Mediana en medio
    data.addColumn('number', 'Pobreza Extrema (%)');      // Más pequeña arriba

    data.addRows([
        [2008, 44.4, 33.3, 11.0],
        [2010, 46.1, 34.4, 11.7],
        [2012, 45.5, 35.7, 9.8],
        [2014, 46.2, 36.6, 9.5],
        [2016, 43.6, 34.9, 8.7],
        [2018, 41.9, 34.5, 7.4]
    ]);

    var options = {
        hAxis: {
            title: 'Año',
            viewWindow: {
                min: 2008,
                max: 2018
            },
            format: '####' // Mostrar solo el año sin decimales
        },
        vAxis: {
            title: 'Porcentaje de Población'
        },
        colors: ['#1A73E8', '#007329', '#AB0D06'], // Azul, Verde, Rojo (Población en Pobreza, Moderada, Extrema)
        legend: {
            position: 'top'
        },
        areaOpacity: 0.7, // Opacidad de las áreas para superposición
        isStacked: false // No apilar las áreas
    };

    var chart = new google.visualization.AreaChart(document.getElementById('p1Chart'));
    chart.draw(data, options);
}
