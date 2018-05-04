// Load the Visualization API and the corechart package.
google.charts.load('current', {'packages':['corechart']});

// Set a callback to run when the Google Visualization API is loaded.
google.charts.setOnLoadCallback(drawChart);

// Callback that creates and populates a data table,
// instantiates the pie chart, passes in the data and
// draws it.
function drawChart() {

  // Create the data table.
  var data = new google.visualization.DataTable();
  data.addColumn('string', 'Time Slot');
  data.addColumn('number', 'Views');
  data.addRows([
    ['Midnight-3am', 3],
    ['3am-6am', 1],
    ['6am-9am', 1],
    ['9am-Noon', 1],
    ['Noon-3pm', 2],
    ['3pm-6pm', 1],
    ['6pm-9pm', 1],
    ['9pm-Midnight', 1],
  ]);

  // Set chart options
  var options = {'title':'Average Views of Trending Youtube Videos Separated by Publish Times',
                 'width':600,
                 'height':300};

  // Instantiate and draw our chart, passing in some options.
  var chart = new google.visualization.BarChart(document.getElementById('chart_div'));
  chart.draw(data, options);
}

// //////////////////////////////////////////////////////////////////////////////

var request = new XMLHttpRequest();
request.open("GET", "../youtube_data/USvideos.json", true);
request.send(null);
request.onreadystatechange = function() {
  if ( request.readyState === 4 && request.status === 200 ) {
    var my_JSON_object = JSON.parse(request.responseText);
    console.log(my_JSON_object);
  }
}




// Dropdown functionality
/* When the user clicks on the button,
toggle between hiding and showing the dropdown content */
function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
}

// Close the dropdown if the user clicks outside of it
window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {

    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}
