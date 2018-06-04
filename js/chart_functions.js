// Chart.JS functions to draw graphs

// PUBLISH TIME BY VIEWS
function drawPublishTimeByViewsChart(ctx) {
  return new Chart(ctx, {
    type: 'bar',
    data: {
      labels: ["00:00-02:59", "03:00-05:59", "06:00-08:59", "09:00-11:59", "12:00-14:59", "15:00-17:59",
      "18:00-20:59", "21:00-23:59"],
      datasets: [{
        label: 'USA',
        data: [1823596, 2485724, 1928567, 2368865, 1992936, 1284980, 1248425, 1432153],
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(255, 99, 132, 0.2)',
          'rgba(255, 99, 132, 0.2)',
          'rgba(255, 99, 132, 0.2)',
          'rgba(255, 99, 132, 0.2)',
          'rgba(255, 99, 132, 0.2)',
          'rgba(255, 99, 132, 0.2)',
          'rgba(255, 99, 132, 0.2)'
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(255, 99, 132, 1)',
          'rgba(255, 99, 132, 1)',
          'rgba(255, 99, 132, 1)',
          'rgba(255, 99, 132, 1)',
          'rgba(255, 99, 132, 1)',
          'rgba(255, 99, 132, 1)',
          'rgba(255, 99, 132, 1)'
        ],
        borderWidth: 1
      }]
    },
    options: {
      responsive: true,
      title: {
        display: true,
        text: 'Publish Time of Trending Youtube Videos by Average Views'
      },
      scales: {
        yAxes: [{
          scaleLabel: {
            display: true,
            labelString: 'Average Views'
          },
          ticks: {
            beginAtZero:true
          }
        }],
        xAxes: [{
          scaleLabel: {
            display: true,
            labelString: 'Publish Time'
          }
        }]
      }
    }
  });
}

// PUBLISH TIME BY COUNT
function drawPublishTimeByCountChart(ctx) {
  return new Chart(ctx, {
    type: 'bar',
    data: {
      labels: ["00:00-02:59", "03:00-05:59", "06:00-08:59", "09:00-11:59", "12:00-14:59", "15:00-17:59",
      "18:00-20:59", "21:00-23:59"],
      datasets: [{
        label: 'USA',
        data: [3061, 2770, 1665, 1492, 4742, 8271, 5602, 4341],
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(255, 99, 132, 0.2)',
          'rgba(255, 99, 132, 0.2)',
          'rgba(255, 99, 132, 0.2)',
          'rgba(255, 99, 132, 0.2)',
          'rgba(255, 99, 132, 0.2)',
          'rgba(255, 99, 132, 0.2)',
          'rgba(255, 99, 132, 0.2)'
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(255, 99, 132, 1)',
          'rgba(255, 99, 132, 1)',
          'rgba(255, 99, 132, 1)',
          'rgba(255, 99, 132, 1)',
          'rgba(255, 99, 132, 1)',
          'rgba(255, 99, 132, 1)',
          'rgba(255, 99, 132, 1)'
        ],
        borderWidth: 1
      }]
    },
    options: {
      responsive: true,
      title: {
        display: true,
        text: 'Publish Time of Trending Youtube Videos by Count'
      },
      scales: {
        yAxes: [{
          scaleLabel: {
            display: true,
            labelString: 'Count'
          },
          ticks: {
            beginAtZero:true
          }
        }],
        xAxes: [{
          scaleLabel: {
            display: true,
            labelString: 'Publish Time'
          }
        }]
      }
    }
  });
}

// CATEGORY BY VIEWS
function drawCategoryByViewsChart(ctx) {
  return new Chart(ctx, {
    type: 'horizontalBar',
    data: {
      labels: ["Shows", "Travel & Events", "Howto & Style", "News & Politics", "Education", "Autos & Vehicles",
      "Pets & Animals", "Gaming", "Sports", "Science & Technology", "People & Blogs", "Film & Animation",
      "Nonprofits & Activism", "Entertainment", "Music", "Comedy"],
      datasets: [{
        label: 'USA',
        data: [8492.0, 464041.0, 537665.0, 540956.0, 547582.0, 607694.0, 651404.0, 681082.0, 728434.0, 924731.0,
          971533.0, 1039473.0, 1110334.0, 1154868.0, 1176554.0, 1240073.0],
          backgroundColor: [
            'rgba(255, 99, 132, 0.2)',
            'rgba(255, 99, 132, 0.2)',
            'rgba(255, 99, 132, 0.2)',
            'rgba(255, 99, 132, 0.2)',
            'rgba(255, 99, 132, 0.2)',
            'rgba(255, 99, 132, 0.2)',
            'rgba(255, 99, 132, 0.2)',
            'rgba(255, 99, 132, 0.2)',
            'rgba(255, 99, 132, 0.2)',
            'rgba(255, 99, 132, 0.2)',
            'rgba(255, 99, 132, 0.2)',
            'rgba(255, 99, 132, 0.2)',
            'rgba(255, 99, 132, 0.2)',
            'rgba(255, 99, 132, 0.2)',
            'rgba(255, 99, 132, 0.2)',
            'rgba(255, 99, 132, 0.2)'
          ],
          borderColor: [
            'rgba(255, 99, 132, 1)',
            'rgba(255, 99, 132, 1)',
            'rgba(255, 99, 132, 1)',
            'rgba(255, 99, 132, 1)',
            'rgba(255, 99, 132, 1)',
            'rgba(255, 99, 132, 1)',
            'rgba(255, 99, 132, 1)',
            'rgba(255, 99, 132, 1)',
            'rgba(255, 99, 132, 1)',
            'rgba(255, 99, 132, 1)',
            'rgba(255, 99, 132, 1)',
            'rgba(255, 99, 132, 1)',
            'rgba(255, 99, 132, 1)',
            'rgba(255, 99, 132, 1)',
            'rgba(255, 99, 132, 1)',
            'rgba(255, 99, 132, 1)'
          ],
        borderWidth: 1
      }]
    },
    options: {
      responsive: true,
      title: {
        display: true,
        text: 'Categories of Trending Youtube Videos by Average Views'
      },
      scales: {
        yAxes: [{
          scaleLabel: {
            display: true,
            labelString: 'Categories'
          },
          ticks: {
            beginAtZero:true
          }
        }],
        xAxes: [{
          scaleLabel: {
            display: true,
            labelString: 'Views'
          }
        }]
      }
    }
  });
}
