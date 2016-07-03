$.ajax({
    url: 'http://apis.is/flight',
    type: 'GET',
    dataType: "json",
    arrivalData: {
        json: {
            'language': 'en',
            'type': 'arrivals'
        },

    },
    success: function(arrivalData) {
        arrivalData = arrivalData.results;
        drawArrivalTable(arrivalData);
    }
});

function drawArrivalTable(arrivalData) {
    for (var i = 0; i < arrivalData.length; i++) {
        drawArrivalRow(arrivalData[i]);
    }
}
function drawArrivalRow(rowArrivalData) {
    var row = $("<tr />")
    $("#arrivals").append(row); //this will append tr element to table... keep its reference for a while since we will add cels into it
    //row.append("<td class='mdl-data-table__cell--non-numeric'>" + rowData.date + "</td>");
    row.append("<td data-title='Flight' class='flightNum mdl-data-table__cell--non-numeric'>" + rowArrivalData.flightNumber + "</td>");

    row.append("<td data-title='Airline' class='flightAirline mdl-data-table__cell--non-numeric'>" + rowArrivalData.airline + "</td>");

    row.append("<td data-title='From' class='flightFrom mdl-data-table__cell--non-numeric'>" + rowArrivalData.from + "</td>");
    var time = currentTime();
    if (time < (rowArrivalData.plannedArrival)) {
      row.append("<td id='target-element' data-title='Arrival'class='flightArrival'>" + rowArrivalData.plannedArrival + "</td>");
    } else {
    row.append("<td data-title='Arrival'class='flightArrival'>" + rowArrivalData.plannedArrival + "</td>"); }

    if (rowArrivalData.realArrival === "") {
      row.append("<td data-title='Status' class='flightStatus mdl-data-table__cell--non-numeric'>" + "On time" + "</td>");
    } else {
      row.append("<td data-title='Status' class='flightStatus mdl-data-table__cell--non-numeric'>" + rowArrivalData.realArrival + "</td>");
    }

}
function addZero(i) {
    if (i < 10) {
        i = "0" + i;
    }
    return i;
}

function currentTime() {
    var d = new Date();
    var h = addZero(d.getHours());
    var m = addZero(d.getMinutes());
    var time = h + ":" + m;
    return time;
}
