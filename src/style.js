$(document).ready(function() {
    var monthNames = [
        "January", "February", "March",
        "April", "May", "June", "July",
        "August", "September", "October",
        "November", "December"
    ];
    var weekDays = [
        "Sunday", "Monday", "Tuesday",
        "Wednesday", "Thursday", "Friday",
        "Saturday"
    ]
    var date = new Date();
    var day = date.getDate();
    var weekIndex = date.getDay();
    var monthIndex = date.getMonth();
    $("#date1").append(weekDays[weekIndex] + ", " + day + " " + monthNames[monthIndex]);
    $("#date2").append(weekDays[weekIndex] + ", " + day + " " + monthNames[monthIndex]);
});
$(document).ready(function () {

    (function ($) {

        $('#filter').keyup(function () {

            var rex = new RegExp($(this).val(), 'i');
            $('.searchable tr').hide();
            $('.searchable tr').filter(function () {
                return rex.test($(this).text());
            }).show();

        })

    }(jQuery));

});
