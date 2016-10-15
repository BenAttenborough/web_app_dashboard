/**
 * Created by ben on 27/09/2016.
 */

console.log("JS working");
var dismissButton = $('#alert-dismiss');
$('#alert-dismiss').click(dismissAlert);

function dismissAlert() {
    $('#alert-box').hide();
}

function notifcationsClickHandlet() {
    var notificationButton = $('#notifications');
    notificationButton.click(showNotifications);
}

function showNotifications() {
    $('#notifications-alert').hide();
    $('#notifcations-box').toggle();
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

var colorFour = {
    rgb: '0,153,51',
    hex: '#009933'
};

var visitorsChart = {
    ctx: document.getElementById("chart-visitors"),
    type: 'line',
    defaultData: {
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
    specificData: {
        hourlyData: {
            labels: ["00:00", "01:00", "02:00", "03:00", "04:00", "05:00", "06:00", "07:00", "08:00", "09:00", "10:00", "11:00", "12:00", "13:00", "14:00", "15:00", "16:00", "17:00", "18:00", "19:00", "20:00", "21:00", "22:00", "23:00"],
            data: [0, 1, 1, 0, 0, 0, 0, 1, 2, 5, 6, 2, 3, 0, 0, 4, 4, 2, 4, 1, 0, 2, 2, 1]
        },
        dailyData: {
            labels: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
            data: [60, 83, 72, 56, 90, 73, 75]
        },
        weeklyData: {
            labels: ["Week 1", "Week 2", "Week 3", "Week 4"],
            data: [454, 532, 512, 440]
        },
        monthlyData: {
            labels: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December", "January"],
            data: [0, 750, 1250, 1000, 1500, 2000, 1500, 1750, 1250, 1750, 2250, 1750, 2250]
        }
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

var hourlyData = {
    labels: ["00:00", "01:00", "02:00", "03:00", "04:00", "05:00", "06:00", "07:00", "08:00", "09:00", "10:00", "11:00", "12:00", "13:00", "14:00", "15:00", "16:00", "17:00", "18:00", "19:00", "20:00", "21:00", "22:00", "23:00"],
    data: [15, 4, 3, 0, 0, 4, 8, 23, 45, 67, 121, 344, 555, 300, 333, 566, 744, 465, 345, 456, 567, 563, 320, 210]
};

var myVisitorsChart = new Chart(visitorsChart.ctx, {
    type: visitorsChart.type,
    data: visitorsChart.defaultData,
    options: visitorsChart.options
});

var trafficChart = {
    ctx: document.getElementById("chart-traffic"),
    type: 'bar',
    data: {
        labels: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sun"],
        datasets: [
            {
                label: "This Week's Traffic",
                backgroundColor: "rgba(" + colorLight.rgb + ",1)",
                data: [75, 100, 275, 125, 225, 200, 100]
            }, {
                label: "Last Week's Traffic",
                backgroundColor: "rgba(" + colorMed.rgb + ",1)",
                data: [45, 112, 234, 134, 125, 231, 98]
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
        labels: ["Phones", "Phablets", "Tablets", "Desktop"],
        datasets: [
            {
                label: "Mobile Users",
                backgroundColor: "rgba(116,119,191,1)",
                data: [15, 6, 10, 69],
                backgroundColor: [
                    colorLight.hex,
                    colorMed.hex,
                    colorFour.hex,
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
    pic: "victoriachambers",
    joined: "10/15/15",
    activity: {
        type: "post",
        item: "YourApp's SEO Tipss"
    }
}, {
    name: "Dale Byrd",
    email: "dale.byrd52@example.com",
    pic: "dalebyrd",
    joined: "10/15/15",
    activity: {
        type: "post",
        item: "YourApp's SEO Tips"
    }
}, {
    name: "Dawn Wood",
    email: "dawn.wood16@example.com",
    pic: "dawnwood",
    joined: "10/15/15",
    activity: {
        type: "post",
        item: "YourApp's SEO Tipss"
    }
}, {
    name: "Dan Oliver",
    email: "dan.oliver82@example.com",
    pic: "danoliver",
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
            '<div class="member-pic" style="background-image: url(res/img/users/' + users[i].pic + '.jpg)"></div>' +
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

var TrafficButton = function (element, data) {
    this.element = element;
    this.name = element.attr('id');
    this.data = data;
    this.init();
};

TrafficButton.prototype.updateTrafficChart = function () {
    for (var button in trafficButtons) {
        $(trafficButtons[button].element).removeClass('selected');
    }
    $(this.element).addClass('selected');
    myVisitorsChart.data.datasets[0].data = this.data.data;
    myVisitorsChart.data.labels = this.data.labels;
    myVisitorsChart.update();
};

TrafficButton.prototype.addSelectListener = function () {
    self = this;
    this.element.click(this.updateTrafficChart.bind(self));
};

TrafficButton.prototype.init = function () {
    this.addSelectListener();
};

var trafficButtons = {
    hourlyTraffic: new TrafficButton($('#traffic-hourly'), visitorsChart.specificData.hourlyData),
    dailyTraffic: new TrafficButton($('#traffic-daily'), visitorsChart.specificData.dailyData),
    weeklyTraffic: new TrafficButton($('#traffic-weekly'), visitorsChart.specificData.weeklyData),
    monthlyTraffic: new TrafficButton($('#traffic-monthly'), visitorsChart.specificData.monthlyData)
};

// Autocomplete

function autoComplete(container, dataset) {
    var self = this;
    var haystack = [];
    for (var i = 0; i < dataset.length; i++) {
        haystack.push(dataset[i].toLowerCase());
    }
    $(container).keyup(function () {
        if (container.val().length === 0) {
            $('#searchSuggestions').html("");
        } else {
            var needle = container.val().toLowerCase();
            $('#searchSuggestions').show();
            matchedNames = "";
            for (var i = 0; i < haystack.length; i++) {
                if (haystack[i].indexOf(needle) != -1) {
                    matchedNames += "<p class='matched-name'>" + dataset[i] + "</p>";
                }
            }
            $('#searchSuggestions').html(matchedNames);
            bindAutoCompleteEventHandler($('#searchSuggestions'), container);
        }
    });
}
//
function bindAutoCompleteEventHandler(container, searchElement) {
    //console.log(container.find('.matched-name'));
    var names = container.find('.matched-name');
    for (var i =0; i < names.length; i++) {
        $(names[i]).click(function() {
            //console.log(this.innerHTML);
            //console.log(searchElement.val());
            searchElement.val(this.innerHTML);
            $('#searchSuggestions').hide();
        })
    }
}

var searchBox = $('#message-container');
searchBox = searchBox.find("#name");

var namesList = [];
for (var i = 0; i < users.length; i++) {
    namesList.push(users[i].name);
}
console.log(namesList);

autoComplete(searchBox, namesList);

$(searchBox).blur(function() {
    if ($('#searchSuggestions').is(":hover") === false){
        $('#searchSuggestions').hide();
    }
});

function verifyMessage() {
    var message = $('textarea#message').val();
    return message.length;
}

function verifyUser() {
    var user = $('input#name').val();
    console.log( $('input#name').val() );
    for (var i = 0; i < namesList.length; i++) {
        //console.log("nameList: " + namesList[i]);
        //console.log("user: " + user);
        if (namesList[i] == user) {
            console.log("verified");
            return true;
        }
    }
    return false;
}

function styleWarning () {
    $('#messageAlert').css("background-color", "red");
}


function styleVerify () {
    $('#messageAlert').css("background-color", "#81c98f");
}



$('#message-submit').click(function(){
    event.preventDefault();
    if (verifyUser() && verifyMessage()) {
        styleVerify();
        $('#messageAlert').html("Message has been sent!");
        $('#messageAlert').show();
        $('input#name').css("background-color", "#f2f2f2");
        $('input#name').val("");
        $('textarea#message').css("background-color", "#f2f2f2");
        $('textarea#message').val("");
    } else {
        if (!verifyUser()) {
            styleWarning();
            $('#messageAlert').html("Error: No user found");
            $('#messageAlert').show();
            $('input#name').css("background-color", "#ffcccc");
        }
        if (!verifyMessage()) {
            styleWarning();
            $('#messageAlert').html("Error: Please write a message");
            $('#messageAlert').show();
            $('textarea#message').css("background-color", "#ffcccc");
        }
    }
});


function supportsLocalStorage() {
    try {
        return 'localStorage' in window && window['localStorage'] !== null;
    } catch(e) {
        return false;
    }
}

function verifySetting(setting) {
    if (setting === 'true') {
        return true;
    } else {
        return false;
    }
}

function getSettings() {
    var sendEmailSetting = verifySetting(localStorage.getItem('sendEmail'));
    var publicProfileSetting = verifySetting(localStorage.getItem('publicProfile'));
    var timezone = localStorage.getItem('timezone') || 'UTC-0';
    //var timezoneSetting =
    $('#email-notifications').prop( "checked", sendEmailSetting );
    $('#public-profile').prop( "checked", publicProfileSetting );
    $('#timezone').val(timezone);
    console.log(timezone);
}
getSettings();

function saveSettings() {
    var emailCheckbox = 'false';
    var publicProfileCheckbox = 'false';
    //Get value of settings
    if ($('#email-notifications:checked').val() === '1' ) {
        emailCheckbox = 'true';
    }
    if ($('#public-profile:checked').val() === '1' ) {
        publicProfileCheckbox = 'true';
    }
    var timezoneOption = $('#timezone').val();

    console.log(timezoneOption);

    localStorage.setItem('sendEmail', emailCheckbox);
    localStorage.setItem('publicProfile', publicProfileCheckbox);
    localStorage.setItem('timezone', timezoneOption);
    $('#settingsAlert').show();
}

function setupLocalStorage() {
    if (supportsLocalStorage()) {
        console.log("Local storage possible");
        saveSettings();
    }
}


var submitButton = $('#settingsSubmit');

$(submitButton).click(function () {
    event.preventDefault();
    console.log("Settings submitted");
    setupLocalStorage();
});

$('#settingsDecline').click(function(){
    event.preventDefault();
    if (confirm('Really reset settings?')) {
        localStorage.removeItem('sendEmail');
        localStorage.removeItem('publicProfile');
        localStorage.removeItem('timezone');
        getSettings();
    }
});