var currentChart;
var ctx;
var wordcloud;

window.onload = function() {
    ctx = document.getElementById("currentChart");
    wordcloud = document.getElementById("wordcloud");
    currentChart = drawPublishTimeByViewsChart(ctx);
}

// Requests JSON data from server
// var request = new XMLHttpRequest();
// request.open("GET", "../youtube_data/USvideos.json", true);
// request.send(null);
// request.onreadystatechange = function() {
//     if (request.readyState === 4 && request.status === 200) {
//         var JSON_data = JSON.parse(request.responseText);
//         console.log(JSON_data);
//     }
// }

// Chart.js functionality
function addData(chart, label, data) {
    chart.data.labels.push(label);
    chart.data.datasets.forEach((dataset) => {
        dataset.data.push(data);
    });
    chart.update();
}

function removeData(chart) {
    chart.data.labels.pop();
    chart.data.datasets.forEach((dataset) => {
        dataset.data.pop();
    });
    chart.update();
}

// Word Cloud functionality
function drawWordCloud() {
  d3.wordcloud()
    .size([800, 380])
    .selector('#wordcloud')
    .words([
      {text: 'a', size: 5},
      {text: 'b', size: 5},
      {text: 'c', size: 5},
      {text: 'd', size: 5},
      {text: 'e', size: 5},
      {text: 'f', size: 5},
      {text: 'g', size: 5},
    ])
    .start();
}

// jQuery
$(document).ready(function() {
    // Detects when to load a new visualisation
    $("#change_factor_form input").on("change", function() {
        switch ($("input[name=factor]:checked", "#change_factor_form").val()) {
            case "Publish Time by Average Views":
                currentChart.destroy();
                $("#wordcloud").empty();
                currentChart = drawPublishTimeByViewsChart(ctx);
                break;
            case "Publish Time by Video Count":
                currentChart.destroy();
                $("#wordcloud").empty();
                currentChart = drawPublishTimeByCountChart(ctx);
                break;
            case "Categories by Average Views":
                currentChart.destroy();
                $("#wordcloud").empty();
                currentChart = drawCategoryByViewsChart(ctx);
                break;
            case "Likes, Dislikes, and Comments":
                currentChart.destroy();
                $("#wordcloud").empty();
                currentChart = drawDonutChart(ctx);
                break;
            case "Video Tags Word Cloud":
                currentChart.destroy();
                $("#wordcloud").empty();
                drawWordCloud();
                break;
            default:
                console.log("Default");
                currentChart.destroy();
                currentChart = drawPublishTimeByViewsChart(ctx);
                break;
        }
    });
});
