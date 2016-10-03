/**
 * Created by ben on 27/09/2016.
 */

console.log("JS working");
var dismissButton = document.getElementById('alert-dismiss');
dismissButton.addEventListener('click', dismissAlert);

function dismissAlert() {
    dismissButton.parentNode.style.display = 'none';
}

var visitorsChart = {
    ctx: document.getElementById("chart-visitors"),
    type: 'line',
    data: {
        labels: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December", "January"],
        datasets: [
            {
                label: "Traffic",
                fill: true,
                lineTension: 0,
                backgroundColor: "rgba(116,119,191,0.4)",
                borderColor: "rgba(115,119,191,1)",
                borderCapStyle: 'butt',
                borderDash: [],
                borderDashOffset: 0.0,
                borderJoinStyle: 'miter',
                pointBorderColor: "rgba(115,119,191,1)",
                pointBackgroundColor: "#fff",
                pointBorderWidth: 1,
                pointHoverRadius: 5,
                pointHoverBackgroundColor: "rgba(116,119,191,1)",
                pointHoverBorderColor: "rgba(115,119,191,1)",
                pointHoverBorderWidth: 2,
                pointRadius: 5,
                pointHitRadius: 10,
                data: [0, 750, 1250, 1000, 1500, 2000, 1500, 1750, 1250, 1750, 2250, 1750, 2250],
                spanGaps: false,
            }
        ]
    },
    options: {
        scales: {
            yAxes: [{}]
        },
        responsive: true
    }
};

var myVisitorsChart = new Chart(visitorsChart.ctx, {
    type: visitorsChart.type,
    data: visitorsChart.data,
    options: visitorsChart.options
});

var trafficChart = {
    ctx: document.getElementById("chart-traffic"),
    type: 'bar',
    data: {
        labels: ["S", "M", "T", "W", "T", "F", "S"],
        datasets: [
            {
                label: "Daily Traffic",
                backgroundColor: "rgba(116,119,191,1)",
                data: [75, 100, 275, 125, 225, 200, 100],
            }
        ]
    },

    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero:true
                }
            }]
        },
        responsive: true
    }
};

var myTrafficChart = new Chart(trafficChart.ctx, {
    type: trafficChart.type,
    data: trafficChart.data,
    options: trafficChart.options
});