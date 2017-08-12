var fromValue = 6;

getData(0, 5, parseData);

function getData(fromValue, size){
    console.log('calling function');
    var dataUrl = 'https://api.jugofpunch.com/dev/booze?from=' + fromValue + '&to=' + size;    
    var oReq = new XMLHttpRequest();
    oReq.addEventListener("load", parseData);
    oReq.open("GET", dataUrl);
    oReq.send();
}

function getAppendData(fromValue, size){
    console.log('calling function');
    var dataUrl = 'https://api.jugofpunch.com/dev/booze?from=' + fromValue + '&to=' + size;    
    var oReq = new XMLHttpRequest();
    oReq.addEventListener("load", parseAppendData);
    oReq.open("GET", dataUrl);
    oReq.send();
}

function parseData(){
    console.log('called back');
    var gotData = JSON.parse(this.responseText);
    console.log(gotData);
    buildResultsTable(gotData);
}

function parseAppendData(){
    console.log('append called');
    var gotData = JSON.parse(this.responseText);
    buildAppendResults(gotData);
}

function buildResultsTable(data){
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
    var button = document.createElement("button");
    button.innerHTML = "Load More Results";
    body.appendChild(button);
    button.addEventListener("click", handleButton);
}


function handleButton(event){
    // display the current click count inside the clicked div
    fromValue += 5;
    console.log(fromValue);
    getAppendData(fromValue, 5, parseAppendData);
}


function buildAppendResults(data) {
    var	tbl = document.getElementsByTagName("table")[0];
    for (var i in data['hits']) {
    var newRow = tbl.insertRow(-1);
    var newCell = newRow.insertCell(0);
    var newText = document.createTextNode(data['hits'][i]['brand_name']);
    newCell.appendChild(newText);
    var newCell = newRow.insertCell(1);
    var cellStoreName = document.createTextNode(data['hits'][i]['store_name']);
    var cellAddress = document.createTextNode(data['hits'][i]['address']);
	var cellCityStateZip = document.createTextNode(data['hits'][i]['city'] + ', Ohio ' + data['hits'][i]['zip']);
	var cellPhone = document.createTextNode(data['hits'][i]['phone']);
	newCell.appendChild(document.createElement("br"));
	newCell.appendChild(cellStoreName);
        newCell.appendChild(document.createElement("br"));
        newCell.appendChild(cellAddress);
        newCell.appendChild(document.createElement("br"));
        newCell.appendChild(cellCityStateZip);
        newCell.appendChild(document.createElement("br"));
        newCell.appendChild(cellPhone);}}


