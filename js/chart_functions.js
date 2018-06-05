// Chart.JS functions to draw graphs

// PUBLISH TIME BY VIEWS
function drawPublishTimeByViewsChart(ctx) {
    return new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ["00:00-02:59", "03:00-05:59", "06:00-08:59", "09:00-11:59", "12:00-14:59", "15:00-17:59",
                "18:00-20:59", "21:00-23:59"
            ],
            datasets: [{
                    label: 'USA',
                    data: [8.8, 20.6, 13.8, 19.5, 12.0, 8.5, 8.1, 8.8],
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
                },
                {
                    label: 'Canada',
                    data: [10.0, 18.7, 15.3, 14.2, 14.1, 9.4, 9.4, 9.0],
                    backgroundColor: [
                        'rgba(51, 102, 255, 0.2)',
                        'rgba(51, 102, 255, 0.2)',
                        'rgba(51, 102, 255, 0.2)',
                        'rgba(51, 102, 255, 0.2)',
                        'rgba(51, 102, 255, 0.2)',
                        'rgba(51, 102, 255, 0.2)',
                        'rgba(51, 102, 255, 0.2)',
                        'rgba(51, 102, 255, 0.2)'
                    ],
                    borderColor: [
                        'rgba(51, 102, 255, 1)',
                        'rgba(51, 102, 255, 1)',
                        'rgba(51, 102, 255, 1)',
                        'rgba(51, 102, 255, 1)',
                        'rgba(51, 102, 255, 1)',
                        'rgba(51, 102, 255, 1)',
                        'rgba(51, 102, 255, 1)',
                        'rgba(51, 102, 255, 1)'
                    ],
                    borderWidth: 1
                },
                {
                    label: 'Germany',
                    data: [21.0, 30.3, 9.3, 6.2, 7.4, 6.4, 7.6, 11.8],
                    backgroundColor: [
                        'rgba(255, 153, 0, 0.2)',
                        'rgba(255, 153, 0, 0.2)',
                        'rgba(255, 153, 0, 0.2)',
                        'rgba(255, 153, 0, 0.2)',
                        'rgba(255, 153, 0, 0.2)',
                        'rgba(255, 153, 0, 0.2)',
                        'rgba(255, 153, 0, 0.2)',
                        'rgba(255, 153, 0, 0.2)'
                    ],
                    borderColor: [
                        'rgba(255, 153, 0, 1)',
                        'rgba(255, 153, 0, 1)',
                        'rgba(255, 153, 0, 1)',
                        'rgba(255, 153, 0, 1)',
                        'rgba(255, 153, 0, 1)',
                        'rgba(255, 153, 0, 1)',
                        'rgba(255, 153, 0, 1)',
                        'rgba(255, 153, 0, 1)'
                    ],
                    borderWidth: 1
                },
                {
                    label: 'France',
                    data: [15.3, 37.1, 10., 5.9, 8.4, 6.4, 6.6, 10.4],
                    backgroundColor: [
                        'rgba(0, 102, 0, 0.2)',
                        'rgba(0, 102, 0, 0.2)',
                        'rgba(0, 102, 0, 0.2)',
                        'rgba(0, 102, 0, 0.2)',
                        'rgba(0, 102, 0, 0.2)',
                        'rgba(0, 102, 0, 0.2)',
                        'rgba(0, 102, 0, 0.2)',
                        'rgba(0, 102, 0, 0.2)'
                    ],
                    borderColor: [
                        'rgba(0, 102, 0, 1)',
                        'rgba(0, 102, 0, 1)',
                        'rgba(0, 102, 0, 1)',
                        'rgba(0, 102, 0, 1)',
                        'rgba(0, 102, 0, 1)',
                        'rgba(0, 102, 0, 1)',
                        'rgba(0, 102, 0, 1)',
                        'rgba(0, 102, 0, 1)'
                    ],
                    borderWidth: 1
                },
                {
                    label: 'Great Britain',
                    data: [13.1, 25.6, 9.1, 13.5, 11.0, 9.4, 6.1, 12.3],
                    backgroundColor: [
                        'rgba(128, 0, 0, 0.2)',
                        'rgba(128, 0, 0, 0.2)',
                        'rgba(128, 0, 0, 0.2)',
                        'rgba(128, 0, 0, 0.2)',
                        'rgba(128, 0, 0, 0.2)',
                        'rgba(128, 0, 0, 0.2)',
                        'rgba(128, 0, 0, 0.2)',
                        'rgba(128, 0, 0, 0.2)'
                    ],
                    borderColor: [
                        'rgba(128, 0, 0, 1)',
                        'rgba(128, 0, 0, 1)',
                        'rgba(128, 0, 0, 1)',
                        'rgba(128, 0, 0, 1)',
                        'rgba(128, 0, 0, 1)',
                        'rgba(128, 0, 0, 1)',
                        'rgba(128, 0, 0, 1)',
                        'rgba(128, 0, 0, 1)'
                    ],
                    borderWidth: 1
                }
            ]
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
                        labelString: '% Views'
                    },
                    ticks: {
                        beginAtZero: true
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
                "18:00-20:59", "21:00-23:59"
            ],
            datasets: [{
                    label: 'USA',
                    data: [3540, 3242, 1899, 1897, 5970, 9976, 6722, 5215],
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
                },
                {
                    label: 'Canada',
                    data: [3863, 3523, 1834, 2073, 4930, 9292, 7046, 5926],
                    backgroundColor: [
                        'rgba(51, 102, 255, 0.2)',
                        'rgba(51, 102, 255, 0.2)',
                        'rgba(51, 102, 255, 0.2)',
                        'rgba(51, 102, 255, 0.2)',
                        'rgba(51, 102, 255, 0.2)',
                        'rgba(51, 102, 255, 0.2)',
                        'rgba(51, 102, 255, 0.2)',
                        'rgba(51, 102, 255, 0.2)'
                    ],
                    borderColor: [
                        'rgba(51, 102, 255, 1)',
                        'rgba(51, 102, 255, 1)',
                        'rgba(51, 102, 255, 1)',
                        'rgba(51, 102, 255, 1)',
                        'rgba(51, 102, 255, 1)',
                        'rgba(51, 102, 255, 1)',
                        'rgba(51, 102, 255, 1)',
                        'rgba(51, 102, 255, 1)'
                    ],
                    borderWidth: 1
                },
                {
                    label: 'Germany',
                    data: [1038, 1442, 2579, 4911, 7565, 9966, 6931, 4018],
                    backgroundColor: [
                        'rgba(255, 153, 0, 0.2)',
                        'rgba(255, 153, 0, 0.2)',
                        'rgba(255, 153, 0, 0.2)',
                        'rgba(255, 153, 0, 0.2)',
                        'rgba(255, 153, 0, 0.2)',
                        'rgba(255, 153, 0, 0.2)',
                        'rgba(255, 153, 0, 0.2)',
                        'rgba(255, 153, 0, 0.2)'
                    ],
                    borderColor: [
                        'rgba(255, 153, 0, 1)',
                        'rgba(255, 153, 0, 1)',
                        'rgba(255, 153, 0, 1)',
                        'rgba(255, 153, 0, 1)',
                        'rgba(255, 153, 0, 1)',
                        'rgba(255, 153, 0, 1)',
                        'rgba(255, 153, 0, 1)',
                        'rgba(255, 153, 0, 1)'
                    ],
                    borderWidth: 1
                },
                {
                    label: 'France',
                    data: [1191, 1174, 2030, 4620, 5127, 13262, 7281, 3794],
                    backgroundColor: [
                        'rgba(0, 102, 0, 0.2)',
                        'rgba(0, 102, 0, 0.2)',
                        'rgba(0, 102, 0, 0.2)',
                        'rgba(0, 102, 0, 0.2)',
                        'rgba(0, 102, 0, 0.2)',
                        'rgba(0, 102, 0, 0.2)',
                        'rgba(0, 102, 0, 0.2)',
                        'rgba(0, 102, 0, 0.2)'
                    ],
                    borderColor: [
                        'rgba(0, 102, 0, 1)',
                        'rgba(0, 102, 0, 1)',
                        'rgba(0, 102, 0, 1)',
                        'rgba(0, 102, 0, 1)',
                        'rgba(0, 102, 0, 1)',
                        'rgba(0, 102, 0, 1)',
                        'rgba(0, 102, 0, 1)',
                        'rgba(0, 102, 0, 1)'
                    ],
                    borderWidth: 1
                },
                {
                    label: 'Great Britain',
                    data: [3132, 4693, 2131, 2616, 5331, 9179, 5651, 4120],
                    backgroundColor: [
                        'rgba(128, 0, 0, 0.2)',
                        'rgba(128, 0, 0, 0.2)',
                        'rgba(128, 0, 0, 0.2)',
                        'rgba(128, 0, 0, 0.2)',
                        'rgba(128, 0, 0, 0.2)',
                        'rgba(128, 0, 0, 0.2)',
                        'rgba(128, 0, 0, 0.2)',
                        'rgba(128, 0, 0, 0.2)'
                    ],
                    borderColor: [
                        'rgba(128, 0, 0, 1)',
                        'rgba(128, 0, 0, 1)',
                        'rgba(128, 0, 0, 1)',
                        'rgba(128, 0, 0, 1)',
                        'rgba(128, 0, 0, 1)',
                        'rgba(128, 0, 0, 1)',
                        'rgba(128, 0, 0, 1)',
                        'rgba(128, 0, 0, 1)'
                    ],
                    borderWidth: 1
                }
            ]
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
                        beginAtZero: true
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
                "Nonprofits & Activism", "Entertainment", "Music", "Comedy"
            ],
            datasets: [{
                label: 'USA',
                data: [8492.0, 464041.0, 537665.0, 540956.0, 547582.0, 607694.0, 651404.0, 681082.0, 728434.0, 924731.0,
                    971533.0, 1039473.0, 1110334.0, 1154868.0, 1176554.0, 1240073.0
                ],
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
                        beginAtZero: true
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
