// Load the Visualization API and the corechart package.
google.charts.load("current", {"packages":["corechart"]});

// Set a callback to run when the Google Visualization API is loaded.
google.charts.setOnLoadCallback(drawChart);

// Callback that creates and populates a data table,
// instantiates the bar chart, passes in the data and
// draws it.
function drawChart() {
  // Create the data table.
  // var data = new google.visualization.DataTable();
  var data = google.visualization.arrayToDataTable([
    ["Category", "Views", {
      role: "style"
    }],
    ["Shows", 8492.0, "276FCD"],
    ["Travel & Events", 464041.0, "666C05"],
    ["Howto & Style", 537665.0, "EF8570"],
    ["News & Politics", 540956.0, "AE8410"],
    ["Education", 547582.0, "EA47AA"],
    ["Autos & Vehicles", 607694.0, "4AC142"],
    ["Pets & Animals", 651404.0, "4AD427"],
    ["Gaming", 681082.0, "3E73AD"],
    ["Sports", 728434.0, "7B0E7C"],
    ["Science & Technology", 924731.0, "E9644D"],
    ["People & Blogs", 971533.0, "B08B45"],
    ["Film & Animation", 1039473.0, "AB1D3A"],
    ["Nonprofits & Activism", 1110334.0, "F1527D"],
    ["Entertainment", 1154868.0, "14A287"],
    ["Music", 1176554.0, "E1AA91"],
    ["Comedy", 1240073.0, "279C76"],
  ]);

  // Set chart options
  var options = {
    "title": "Average Views of Trending Youtube Videos Separated by Category",
    "width": 800,
    "height": 400,
    legend: { position: "none" },
    bars: "horizontal",
    hAxis: {
      title: "Views",
    }
  };

  // Instantiate and draw our chart, passing in some options.
  var chart = new google.visualization.BarChart(document.getElementById("chart_div"));
  chart.draw(data, options);
}

// Requests JSON data from server
var request = new XMLHttpRequest();
request.open("GET", "../youtube_data/USvideos.json", true);
request.send(null);
request.onreadystatechange = function() {
  if ( request.readyState === 4 && request.status === 200 ) {
    var JSON_data = JSON.parse(request.responseText);
    console.log(JSON_data);
  }
}

// Dropdown functionality
document.addEventListener("DOMContentLoaded", function() {
  var elems = document.querySelectorAll(".dropdown-trigger");
  var options = {coverTrigger:false};
  var instances = M.Dropdown.init(elems, options);
});

// jQuery
$(document).ready(function() {
  // Detects when to load a new visualisation
  $('#change_factor_form input').on('change', function() {
    alert($('input[name=factor]:checked', '#change_factor_form').val() + " (New Visualisation should be loaded now)");
  });

  // Updates the current country text when changed
  $('#dropdown1 li').click(function() {
    var text = $(this).text();
    $('#current_country').html(text);
  });
});
