$.ajax({
    url: 'https://apis.is/flight?language=en&type=departures',
    type: 'GET',
    dataType: "json",
    departureData: {
        'language': 'en',
        'type': 'departures'
    },
    cache: "false",
    success: function(departureData) {
        departureData = departureData.results;
        drawDepartureTable(departureData);
    }
});

function drawDepartureTable(departureData) {
    for (var i = 0; i < departureData.length; i++) {
        drawDepartureRow(departureData[i]);
    }
}

function drawDepartureRow(rowDepartureData) {
    var row = $("<tr />")
    $("#departures").append(row); //this will append tr element to table... keep its reference for a while since we will add cels into it
    //row.append("<td class='mdl-data-table__cell--non-numeric'>" + rowData.date + "</td>");
    row.append("<td data-title='Flight' class='mdl-data-table__cell--non-numeric'>" + rowDepartureData.flightNumber + "</td>");

    row.append("<td data-title='Airline' class='mdl-data-table__cell--non-numeric'>" + rowDepartureData.airline + "</td>");

    row.append("<td data-title='To' class='mdl-data-table__cell--non-numeric'>" + rowDepartureData.to + "</td>");

    row.append("<td data-title='Departure'>" + rowDepartureData.plannedArrival + "</td>");

    if (rowDepartureData.realArrival === "") {
        row.append("<td data-title='Status' class='mdl-data-table__cell--non-numeric'>" + "On time" + "</td>");
    } else {
        row.append("<td data-title='Status' class='mdl-data-table__cell--non-numeric'>" + rowDepartureData.realArrival + "</td>");
    }

}
