google.charts.load('current', {'packages':['treemap']});
google.charts.setOnLoadCallback(drawChart);

function drawChart() {
    var data = google.visualization.arrayToDataTable([
        ['Año', 'Parent', 'Carencias Promedio', 'Porcentaje'],
        ['Total', null, 0, 0], // Nodo raíz

        ['2008 (2.8%)', 'Total', 2.8, 2.8],
        ['2010 (2.6%)', 'Total', 2.6, 2.6],
        ['2012 (2.4%)', 'Total', 2.4, 2.4],
        ['2014 (2.3%)', 'Total', 2.3, 2.3],
        ['2016 (2.2%)', 'Total', 2.2, 2.2],
        ['2018 (2.2%)', 'Total', 2.2, 2.2]
    ]);

    var tree = new google.visualization.TreeMap(document.getElementById('p3Chart'));

    tree.draw(data, {
        minColor: '#f00',
        midColor: '#ddd',
        maxColor: '#0d0',
        headerHeight: 15,
        fontColor: 'black',
        showScale: true
    });
}