google.charts.load('current', {packages: ['corechart', 'bar']});
google.charts.setOnLoadCallback(drawChart);

function drawChart() {
    var data = google.visualization.arrayToDataTable([
        ['Entidad Federativa', 'Cambio en Pobreza (%)', { role: 'style' }],
        ['Aguascalientes', -10.5, 'color: red'],
        ['Hidalgo', -9.8, 'color: red'],
        ['Tlaxcala', -8.6, 'color: red'],
        ['Veracruz', 12.3, 'color: blue'],
        ['Oaxaca', 9.7, 'color: blue'],
        ['Colima', 7.4, 'color: blue']
    ]);

    var options = {
        chartArea: {width: '60%'},
        legend: { position: 'none' }, // Eliminar la leyenda
        hAxis: {
            minValue: -15,
            textStyle: {
                bold: true,
                fontSize: 10, // Tamaño de fuente reducido
                color: '#4d4d4d'
            },
            titleTextStyle: {
                bold: true,
                fontSize: 12, // Tamaño de fuente reducido
                color: '#4d4d4d'
            }
        },
        vAxis: {
            textStyle: {
                fontSize: 10, // Tamaño de fuente reducido
                bold: true,
                color: '#848484'
            },
            titleTextStyle: {
                fontSize: 12, // Tamaño de fuente reducido
                bold: true,
                color: '#848484'
            }
        },
        bars: 'vertical', // Mostrar barras verticales
    };

    var chart = new google.visualization.ColumnChart(document.getElementById('p4Chart'));
    chart.draw(data, options);
}
