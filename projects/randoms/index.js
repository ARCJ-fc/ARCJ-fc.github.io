// Variable initializing and setting default values

var httpRequest;
var apikey = "8jytc2dmqf5mrb8vpxaz9mjz";
var headlineNumber;
var h = 10;
var tab;
var tabCount = 3;
var section;
var section1 = "football";
var section2 = "uk-news";
var section3 = "travel";
var section4 = "weather";
var section5 = "business";
var section6 = "sport";

// Click functions

document.getElementById("myButtonHome").onclick = function() {
  clickOperation(0, "news");
};
document.getElementById("myButton1").onclick = function() {
  clickOperation(1, section1); 
};
document.getElementById("myButton2").onclick = function() {
  clickOperation(2, section2);
};
document.getElementById("myButton3").onclick = function () {
  clickOperation(3, section3);
};
document.getElementById("myButton4").onclick = function () {
  clickOperation(4, section4);
};
document.getElementById("myButton5").onclick = function () {
  clickOperation(5, section5);
};
document.getElementById("myButton6").onclick = function () {
  clickOperation(6, section6);
};

document.getElementById("myButtonConfig").onclick = function () {
  makeRequest("config", "http://content.guardianapis.com/sections?api-key=" + apikey);
};

document.getElementById("SaveStories").onclick = function () {
  h = document.getElementById("storyNum").value;
}

document.getElementById("Defaults").onclick = function () {
  //reset variables
  h = 10;
  section1 = "football";
  section2 = "uk-news";
  section3 = "travel";
  section4 = "weather";
  section5 = "business";
  section6 = "sport";
  // set tab names
  document.getElementById("TopTab1").innerHTML = "football";
  document.getElementById("TopTab2").innerHTML = "uk-news";
  document.getElementById("TopTab3").innerHTML = "travel";
  document.getElementById("TopTab4").innerHTML = "weather";
  document.getElementById("TopTab5").innerHTML = "business";
  document.getElementById("TopTab6").innerHTML = "sport";
  // disable tabs
  document.getElementById("field4").disabled = true;
  document.getElementById("field5").disabled = true;
  document.getElementById("field6").disabled = true

}

document.getElementById("plus").onclick = function () {
  tabCount += 1;
  var temp2 = document.getElementById("myButton" + tabCount);
  temp2.className += " " + "visible";
  document.getElementById("field" + tabCount).disabled = false
}

document.getElementById("minus").onclick = function () {
  var temp2 = document.getElementById("myButton" + tabCount);
  temp2.className = "presentation col-md-2";
  document.getElementById("field" + tabCount).disabled = true;
  tabCount -= 1;
}

document.getElementById("SaveSection1").onclick = function() {
    var temp = document.getElementById("SectionValue1");
    section1 = temp.options[temp.selectedIndex].text;
    document.getElementById("TopTab1").innerHTML = temp.options[temp.selectedIndex].text;
}

document.getElementById("SaveSection2").onclick = function() {
    var temp = document.getElementById("SectionValue2");
    section2 = temp.options[temp.selectedIndex].text; 
    document.getElementById("TopTab2").innerHTML = temp.options[temp.selectedIndex].text;
}

document.getElementById("SaveSection3").onclick = function() {
    var temp = document.getElementById("SectionValue3");
    section3 = temp.options[temp.selectedIndex].text; 
    document.getElementById("TopTab3").innerHTML = temp.options[temp.selectedIndex].text;
}

document.getElementById("SaveSection4").onclick = function() {
    var temp = document.getElementById("SectionValue4");
    section4 = temp.options[temp.selectedIndex].text; 
    document.getElementById("TopTab4").innerHTML = temp.options[temp.selectedIndex].text;
} 

document.getElementById("SaveSection5").onclick = function() {
    var temp = document.getElementById("SectionValue5");
    section4 = temp.options[temp.selectedIndex].text; 
    document.getElementById("TopTab5").innerHTML = temp.options[temp.selectedIndex].text;
} 

document.getElementById("SaveSection6").onclick = function() {
    var temp = document.getElementById("SectionValue6");
    section4 = temp.options[temp.selectedIndex].text; 
    document.getElementById("TopTab6").innerHTML = temp.options[temp.selectedIndex].text;
} 




// AJAX functions 


var clickOperation = function(t, s) { 
  tab = t;
  section = s;
  headlineNumber = h;
  makeRequest(1, "http://content.guardianapis.com/search?api-key=" + apikey + "&pagesize=" + headlineNumber + "&order-by=newest&section=" + section); 
};

function makeRequest(type, url) {
  if (window.XMLHttpRequest) { 
    httpRequest = new XMLHttpRequest();
  } else if (window.ActiveXObject) { 
    try {
      httpRequest = new ActiveXObject("Msxml2.XMLHTTP");
    } 
    catch (e) {
      try {
        httpRequest = new ActiveXObject("Microsoft.XMLHTTP");
      } 
      catch (e) {
        console.log("whoops");
      }
    }
  }

  if (!httpRequest) {
    alert('Giving up :( Cannot create an XMLHTTP instance');
    return false;
  }
  if (type === "config") {
    httpRequest.onreadystatechange = alertConfig;
  }
  else {
    httpRequest.onreadystatechange = alertContents;
  }
  httpRequest.open('GET', url);
  httpRequest.send();
}

function alertContents() {
  if (httpRequest.readyState === 4) {
    if (httpRequest.status === 200) {
      var title = JSON.parse(httpRequest.response);
      var headLine = "";
      if (title.response.results.length !== 0) {
        for (var i = 0; i < headlineNumber; i++) {
          headLine += "<li><a href='" + title.response.results[i].webUrl + "'>" + title.response.results[i].webTitle + "</a></li>";
        }
      document.getElementById("Tab" + tab).innerHTML = headLine;
      }
      else {document.getElementById("Tab" + tab).innerHTML = "<p>No stories! Try selecting another section.</p>"};

    } 
    else {
      alert('There was a problem with the request.');
    }
  }
}

function alertConfig() {
  if (httpRequest.readyState === 4) {
    if (httpRequest.status === 200) {
      var sectionObject = JSON.parse(httpRequest.response);
      var length = sectionObject.response.results.length;
      var sectionList = "";
      function compare(a,b) {
        if (a.id < b.id)
          return -1;
        if (a.id > b.id)
          return 1;
        return 0;
      }
      var sorted = sectionObject.response.results.sort(compare);
      for (var i = 0; i < length; i++) {
        console.log(sorted[i].id);
        sectionList += "<option>" + sorted[i].id + "</option>";
      }
      for (var i = 1; i < 7; i++) {
      document.getElementById("SectionValue" + i).innerHTML = sectionList;
      document.getElementById("SectionValue" + i).value = eval("section" + i);
    }
    } 
    else {
      alert('There was a problem with the request.');
    }
  }
}

/* List of selectable tabs:



/* document.getElementById("submit").onclick = function () {
  
}
*/