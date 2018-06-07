var currentChart;
var ctx;

window.onload = function() {
    ctx = document.getElementById("currentChart");
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

// Dropdown functionality
document.addEventListener("DOMContentLoaded", function() {
    var elems = document.querySelectorAll(".dropdown-trigger");
    var options = {
        coverTrigger: false
    };
    var instances = M.Dropdown.init(elems, options);
});

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

// jQuery
$(document).ready(function() {
    // Detects when to load a new visualisation
    $("#change_factor_form input").on("change", function() {
        switch ($("input[name=factor]:checked", "#change_factor_form").val()) {
            case "Publish Time by Average Views":
                currentChart.destroy();
                currentChart = drawPublishTimeByViewsChart(ctx);
                break;
            case "Publish Time by Video Count":
                currentChart.destroy();
                currentChart = drawPublishTimeByCountChart(ctx);
                break;
            case "Categories by Average Views":
                currentChart.destroy();
                currentChart = drawCategoryByViewsChart(ctx);
                break;
            case "Likes, Dislikes, and Comments":
                currentChart.destroy();
                currentChart = drawDonutChart(ctx);
                break;
            default:
                console.log("Default");
                currentChart.destroy();
                currentChart = drawPublishTimeByViewsChart(ctx);
                break;
        }
    });

    // Updates the current country text when changed
    $("#dropdown1 li").click(function() {
        var text = $(this).text();
        $("#current_country").html(text);
        if (text != "USA") {
            $("#note").show();
        } else {
            $("#note").hide();
        }
    });
});
