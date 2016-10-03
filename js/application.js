/**
 * Created by ben on 27/09/2016.
 */

console.log("JS working");
var dismissButton = document.getElementById('alert-dismiss');
dismissButton.addEventListener('click', dismissAlert);

function dismissAlert() {
    dismissButton.parentNode.style.display = 'none';
}

var ctx = document.getElementById("myChart");

var data = {
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
};

var options = {
    scales: {
        yAxes: [{
        }]
    },
    responsive: true
};

var myLineChart = new Chart(ctx, {
    type: 'line',
    data: data,
    options: options
});