// *** Variables setup *** //

// Initializing and assigning default values to variables.
var apikey = "8jytc2dmqf5mrb8vpxaz9mjz";
var count = 1;
var currentTitles = {};
var h;
var headlineNumber;
var httpRequest;
var intervID;
var section;
var sections = Session.get("sections");
var requestTimer;
var tab;
var tabCount;

/*
var toggler = {
	1: 0,
	2: 0,
	3: 0,
	4: 0,
	5: 0,
	6: 0,
	7: 0,
	8: 0,
	9: 0,
	10: 0
}
*/
// --- End variables setup --- //



// *** Onload functions *** //

// onload grab session values
window.onload = function() {
	h = Session.get("h") || 10;
	headlineNumber = Session.get("headlineNumber") || undefined;
	intervID = Session.get("intervID") || undefined;
	for (var i = 1; i < 7; i++) {
		sections[i] = Session.get("sections" + [i]) || sections[i]
		console.log(sections[i])
	}
	requestTimer = Session.get("requestTimer") || "none";
	tabCount = Session.get("tabCount") || 3;

	// Setting the DOM up with the loaded variables
	for (var i = 1; i < 7; i++) {
 		document.getElementById("TopTab" + i).innerHTML = sections[i];
 	}
 	for (var i = 1; i < (tabCount+1); i++) {
 		var temp2 = document.getElementById("myButton" + i);
		temp2.className += " " + "visible";
		document.getElementById("field" + i).disabled = false
 	};
};

/* Optional function to populate the news page on initial load
document.onload = function () {clickOperation(0, "news")};
element.onload ?
*/

// --- End onload functions --- //



// *** Onclick functions *** //

// (TYPE 1) Tab onclicks
document.getElementById("myButton1").onclick = function() {clickOperation(1, sections[1])};
document.getElementById("myButton2").onclick = function() {clickOperation(2, sections[2])};
document.getElementById("myButton3").onclick = function() {clickOperation(3, sections[3])};
document.getElementById("myButton4").onclick = function() {clickOperation(4, sections[4])};
document.getElementById("myButton5").onclick = function() {clickOperation(5, sections[5])};
document.getElementById("myButton6").onclick = function() {clickOperation(6, sections[6])};
document.getElementById("myButtonHome").onclick = function() {clickOperation(0, "news")};
document.getElementById("myButtonConfig").onclick = function() {
  makeRequest("config", "http://content.guardianapis.com/sections?api-key=" + apikey);
};

//Story button dropdown onclicks 
/*
var dropperClick = function () {
	document.getElementById("dropper" + i).onclick = function() {toggleText(i)};
	document.getElementById("dropper2").onclick = function() {toggleText(2)};
	document.getElementById("dropper3").onclick = function() {toggleText(3)};
	document.getElementById("dropper4").onclick = function() {toggleText(4)};
	document.getElementById("dropper5").onclick = function() {toggleText(5)};
	document.getElementById("dropper6").onclick = function() {toggleText(6)};
	document.getElementById("dropper7").onclick = function() {toggleText(7)};
	document.getElementById("dropper8").onclick = function() {toggleText(8)};
	document.getElementById("dropper9").onclick = function() {toggleText(9)};
	document.getElementById("dropper10").onclick = function() {toggleText(10)};
}; 
*/

// (TYPE 2) Config: Saving section choice onclicks
document.getElementById("SaveSection1").onclick = function() {buttonOperation(1)};
document.getElementById("SaveSection2").onclick = function() {buttonOperation(2)};
document.getElementById("SaveSection3").onclick = function() {buttonOperation(3)};
document.getElementById("SaveSection4").onclick = function() {buttonOperation(4)};
document.getElementById("SaveSection5").onclick = function() {buttonOperation(5)};
document.getElementById("SaveSection6").onclick = function() {buttonOperation(6)};

// (TYPE 3) Config: Storing number of stories on click on the save button
document.getElementById("SaveStories").onclick = function() {
	h = document.getElementById("storyNum").value;
	Session.set("h", h)
};

// (TYPE 3) Config: Storing save interval on click on the save button, starting the timer
document.getElementById("SaveTimer").onclick = function() {
	window.clearInterval(intervID);
	requestTimer = (document.getElementById("Timer").value * 6000) || "nope";
	if (requestTimer !== "nope") {
		intervID = setInterval(headlineLooper, requestTimer);
		Session.set("intervID", intervID)
	}	
};

// (TYPE 3) Config: Resetting settings with a click on the default button, clear session variables
document.getElementById("Defaults").onclick = function() {
	Session.clear();
	window.clearInterval(intervID);
    //reset variables, set tab names, disable tabs.
	h = 10;
	Session.set("h", h);
	sections[1] = "football",
	sections[2] = "uk-news";
	sections[3] = "travel";
	sections[4] = "weather";
	sections[5] = "business";
	sections[6] = "sport";
	Session.set("sections", sections);

	// TabResetter group
 	for (var i = 1; i < (tabCount+1); i++) {
 		document.getElementById("TopTab" + i).innerHTML = sections[i];
 	};
  	tabCount = 3;
  	Session.set("tabCount", tabCount);
 	for (var i = 1; i < 7; i++) {
 		document.getElementById("field" + i).disabled = (i > tabCount) ? true : false
 		document.getElementById("myButton" + i).className = (i > tabCount) ? "presentation col-md-2" : "presentation col-md-2 visible";
	}
	
};

// (TYPE 3) Config: Plus and Minus click functions
document.getElementById("plus").onclick = function() {
	if (tabCount === 6) alert("Tab maximum");
	else if (tabCount < 6) {
		console.log(tabCount);
		tabCount += 1;
		Session.set("tabCount", tabCount);
		console.log(tabCount);
		var temp2 = document.getElementById("myButton" + tabCount);
		temp2.className += " " + "visible";
		document.getElementById("field" + tabCount).disabled = false
	}
	
};

document.getElementById("minus").onclick = function() {
	if (tabCount > 0) {
		var temp2 = document.getElementById("myButton" + tabCount);
		temp2.className = "presentation col-md-2";
		document.getElementById("field" + tabCount).disabled = true;
		tabCount -= 1
		Session.set("tabCount", tabCount);
	}
	else alert("Tab minimum");
};

// --- End onclick functions --- //



// *** Setting up functions to determine how user actions (clicks) should be dealt with  *** //

// (TYPE 1) Tab clicks: Making an AJAX request each tab click, assigning stored variables to request-maker variables.
var clickOperation = function(t, s) { 
  tab = t;
  section = s;
  headlineNumber = h;
  Session.set("t", t);
  Session.set("s", s);
  Session.set("h", h);
  makeRequest("content", "http://content.guardianapis.com/search?api-key=" + apikey + "&show-fields=trail-text&pagesize=" + headlineNumber + "&order-by=newest&section=" + section); 
};

// (TYPE 3) Config button clicks: grabbing selected dropdown option and assigning the text to the top tab.
var buttonOperation = function(n) {
  var temp = document.getElementById("SectionValue" + n);
  sections[n] = temp.options[temp.selectedIndex].text;
  Session.set("sections", sections);
  document.getElementById("TopTab" + n).innerHTML = temp.options[temp.selectedIndex].text
};

// (TYPE 3) Intervals : Making an AJAX request at chosen intervals, assigning stored variables to request-maker variables.
var headlineLooper = function() {
	url = "http://content.guardianapis.com/search?api-key=" + apikey + "&page-size=1&order-by=newest&section=" + sections[count];
	makeRequest("titleCheck", url);
};

// Title button clicks: Setting toggle states for the trailText object
/*
var toggleText = function(n) {
	for (var i = 1; i < 11; i++) {
		document.getElementById("droppee" + i).className = "trailer";
		document.getElementById("dropper" + i).className = "headliner";
		toggler[i] = 0
	};
	if (toggler[n] === 0) {
		document.getElementById("droppee" + n).className = "visible";
		document.getElementById("dropper" + n).className = "headliner2";
		toggler[n] = 1
	}
	else if (toggler[n] === 1) {
		document.getElementById("droppee" + n).className = "trailer";
		document.getElementById("dropper" + n).className = "headliner";
		toggler[n] = 0	
	}
}
*/

// --- End functions for use by click events --- //



// *** Setting up AJAX request and response-processing functions *** //

// (TYPE ALL) Setting up the AJAX request function: 'type' is an input that may be "config", "content" or "titleCheck".
// The if/else statements are for browser functionality.
var makeRequest = function(type, url) {
  	if (window.XMLHttpRequest) {httpRequest = new XMLHttpRequest()} 
  	else if (window.ActiveXObject) { 
	    try {httpRequest = new ActiveXObject("Msxml2.XMLHTTP")} 
	    catch (e) {
	      try {httpRequest = new ActiveXObject("Microsoft.XMLHTTP")} 
	      catch (e) {console.log("whoops")}
    	}
  	}
  	if (!httpRequest) {
    	alert('Giving up :( Cannot create an XMLHTTP instance');
    	return false;
	}
	if (type === "config") {
		httpRequest.onreadystatechange = alertConfig 
	}
	else if (type === "content") {
		httpRequest.onreadystatechange = alertContents	
	}
	else if (type === "titleCheck") {
		httpRequest.onreadystatechange = alertChecker
	} 
	httpRequest.open('GET', url);
	httpRequest.send();
};

// (TYPE 1) If/else - checking the contents request was successful and where to pass the data to for processing.
var alertContents = function() {
  	if (httpRequest.readyState === 4 && httpRequest.status === 200) {
      		responsePumper();	
		} 
    else if (httpRequest.readyState === 4 && httpRequest.status !== 200) {
    	alert('There was a problem with the request.')
    }
}

// (TYPE 2) If/else - checking the config request was successful and where to pass the data to for processing.
var alertConfig = function() {
  	if (httpRequest.readyState === 4 && httpRequest.status === 200) {
	    configPopulator(); 
	}
    else if (httpRequest.readyState === 4 && httpRequest.status !== 200) {
    	alert('There was a problem with grabbing configuration options.')
    }
}

// (TYPE 3) If/else - checking the interval headline request was successful and where to pass the data to for processing.
var alertChecker = function() {
	if (httpRequest.readyState === 4 && httpRequest.status === 200) {
      		headlineChecker();	
	} 
    else if (httpRequest.readyState === 4 && httpRequest.status !== 200) {
    	alert('Problem checking for new headlines!')
	}
}

// (TYPE 1) Processing the content type AJAX response and injecting relevant elements into the DOM (current news tab)
var responsePumper = function() {
	var title = JSON.parse(httpRequest.response);
	var headLine = "";
	if (title.response.results.length !== 0) {
		// currentTitles[t] = title.response.results[0].webTitle;
		for (var i = 0; i < headlineNumber; i++) {
			var z = i + 1;
			headLine += "<li><a href='" + title.response.results[i].webUrl + "'>" + title.response.results[i].webTitle + "</a></li>";
			// "<li class='headliner' id='dropper" + z + "'><a>" + title.response.results[i].webTitle + "</a></li><li class='trailer' id='droppee" + z + "'><a href='" + title.response.results[i].webUrl + "'>" + title.response.results[i].fields.trailText + "</a></li>";
		}
		document.getElementById("Tab" + tab).innerHTML = headLine;
	// dropperClick();
	}
	else {document.getElementById("Tab" + tab).innerHTML = "<p>No stories! Try selecting another section.</p>"};
	document.getElementById("TopTab" + tab).innerHTML = sections[tab];
}

// (TYPE 2) Processing the config type AJAX response and injecting relevant elements into the DOM (config dropdown options)
var configPopulator = function() {
	var sectionObject = JSON.parse(httpRequest.response);
    var length = sectionObject.response.results.length;
    var sectionList = "";
    var stories = "";
    function compare(a,b) {
        if (a.id < b.id) {return -1};
        if (a.id > b.id) {return 1};
        return 0;
  	}
  	var sorted = sectionObject.response.results.sort(compare);
  	for (var i = 0; i < length; i++) {
    	sectionList += "<option>" + sorted[i].id + "</option>";
  	}
  	for (var i = 1; i < 7; i++) {
	  	document.getElementById("SectionValue" + i).innerHTML = sectionList;
	  	document.getElementById("SectionValue" + i).value = sections[i];
	}
	for (var i = 1; i < 11; i++) {
		console.log(h)
		if (i === h) {
			stories += "<option selected>" + i + "</option>";
			console.log(stories);
		}
		else {stories += "<option>" + i + "</option>"};
	}
	document.getElementById("storyNum").innerHTML = stories;
	document.getElementById("storyNum").value = h;
} 

// (TYPE 3) Check the most recent headline against the new headline, appending a star if they are of the same section but different
var headlineChecker = function() {
	console.log("Checking the checker");
	var title = JSON.parse(httpRequest.response);
	for (var z = 1; z < (tabCount + 1); z++) {
		var tempAgain = document.getElementById("TopTab" + z).innerHTML;
		var tempOnceMore = title.response.results[0];
		console.log(tempAgain);
		console.log(tempOnceMore);
		console.log(currentTitles[count]);
		if (tempOnceMore.webTitle !== currentTitles[count] && tempOnceMore.sectionId === tempAgain) {
			console.log(tempAgain);
			tempAgain += "*";
			document.getElementById("TopTab" + z).innerHTML = tempAgain;
			console.log(tempAgain);
			currentTitles[count] = tempOnceMore.webTitle;
		}
	}
	count++
	if (count < tabCount + 1) {headlineLooper}
	else {count = 1}
	console.log("Update processed")
}



// --- End AJAX functions --- //



/* // *** Notes  *** //

(TYPE 3 - intervals) This humble student thinks that using a for-loop to chain different async requests could lead to problems
(TYPE 1 - onclicks) When attempting to define a function with reference to an element that doesn't yet exist, an error is thrown.
Solution is to put all of the onclicks within a named function and call that function as part of the onclick.
// --- End notes --- // */ 