var dataUrl = 'https://api.jugofpunch.com/dev/booze?from=0&to=10';
var oReq = new XMLHttpRequest();
oReq.open("GET", dataUrl);
oReq.send();

oReq.addEventListener("load", function(event){
    var data = JSON.parse(event.target.responseText);
    // get the reference for the body
    var body = document.getElementsByTagName("body")[0];
 
    // creates a <table> element and a <tbody> element
    var tbl = document.createElement("table");
    var tblHead = document.createElement("thead");
    var tblBody = document.createElement("tbody");

    var head = document.createElement("tr");
    var cell = document.createElement("th");
    var cellText = document.createTextNode("Brand Name");
    head.appendChild(cell);
    cell.appendChild(cellText);
    tblHead.appendChild(head);

    var cell = document.createElement("th");
    var cellText = document.createTextNode("Store Info");
    head.appendChild(cell);
    cell.appendChild(cellText);
    tblHead.appendChild(head);
            for (var i in data['hits']) {
            var row = document.createElement("tr");
            var cell = document.createElement("td");
            var cellText = document.createTextNode(data['hits'][i]['brand_name']);
            cell.appendChild(cellText);
            row.appendChild(cell);
            tblBody.appendChild(row);

            // Creating Store Info
            var cell = document.createElement("td");
            var cellStoreName = document.createTextNode(data['hits'][i]['store_name']);
	    var cellAddress = document.createTextNode(data['hits'][i]['address']);
	    var cellCityStateZip = document.createTextNode(data['hits'][i]['city'] + ', Ohio ' + data['hits'][i]['zip']);
		
            cell.appendChild(document.createElement("br"));
            var cellPhone = document.createTextNode(data['hits'][i]['phone']);
            cell.appendChild(cellStoreName);
            cell.appendChild(document.createElement("br"));
            cell.appendChild(cellAddress);
            cell.appendChild(document.createElement("br"));
            cell.appendChild(cellCityStateZip);
            cell.appendChild(document.createElement("br"));
            cell.appendChild(cellPhone);
		
            row.appendChild(cell);
            tblBody.appendChild(row);}

  tbl.appendChild(tblHead);
  tbl.appendChild(tblBody);
    body.appendChild(tbl);

    // Add button
    var button = document.createElement("button");
    button.innerHTML = "Load More Results";
    body.appendChild(button);
    button.addEventListener("click", function(fromValue, toValue){
	var fromValue = 0;
	fromValue += 500;
	console.log(fromValue);
        var toValue = 10;
	toValue += 510;
	console.log(toValue);
	var updateUrl = 'https://api.jugofpunch.com/dev/booze?from=' + fromValue + '&to=' + toValue;
	console.log(updateUrl);
        var uReq = new XMLHttpRequest();
        uReq.open("GET", updateUrl);
        uReq.send();
    var data = JSON.parse(event.target.responseText);
		    for (var i in data['hits']) {
    var newRow = tbl.insertRow(-1);
    var newCell = newRow.insertCell(0);
    var newText = document.createTextNode(data['hits'][i]['brand_name']);
    newCell.appendChild(newText);
    var newCell = newRow.insertCell(1);
    var newText = document.createTextNode(data['hits'][i]['store_name']);
    newCell.appendChild(newText);
    var newCell = newRow.insertCell(2);
    var newText = document.createTextNode(data['hits'][i]['address']);
    newCell.appendChild(newText);
    var newCell = newRow.insertCell(3);
    var newText = document.createTextNode(data['hits'][i]['city']);
    newCell.appendChild(newText);
    var newCell = newRow.insertCell(4);
    var newText = document.createTextNode(data['hits'][i]['zip']);
    newCell.appendChild(newText);
    var newCell = newRow.insertCell(5);
    var newText = document.createTextNode(data['hits'][i]['phone']);
			newCell.appendChild(newText);}});

    
});



    


