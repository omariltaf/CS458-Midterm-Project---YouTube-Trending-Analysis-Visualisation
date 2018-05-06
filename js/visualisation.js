// Load the Visualization API and the corechart package.
google.charts.load("current", {
    "packages": ["corechart"]
});

// Set a callback to run when the Google Visualization API is loaded.
google.charts.setOnLoadCallback(drawChart);

// Callback that creates and populates a data table,
// instantiates the bar chart, passes in the data and
// draws it.
function drawChart() {

    // CATEGORY BY VIEWS
    // // Create the data table.
    // // var data = new google.visualization.DataTable();
    // var data = google.visualization.arrayToDataTable([
    //   ["Category", "Views", {
    //     role: "style"
    //   }],
    //   ["Shows", 8492.0, "276FCD"],
    //   ["Travel & Events", 464041.0, "666C05"],
    //   ["Howto & Style", 537665.0, "EF8570"],
    //   ["News & Politics", 540956.0, "AE8410"],
    //   ["Education", 547582.0, "EA47AA"],
    //   ["Autos & Vehicles", 607694.0, "4AC142"],
    //   ["Pets & Animals", 651404.0, "4AD427"],
    //   ["Gaming", 681082.0, "3E73AD"],
    //   ["Sports", 728434.0, "7B0E7C"],
    //   ["Science & Technology", 924731.0, "E9644D"],
    //   ["People & Blogs", 971533.0, "B08B45"],
    //   ["Film & Animation", 1039473.0, "AB1D3A"],
    //   ["Nonprofits & Activism", 1110334.0, "F1527D"],
    //   ["Entertainment", 1154868.0, "14A287"],
    //   ["Music", 1176554.0, "E1AA91"],
    //   ["Comedy", 1240073.0, "279C76"],
    // ]);
    //
    // // Set chart options
    // var options = {
    //   "title": "Average Views of Trending Youtube Videos Separated by Category",
    //   "width": 800,
    //   "height": 400,
    //   legend: { position: "none" },
    //   bars: "horizontal",
    //   hAxis: {
    //     title: "Views",
    //   }
    // };
    //
    // // Instantiate and draw our chart, passing in some options.
    // var chart = new google.visualization.BarChart(document.getElementById("chart_div"));
    // chart.draw(data, options);

    // // PUBLISH TIME BY COUNT
    // // Create the data table.
    // // var data = new google.visualization.DataTable();
    // var data = google.visualization.arrayToDataTable([
    //     ["Publish Time", "Count", {
    //         role: "style"
    //     }],
    //     ['00:00-02:59', 3061, '54CAE4'],
    //     ['03:00-05:59', 2770, '28FF05'],
    //     ['06:00-08:59', 1665, '1AC0E5'],
    //     ['09:00-11:59', 1492, '93C8E3'],
    //     ['12:00-14:59', 4742, 'D0297C'],
    //     ['15:00-17:59', 8271, 'BE4ABB'],
    //     ['18:00-20:59', 5602, 'AC58D7'],
    //     ['21:00-23:59', 4341, 'EDA1EA']
    // ]);
    //
    // // Set chart options
    // var options = {
    //     "title": "Count of Videos on the Trending List by Publish Time",
    //     "width": 1000,
    //     "height": 500,
    //     legend: {
    //         position: "none"
    //     },
    //     bars: "horizontal",
    //     vAxis: {
    //         title: "Count",
    //     },
    //     hAxis: {
    //         title: "Publish Time",
    //     }
    //
    // };
    //
    // // Instantiate and draw our chart, passing in some options.
    // var chart = new google.visualization.ColumnChart(document.getElementById("chart_div"));
    // chart.draw(data, options);

    // PUBLISH TIME BY VIEWS
    // Create the data table.
    // var data = new google.visualization.DataTable();
    var data = google.visualization.arrayToDataTable([
        ["Publish Time", "Mean Views", {
            role: "style"
        }],
        ['00:00-02:59', 1823596, 'B425E7'],
        ['03:00-05:59', 2485724, '1B3107'],
        ['06:00-08:59', 1928567, 'CE5EF1'],
        ['09:00-11:59', 2368865, '86EA40'],
        ['12:00-14:59', 1992936, '1B5417'],
        ['15:00-17:59', 1384980, '7E15CD'],
        ['18:00-20:59', 1348425, 'E70277'],
        ['21:00-23:59', 1432153, '8E7E8D']
    ]);

    // Set chart options
    var options = {
        "title": "Mean Views of Videos on the YouTube Trending List by Publish Time",
        "width": 1000,
        "height": 500,
        legend: {
            position: "none"
        },
        bars: "horizontal",
        vAxis: {
            title: "Mean Views",
        },
        hAxis: {
            title: "Publish Time",
        }

    };

    // Instantiate and draw our chart, passing in some options.
    var chart = new google.visualization.ColumnChart(document.getElementById("chart_div"));
    chart.draw(data, options);
}

// Requests JSON data from server
var request = new XMLHttpRequest();
request.open("GET", "../youtube_data/USvideos.json", true);
request.send(null);
request.onreadystatechange = function() {
    if (request.readyState === 4 && request.status === 200) {
        var JSON_data = JSON.parse(request.responseText);
        console.log(JSON_data);
    }
}

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
    $('#change_factor_form input').on('change', function() {
        alert($('input[name=factor]:checked', '#change_factor_form').val() + " (New Visualisation should be loaded now)");
    });

    // Updates the current country text when changed
    $('#dropdown1 li').click(function() {
        var text = $(this).text();
        $('#current_country').html(text);
    });
});
