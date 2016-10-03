/**
 * Created by ben on 27/09/2016.
 */

console.log("JS working");
var dismissButton = document.getElementById('alert-dismiss');
dismissButton.addEventListener('click', dismissAlert);

function dismissAlert() {
    dismissButton.parentNode.style.display = 'none';
}

var colorLight = {
    rgb: '116,119,191',
    hex: '#7477BF'
};

var colorMed = {
    rgb: '129,201,143',
    hex: '#81C98F'
};


var colorDark = {
    rgb: '77,76,114',
    hex: '#4D4C72'
};

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
                backgroundColor: "rgba(" + colorLight.rgb + ",0.4)",
                borderColor: "rgba(" + colorLight.rgb + ",1)",
                borderCapStyle: 'butt',
                borderDash: [],
                borderDashOffset: 0.0,
                borderJoinStyle: 'miter',
                pointBorderColor: "rgba(" + colorLight.rgb + ",1)",
                pointBackgroundColor: "#fff",
                pointBorderWidth: 1,
                pointHoverRadius: 5,
                pointHoverBackgroundColor: "rgba(" + colorLight.rgb + ",1)",
                pointHoverBorderColor: "rgba(" + colorLight.rgb + ",1)",
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
        responsive: true,
        legend: {
            display: false
        }
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
                backgroundColor: "rgba(" + colorLight.rgb + ",1)",
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
        responsive: true,
        legend: {
            display: false
        }
    }
};

var myTrafficChart = new Chart(trafficChart.ctx, {
    type: trafficChart.type,
    data: trafficChart.data,
    options: trafficChart.options
});

var mobileUsersChart = {
    ctx: document.getElementById("chart-mobile"),
    type: 'doughnut',
    data: {
        labels: ["Phones", "Tablets", "Desktop"],
        datasets: [
            {
                label: "Mobile Users",
                backgroundColor: "rgba(116,119,191,1)",
                data: [15, 10, 75],
                backgroundColor: [
                    colorLight.hex,
                    colorMed.hex,
                    colorDark.hex
                ]
            }
        ]
    },

    options: {
        responsive: true,
        legend: {
            position: 'right'
        }
    }
};

var myMobileChart = new Chart(mobileUsersChart.ctx, {
    type: mobileUsersChart.type,
    data: mobileUsersChart.data,
    options: mobileUsersChart.options
});