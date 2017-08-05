var fromValue = 0;
var toValue = 10;

window.onload = getData(fromValue, toValue);

function getData(fromValue, toValue){
    var dataUrl = 'https://api.jugofpunch.com/dev/booze?from=' + fromValue + '&to=' + toValue;
    var XHR = new XMLHttpRequest();
    XHR.addEventListener("load", function(event) {
    document.getElementById("results").innerHTML = "";
	var resultsTemplate = document.getElementById("results-template").innerHTML;
	  var template = Handlebars.compile(resultsTemplate);
	  console.log(event.target.responseText);
	var data = JSON.parse(event.target.responseText);
	if (data.length !== 0) {
        var searchResults = template(data);
	document.getElementById("results").innerHTML += searchResults;
		document.getElementById("results").innerHTML = "<h2>No results Found</h2>";}
    });
    XHR.addEventListener("error", function(event) {
      alert('Oups! Something goes wrong.');
    });
    XHR.open('GET', dataUrl);
    XHR.send();
}
    






