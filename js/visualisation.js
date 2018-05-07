// Load the Visualization API and the corechart package.
google.charts.load("current", {
    "packages": ["corechart"]
});

// Set a callback to run when the Google Visualization API is loaded.
google.charts.setOnLoadCallback(drawPublishTimeByViewsChart);

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

// jQuery
$(document).ready(function() {
    // Detects when to load a new visualisation
    $("#change_factor_form input").on("change", function() {
        switch ($("input[name=factor]:checked", "#change_factor_form").val()) {
          case "Publish Time by Average Views":
            google.charts.setOnLoadCallback(drawPublishTimeByViewsChart);
            break;
          case "Publish Time by Video Count":
            google.charts.setOnLoadCallback(drawPublishTimeByCountChart);
            break;
          case "Categories by Average Views":
            google.charts.setOnLoadCallback(drawCategoryByViewsChart);
            break;
          default:
            console.log("Default");
            google.charts.setOnLoadCallback(drawPublishTimeByViewsChart);
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
