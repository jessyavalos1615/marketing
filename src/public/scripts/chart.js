/* // Load Charts and the corechart package.
google.charts.load("current", { packages: ["corechart"] });

// Draw the pie chart for Sarah's pizza when Charts is loaded.
google.charts.setOnLoadCallback(drawSarahChart);

// Draw the pie chart for the Anthony's pizza when Charts is loaded.
google.charts.setOnLoadCallback(drawAnthonyChart);

// Callback that draws the pie chart for Sarah's pizza.
function drawSarahChart() {
  // Create the data table for Sarah's pizza.
  var data = new google.visualization.DataTable();
  data.addColumn("string", "Topping");
  data.addColumn("number", "Slices");
  data.addRows([
    ["Humedad de Suelo", 1],
    ["Humedad Ambiental", 1],
    ["PH", 2],
    ["Minerales", 2]
  ]);

  // Set options for Sarah's pie chart.
  var options = {
    title: "Monitor 1",
    width: 400,
    height: 300
  };

  // Instantiate and draw the chart for Sarah's pizza.
  var chart = new google.visualization.PieChart(
    document.getElementById("Sarah_chart_div")
  );
  chart.draw(data, options);
}

// Callback that draws the pie chart for Anthony's pizza.
function drawAnthonyChart() {
  // Create the data table for Anthony's pizza.
  var data = new google.visualization.DataTable();
  data.addColumn("string", "Topping");
  data.addColumn("number", "Slices");
  data.addRows([
    ["Humedad de Suelo", 1],
    ["Humedad Ambiental", 1],
    ["PH", 2],
    ["Minerales", 2]
  ]);

  // Set options for Anthony's pie chart.
  var options = {
    title: "Monitor 2",
    width: 400,
    height: 300
  };

  // Instantiate and draw the chart for Anthony's pizza.
  var chart = new google.visualization.PieChart(
    document.getElementById("Anthony_chart_div")
  );
  chart.draw(data, options);
}
 */
google.charts.load("current", { packages: ["corechart"] });
google.charts.setOnLoadCallback(drawChart1);
google.charts.setOnLoadCallback(drawChart2);

function drawChart1() {
  var data = google.visualization.arrayToDataTable([
    ["Dias", "Humedad de Suelo", "Humedad de Ambiente", "PH", "Minerales"],
    ["Lunes",       40,                   40,             1,      70     ],
    ["Martes",      70,                   20,             2,      20     ],
    ["Miercoles",   30,                   10,             5,      30     ],
    ["Jueves",      80,                   40,             2,      40     ],
    ["Viernes",     90,                   15,             7,      19     ],
    ["Sabado",      40,                   09,             9,      40     ],
    ["Domingo",     75,                   25,            10,      30     ]
  ]);

  var options = {
    title: "Monitor 1",
    curveType: "function",
    legend: { position: "bottom" }
  };

  var chart = new google.visualization.LineChart(
    document.getElementById("curve_chart1")
  );

  chart.draw(data, options);
}

function drawChart2() {
  var data = google.visualization.arrayToDataTable([
    ["Dias", "Humedad de Suelo", "Humedad de Ambiente", "PH", "Minerales"],
    ["Lunes", 40, 40, 1, 70],
    ["Martes", 70, 20, 2, 20],
    ["Miercoles", 30, 10, 5, 30],
    ["Jueves", 80, 40, 2, 40],
    ["Viernes", 90, 15, 7, 19],
    ["Sabado", 40, 09, 9, 40],
    ["Domingo", 75, 25, 10, 30]
  ]);

  var options = {
    title: "Monitor 2",
    curveType: "function",
    legend: { position: "bottom" }
  };

  var chart = new google.visualization.LineChart(
    document.getElementById("curve_chart2")
  );

  chart.draw(data, options);
}