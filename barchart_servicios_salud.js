google.charts.load("current", {packages:["corechart"]});
google.charts.setOnLoadCallback(drawChart);

function drawChart() {
    var data = google.visualization.arrayToDataTable([
        ["Año", "Carencia Servicios Salud (%)", { role: "style" }],
        ["2008", 38.4, "#ff0000"], // Mayor valor - color más intenso
        ["2010", 32.8, "#ff4d4d"],
        ["2012", 21.5, "#ff8080"],
        ["2014", 18.2, "#ffb3b3"],
        ["2016", 15.5, "#ffd9d9"],
        ["2018", 16.2, "#ffe6e6"]  // Menor valor - color más suave
    ]);

    var view = new google.visualization.DataView(data);
    view.setColumns([0, 1,
        {
            calc: "stringify",
            sourceColumn: 1,
            type: "string",
            role: "annotation"
        },
        2
    ]);

    var options = {
        bar: { groupWidth: "80%" },
        legend: { position: "none" },
        hAxis: {
            title: "Porcentaje de Población"
        }
    };

    var chart = new google.visualization.BarChart(document.getElementById("p2Chart"));
    chart.draw(view, options);
}
