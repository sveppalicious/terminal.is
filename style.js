
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
})
