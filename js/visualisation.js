var currentChart;
var ctx;
var wordcloud;
var wordcloud_title;

window.onload = function() {
    ctx = document.getElementById("currentChart");
    wordcloud = document.getElementById("wordcloud");
    wordcloud_title = document.getElementById("wordcloud_title");
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
    .size([780, 380])
    .selector("#wordcloud")
    .scale("sqrt")
    .words([
      {text: 'the', size: 13409},
{text: 'to', size: 8547},
{text: 'makeup', size: 7010},
{text: 'how', size: 6323},
{text: 'video', size: 6263},
{text: 'of', size: 6193},
{text: 'funny', size: 6186},
{text: '2018', size: 6116},
{text: 'and', size: 5714},
{text: 'The', size: 4951},
{text: 'new', size: 4882},
{text: 'a', size: 4848},
{text: 'music', size: 4647},
{text: 'food', size: 4208},
{text: 'comedy', size: 3743},
{text: 'in', size: 3555},
{text: 'news', size: 3537},
{text: 'best', size: 3416},
{text: 'show', size: 3259},
{text: 'movie', size: 3142},
{text: 'youtube', size: 3003},
{text: 'vs', size: 2708},
{text: 'challenge', size: 2705},
{text: 'live', size: 2623},
{text: '2017', size: 2606},
{text: 'with', size: 2600},
{text: 'tutorial', size: 2589},
{text: 'black', size: 2582},
{text: 'life', size: 2511},
{text: 'trailer', size: 2486},
{text: 'on', size: 2435},
{text: 'Show', size: 2431},
{text: 'review', size: 2404},
{text: 'videos', size: 2338},
{text: 'interview', size: 2314},
{text: 'you', size: 2257},
{text: 'for', size: 2241},
{text: 'make', size: 2241},
{text: 'my', size: 2205},
{text: 'News', size: 2184},
{text: 'official', size: 2087},
{text: 'game', size: 2073},
{text: 'star', size: 2067},
{text: 'science', size: 2021},
{text: '2', size: 1951},
{text: 'cat', size: 1947},
{text: 'family', size: 1923},
{text: 'iphone', size: 1922},
{text: 'it', size: 1905},
{text: 'recipe', size: 1886},
{text: 'world', size: 1882},
{text: 'night', size: 1862},
{text: 'vlog', size: 1836},
{text: 'beauty', size: 1798},
{text: 'channel', size: 1758},
{text: 'test', size: 1718},
{text: 'Trailer', size: 1688},
{text: 'first', size: 1684},
{text: 'me', size: 1660},
{text: 'react', size: 1655},
{text: 'New', size: 1628},
{text: 'is', size: 1617},
{text: 'Video', size: 1575},
{text: 'school', size: 1564},
{text: 'diy', size: 1562},
{text: 'song', size: 1562},
{text: 'james', size: 1553},
{text: 'tv', size: 1552},
{text: 'super', size: 1504},
{text: 'i', size: 1502},
{text: 'cooking', size: 1501},
{text: 'smith', size: 1494},
{text: 'none', size: 1487},
{text: 'season', size: 1487},
{text: 'Late', size: 1482},
{text: 'up', size: 1481},
{text: 'fashion', size: 1468},
{text: 'will', size: 1467},
{text: 'movies', size: 1441},
{text: 'christmas', size: 1433},
{text: 'celebrity', size: 1432},
{text: 'dog', size: 1420},
{text: 'Music', size: 1397},
{text: 'cake', size: 1389},
{text: 'talk', size: 1362},
{text: 'full', size: 1345},
{text: 'kids', size: 1339},
{text: 'film', size: 1331},
{text: 'entertainment', size: 1306},
{text: 'top', size: 1296},
{text: 'sports', size: 1274},
{text: 'face', size: 1271},
{text: 'highlights', size: 1262},
{text: 'NBC', size: 1227},
{text: 'car', size: 1220},
{text: 'wars', size: 1219},
{text: 'Pop', size: 1219},
{text: 'ellen', size: 1218},
{text: 'day', size: 1218},
{text: 'TV', size: 1211},
{text: 'x', size: 1206},
{text: 'love', size: 1198},
{text: 'Official', size: 1193},
{text: 'Records', size: 1193},
{text: 'perfect', size: 1184},
{text: 'what', size: 1181},
{text: '10', size: 1177},
{text: 'your', size: 1172},
{text: 'voice', size: 1159},
{text: 'nba', size: 1149},
{text: 'basketball', size: 1147},
{text: 'cats', size: 1133},
{text: 'humor', size: 1121},
{text: 'hot', size: 1112},
{text: 'games', size: 1102},
{text: 'ever', size: 1096},
{text: 'time', size: 1092},
{text: 'late', size: 1091},
{text: 'cute', size: 1090},
{text: 'link', size: 1089},
{text: 'Movie', size: 1088},
{text: 'home', size: 1080},
{text: 'hair', size: 1078},
{text: 'dude', size: 1047},
{text: 'I', size: 1045},
{text: 'do', size: 1045},
{text: 'YouTube', size: 1039},
{text: 'animation', size: 1031},
{text: 'all', size: 1021},
{text: 'liza', size: 1020},
{text: 'rhett', size: 1018},
{text: 'out', size: 1008},
{text: 'people', size: 1004},
{text: 'chocolate', size: 992},
{text: 'man', size: 987},
{text: 'john', size: 986},
{text: 'animals', size: 986},
{text: 'television', size: 982},
{text: 'kitchen', size: 981},
{text: 'good', size: 977},
{text: 'one', size: 975},
{text: 'house', size: 974},
{text: 'team', size: 969},
{text: 'try', size: 967},
{text: 'google', size: 957},
{text: 'every', size: 952},
{text: 'easy', size: 952},
{text: 'panther', size: 951},
{text: 'hollywood', size: 948},
{text: 'fortnite', size: 947}
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
                $("#wordcloud_title").hide();
                currentChart = drawPublishTimeByViewsChart(ctx);
                break;
            case "Publish Time by Video Count":
                currentChart.destroy();
                $("#wordcloud").empty();
                $("#wordcloud_title").hide();
                currentChart = drawPublishTimeByCountChart(ctx);
                break;
            case "Categories by Average Views":
                currentChart.destroy();
                $("#wordcloud").empty();
                $("#wordcloud_title").hide();
                currentChart = drawCategoryByViewsChart(ctx);
                break;
            case "Likes, Dislikes, and Comments":
                currentChart.destroy();
                $("#wordcloud").empty();
                $("#wordcloud_title").hide();
                currentChart = drawDonutChart(ctx);
                break;
            case "Video Tags Word Cloud":
                currentChart.destroy();
                $("#wordcloud").empty();
                $("#wordcloud_title").show();
                drawWordCloud();
                break;
            default:
                console.log("Default");
                currentChart.destroy();
                $("#wordcloud").empty();
                $("#wordcloud_title").hide();
                currentChart = drawPublishTimeByViewsChart(ctx);
                break;
        }
    });
});
