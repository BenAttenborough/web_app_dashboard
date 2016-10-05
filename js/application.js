/**
 * Created by ben on 27/09/2016.
 */

console.log("JS working");
var dismissButton = document.getElementById('alert-dismiss');
dismissButton.addEventListener('click', dismissAlert);

function dismissAlert() {
    dismissButton.parentNode.style.display = 'none';
}

function notifcationsClickHandlet() {
    var notificationButton = $('#notifications');
    notificationButton.click(showNotifications);
}

function showNotifications() {
    console.log("Handler for .click() called.");
    $('#notifcations-box').toggle();

    //var notificationsBox = '';
    //notificationsBox = '<div id="notifcations-box"></div>';
    //notificationButton.append(notificationsBox);
}

notifcationsClickHandlet();

var notifications = [{
    title: "New user",
    message: "Dan Oliver signed up",
    date: "10/04/16"
}, {
    title: "New post",
    message: "Facebook's Changes for 2016",
    date: "9/24/16"
}, {
    title: "New comment",
    message: "Dawn Wood commented on Facebook's Changes for 2016",
    date: "9/15/16"
}
];

function setupNotifications() {
    var note = '';
    for (var i = 0; i < notifications.length; i++) {
        note += '<div class="notification">' +
            '<p>' + notifications[i].title + ' | ' + notifications[i].date + '</p>' +
            '<p>' + notifications[i].message + '</p>' +
            '<hr>' +
            '</div>';
    }
    $('#notifcations-box').append(note);
}
setupNotifications();

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
                    beginAtZero: true
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

var users = [{
    name: "Victoria Chambers",
    email: "vicotoria.chambers80@example.com",
    joined: "10/15/15",
    activity: {
        type: "post",
        item: "YourApp's SEO Tipss"
    }
}, {
    name: "Dale Byrd",
    email: "dale.byrd52@example.com",
    joined: "10/15/15",
    activity: {
        type: "post",
        item: "YourApp's SEO Tips"
    }
}, {
    name: "Dawn Wood",
    email: "dawn.wood16@example.com",
    joined: "10/15/15",
    activity: {
        type: "post",
        item: "YourApp's SEO Tipss"
    }
}, {
    name: "Dan Oliver",
    email: "dan.oliver82@example.com",
    joined: "10/15/15",
    activity: {
        type: "post",
        item: "YourApp's SEO Tipss"
    }
}];

var activityLog = [{
    user: "Victoria Chambers",
    type: "posted",
    item: "YourApp's SEO Tips",
    date: "10/04/16"
}, {
    user: "Dawn Wood",
    type: "comment",
    item: "Facebook's Changes for 2016",
    date: "10/04/16"
}, {
    user: "Victoria Chambers",
    type: "comment",
    item: "Facebook's Changes for 2016",
    date: "10/04/16"
}, {
    user: "Dan Oliver",
    type: "signup",
    item: "Facebook's Changes for 2016",
    date: "10/04/16"
}
];

function displayNewMembers(count) {
    count = count <= users.length ? count : users.length;
    for (var i = 0; i < count; i++) {
        var memberItem = '<div class="members-item clearfix">' +
            '<div class="member-pic"></div>' +
            '<div class="member-info">' +
            '<p class="member-name">' + users[i].name + '</p>' +
            '<p class="member-email"><a href="mailto:' + users[i].email + '">' + users[i].email + '</a></p>' +
            '</div>' +
            '<div class="member-date"><p>' + users[i].joined + '</p></div>' +
            '</div>';
        $('#member-feed-container').append(memberItem);
    }
}

function displayRecentActivity(count) {
    count = count <= activityLog.length ? count : activityLog.length;

    var postedIcon = 'res/img/posted.svg';
    var commentIcon = 'res/img/comment.svg';
    var signupIcon = 'res/img/signup.svg';
    var activityIcon = '<div class="activity-icon"><img src="' + postedIcon + '"></div>';

    for (var i = 0; i < count; i++) {
        var activityText = '';
        var activity = activityLog[i].type;
        switch (activity) {
            case 'posted':
                activityText = 'posted ' + activityLog[i].item;
                activityIcon = '<div class="activity-icon"><img src="' + postedIcon + '"></div>';
                break;
            case 'comment':
                activityText = 'commented on ' + activityLog[i].item;
                activityIcon = '<div class="activity-icon"><img src="' + commentIcon + '"></div>';
                break;
            case 'signup':
                activityText = 'signed up!';
                activityIcon = '<div class="activity-icon"><img src="' + signupIcon + '"></div>';
                break;
            default:
                activityText = 'performed an unknown activity';
        }

        var memberItem = '<div class="members-item clearfix">' +
            activityIcon +
            '<div class="member-info">' +
                //'<p class="member-activity">' + activityLog[i].user + ' ' + activityLog[i].type + ' ' + activityLog[i].item + ' </p>' +
            '<p class="member-activity">' + activityLog[i].user + ' ' + activityText + '</p>' +
            '<p class="member-activity-date">' + activityLog[i].date + '</p>' +
            '</div>' +
            '</div>';
        $('#activity-feed-container').append(memberItem);
    }
}

displayNewMembers(4);
displayRecentActivity(4);