google.charts.load('current', {packages: ['corechart', 'bar']});
google.charts.setOnLoadCallback(drawAxisTickColors);

function drawAxisTickColors() {
    var data = google.visualization.arrayToDataTable([
        ['Carencia Social', '2008 (%)', '2018 (%)'],
        ['Rezago educativo', 21.9, 16.9],
        ['Acceso a servicios de salud', 38.4, 16.2],
        ['Acceso a la seguridad social', 65.0, 57.3],
        ['Calidad y espacios de vivienda', 17.9, 11.1],
        ['Servicios básicos en la vivienda', 21.2, 8.9],
        ['Acceso a la alimentación', 23.4, 20.4]
    ]);

    var options = {
        chartArea: {width: '60%'},
        hAxis: {
            minValue: 0,
            textStyle: {
                bold: true,
                fontSize: 10, // Tamaño de fuente reducido
                color: '#4d4d4d'
            },
            titleTextStyle: {
                bold: true,
                fontSize: 14, // Tamaño de fuente reducido
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
        bars: 'grouped', // Mostrar barras agrupadas (uno al lado del otro)
        colors: ['#1f77b4', '#ff7f0e'] // Colores para 2008 y 2018
    };

    var chart = new google.visualization.BarChart(document.getElementById('p5Chart'));
    chart.draw(data, options);
}
