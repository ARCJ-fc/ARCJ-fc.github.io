function() {
  var httpRequest;
  
  document.getElementById("testButton").onclick = function() { 
        makeRequest('http://content.guardianapis.com/search?api-key=test&order-by=newest'); 
  };

  function makeRequest(url)
    httpRequest = new XMLHttpRequest();
    httpRequest.onreadystatechange = alertContents;
    httpRequest.open('GET', ""http://content.guardianapis.com/search?api-key=test&order-by=newest", true);
    httpRequest.send();
	};