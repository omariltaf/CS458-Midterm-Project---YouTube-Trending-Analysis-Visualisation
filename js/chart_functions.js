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
                    hidden: true,
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
                    hidden: true,
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
                    hidden: true,
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
                    hidden: true,
                    data: [13.1, 25.6, 9.1, 13.5, 11.0, 9.4, 6.1, 12.3],
                    backgroundColor: [
                        'rgba(145, 37, 252, 0.2)',
                        'rgba(145, 37, 252, 0.2)',
                        'rgba(145, 37, 252, 0.2)',
                        'rgba(145, 37, 252, 0.2)',
                        'rgba(145, 37, 252, 0.2)',
                        'rgba(145, 37, 252, 0.2)',
                        'rgba(145, 37, 252, 0.2)',
                        'rgba(145, 37, 252, 0.2)'
                    ],
                    borderColor: [
                        'rgba(145, 37, 252, 1)',
                        'rgba(145, 37, 252, 1)',
                        'rgba(145, 37, 252, 1)',
                        'rgba(145, 37, 252, 1)',
                        'rgba(145, 37, 252, 1)',
                        'rgba(145, 37, 252, 1)',
                        'rgba(145, 37, 252, 1)',
                        'rgba(145, 37, 252, 1)'
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
                    hidden: true,
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
                    hidden: true,
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
                    hidden: true,
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
                    hidden: true,
                    data: [3132, 4693, 2131, 2616, 5331, 9179, 5651, 4120],
                    backgroundColor: [
                        'rgba(145, 37, 252, 0.2)',
                        'rgba(145, 37, 252, 0.2)',
                        'rgba(145, 37, 252, 0.2)',
                        'rgba(145, 37, 252, 0.2)',
                        'rgba(145, 37, 252, 0.2)',
                        'rgba(145, 37, 252, 0.2)',
                        'rgba(145, 37, 252, 0.2)',
                        'rgba(145, 37, 252, 0.2)'
                    ],
                    borderColor: [
                        'rgba(145, 37, 252, 1)',
                        'rgba(145, 37, 252, 1)',
                        'rgba(145, 37, 252, 1)',
                        'rgba(145, 37, 252, 1)',
                        'rgba(145, 37, 252, 1)',
                        'rgba(145, 37, 252, 1)',
                        'rgba(145, 37, 252, 1)',
                        'rgba(145, 37, 252, 1)'
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
            labels: ['News & Politics', 'Education', 'Pets & Animals', 'Travel & Events', 'Shows', 'Howto & Style', 'Autos & Vehicles', 'People & Blogs', 'Science & Technology', 'Comedy', 'Entertainment', 'Sports', 'Gaming', 'Film & Animation', 'Nonprofits & Activism', 'Music'
            ],
            datasets: [{
                label: 'USA',
                data: [581959, 693640, 730020, 849810, 887357, 927886, 1355965, 1390011, 1396944, 1437112, 1980619, 1995469, 2395365, 2846680, 2963884, 5916037
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
            },
            {
                hidden: true,
                label: 'Canada',
                data: [391461.0, 539595.0, 632425.0, 369478.0, 575234.0, 776662.0, 567578.0, 760326.0, 1252945.0, 991486.0, 1008145.0, 1075112.0, 916535.0, 1359125.0, 1562184.0, 3497250.0
                ],
                backgroundColor: [
                    'rgba(51, 102, 255, 0.2)',
                    'rgba(51, 102, 255, 0.2)',
                    'rgba(51, 102, 255, 0.2)',
                    'rgba(51, 102, 255, 0.2)',
                    'rgba(51, 102, 255, 0.2)',
                    'rgba(51, 102, 255, 0.2)',
                    'rgba(51, 102, 255, 0.2)',
                    'rgba(51, 102, 255, 0.2)',
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
                    'rgba(51, 102, 255, 1)',
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
            },{
                hidden: true,
                label: 'Germany',
                data: [285819.0, 167252.0, 360828.0, 135261.0, 475509.0, 331087.0, 205211.0, 356431.0, 718611.0, 654520.0, 520372.0, 698942.0, 404953.0, 704145.0, 626279.0, 2392683.0
                ],
                backgroundColor: [
                    'rgba(255, 153, 0, 0.2)',
                    'rgba(255, 153, 0, 0.2)',
                    'rgba(255, 153, 0, 0.2)',
                    'rgba(255, 153, 0, 0.2)',
                    'rgba(255, 153, 0, 0.2)',
                    'rgba(255, 153, 0, 0.2)',
                    'rgba(255, 153, 0, 0.2)',
                    'rgba(255, 153, 0, 0.2)',
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
                    'rgba(255, 153, 0, 1)',
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
            },{
                hidden: true,
                label: 'France',
                data: [131350.0, 156326.0, 186791.0, 71494.0, 514464.0, 191420.0, 63832.0, 214241.0, 587818.0, 436951.0, 376006.0, 456352.0, 282963.0, 405624.0, 534841.0, 1274350.0
                ],
                backgroundColor: [
                    'rgba(0, 102, 0, 0.2)',
                    'rgba(0, 102, 0, 0.2)',
                    'rgba(0, 102, 0, 0.2)',
                    'rgba(0, 102, 0, 0.2)',
                    'rgba(0, 102, 0, 0.2)',
                    'rgba(0, 102, 0, 0.2)',
                    'rgba(0, 102, 0, 0.2)',
                    'rgba(0, 102, 0, 0.2)',
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
                    'rgba(0, 102, 0, 1)',
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
            },{
                hidden: true,
                label: 'Great Britain',
                data: [1142327.0, 982256.0, 1001403.0, 1383177.0, 1233186.0, 617220.0, 1487392.0, 1958153.0, 3105490.0, 2135946.0, 3221312.0, 1733465.0, 973665.0, 3259290.0, 3919981.0, 12438666.0
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
                    'rgba(145, 37, 252, 1)',
                    'rgba(145, 37, 252, 1)',
                    'rgba(145, 37, 252, 1)',
                    'rgba(145, 37, 252, 1)',
                    'rgba(145, 37, 252, 1)',
                    'rgba(145, 37, 252, 1)',
                    'rgba(145, 37, 252, 1)',
                    'rgba(145, 37, 252, 1)',
                    'rgba(145, 37, 252, 1)',
                    'rgba(145, 37, 252, 1)',
                    'rgba(145, 37, 252, 1)',
                    'rgba(145, 37, 252, 1)',
                    'rgba(145, 37, 252, 1)',
                    'rgba(145, 37, 252, 1)',
                    'rgba(145, 37, 252, 1)',
                    'rgba(145, 37, 252, 1)'
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
