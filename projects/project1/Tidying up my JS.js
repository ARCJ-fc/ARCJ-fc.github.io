// Tidying up my JS
	  var httpRequest;
      var apikey = "8jytc2dmqf5mrb8vpxaz9mjz";
      var headlineNumber;
      var tab;
      var section;

      var clickOperation = function(t, s) { 
        tab = t;
        section = s;
        headlineNumber = 10;
        makeRequest("http://content.guardianapis.com/search?api-key=" + apikey + "&pagesize=" + headlineNumber + "&order-by=newest&section=" + section); 
        console.log("hi");
      };

      function makeRequest(url) {
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

        httpRequest.onreadystatechange = alertContents;
        httpRequest.open('GET', url);
        httpRequest.send();
      }

      function alertContents() {
        if (httpRequest.readyState === 4) {
          if (httpRequest.status === 200) {
            var title = JSON.parse(httpRequest.response);
            var headLine = "";
            console.log(headlineNumber);
            console.log(httpRequest.response);
            for (var i = 0; i < headlineNumber; i++) {
              headLine += "<li><a href='" + title.response.results[i].webUrl + "'>" + title.response.results[i].webTitle + "</a></li>";
            }
            console.log("Tab" + tab);
            console.log(headLine);
            document.getElementById("Tab" + tab).innerHTML = headLine;
   
          } 
          else {
            alert('There was a problem with the request.');
          }
        }
      }

      document.getElementById("myButtonHome").onclick = clickOperation(0, "news"));
      document.getElementById("myButtonOne").onclick = clickOperation(1, "football"));
      document.getElementById("myButtonTwo").onclick = clickOperation(2, "uk-news");
      document.getElementById("myButtonThree").onclick = clickOperation(3, "travel");
      document.getElementById("myButtonFour").onclick = clickOperation(4, "weather"); */
      
      /* listing section IDs for dropdown menu, onLoad.
             var x = new XMLHttpRequest("GET", "http://content.guardianapis.com/sections?api-key=" + apikey, true)
              "<option>" + title.response.results[i].id + "</option> 
              The theory is that the 'section' value can be directly placed into the section variable for the chosen button.
              ***Submit and Reset button for config page.***
              consider CSS for if there has been an update (perhaps purple?)
              display home icon, '1', '2', '2', cog when too small, dropdown menu?
              sign in and subscribe options in config?
              weather on the front?
              consider nav pills rather than nav tabs?
              responsive utilities
              #333 color
*/
	
/* other style of JS
document.getElementById("myButtonHome").on("click", clickOperation(0, "news"));
document.getElementById("myButtonOne").on("click", clickOperation(1, "football"));
document.getElementById("myButtonTwo").on("click", clickOperation(2, "uk-news"));
document.getElementById("myButtonThree").on("click", clickOperation(3, "travel"));
document.getElementById("myButtonFour").on("click", clickOperation(4, "weather"));
*/

/* old JS
		var httpRequest;
      var apikey = "8jytc2dmqf5mrb8vpxaz9mjz";
      var headlineNumber = 10;
      var tab;
      var section;

      document.getElementById("myButtonHome").onclick = function() { 
        tab = 0;
        section = "news";
        makeRequest("http://content.guardianapis.com/search?api-key=" + apikey + "&order-by=newest&section=" + section); 
      };

      document.getElementById("myButtonOne").onclick = function() { 
        tab = 1;
        section = "football";
        makeRequest("http://content.guardianapis.com/search?api-key=" + apikey + "&order-by=newest&section=" + section); 
      };

      document.getElementById("myButtonTwo").onclick = function() { 
        tab = 2;
        section = "uk-news";
        makeRequest("http://content.guardianapis.com/search?api-key=" + apikey + "&order-by=newest&section=" + section); 
      };

      document.getElementById("myButtonThree").onclick = function() { 
        tab = 3;
        section = "travel";
        makeRequest("http://content.guardianapis.com/search?api-key=" + apikey + "&order-by=newest&section=" + section); 
      };

      document.getElementById("myButtonFour").onclick = function() { 
        tab = 4;
        section = "weather";
        makeRequest("http://content.guardianapis.com/search?api-key=" + apikey + "&order-by=newest&section=" + section); 
      };

      document.getElementById("myButtonConfig").onclick = function() { 
   
      };

      function makeRequest(url) {
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

        httpRequest.onreadystatechange = alertContents;
        httpRequest.open('GET', url);
        httpRequest.send();
      }

      function alertContents() {
        if (httpRequest.readyState === 4) {
          if (httpRequest.status === 200) {
            var title = JSON.parse(httpRequest.response);
            var headLine = "";
            for (var i = 0; i < headlineNumber; i++) {
              headLine += "<li><a href='" + title.response.results[i].webUrl + "'>" + title.response.results[i].webTitle + "</a></li>";
            }
            document.getElementById("Tab" + tab).innerHTML = headLine;
   
          } else {
            alert('There was a problem with the request.');
          }
        }
      }
 */

  /*  var httpRequest;
      var apikey = "8jytc2dmqf5mrb8vpxaz9mjz";
      var headlineNumber = 10;
      var tab;
      var section;

      document.getElementById("myButtonHome").onclick = function() { 
        tab = 0;
        section = "news";
        makeRequest("http://content.guardianapis.com/search?api-key=" + apikey + "&order-by=newest&section=" + section); 
      };

      document.getElementById("myButtonOne").onclick = function() { 
        tab = 1;
        section = "football";
        makeRequest("http://content.guardianapis.com/search?api-key=" + apikey + "&order-by=newest&section=" + section); 
      };

      document.getElementById("myButtonTwo").onclick = function() { 
        tab = 2;
        section = "uk-news";
        makeRequest("http://content.guardianapis.com/search?api-key=" + apikey + "&order-by=newest&section=" + section); 
      };

      document.getElementById("myButtonThree").onclick = function() { 
        tab = 3;
        section = "travel";
        makeRequest("http://content.guardianapis.com/search?api-key=" + apikey + "&order-by=newest&section=" + section); 
      };

      document.getElementById("myButtonFour").onclick = function() { 
        tab = 4;
        section = "weather";
        makeRequest("http://content.guardianapis.com/search?api-key=" + apikey + "&order-by=newest&section=" + section); 
      };

      document.getElementById("myButtonConfig").onclick = function() { 
   
      };

      function makeRequest(url) {
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

        httpRequest.onreadystatechange = alertContents;
        httpRequest.open('GET', url);
        httpRequest.send();
      }

      function alertContents() {
        if (httpRequest.readyState === 4) {
          if (httpRequest.status === 200) {
            var title = JSON.parse(httpRequest.response);
            var headLine = "";
            for (var i = 0; i < headlineNumber; i++) {
              headLine += "<li><a href='" + title.response.results[i].webUrl + "'>" + title.response.results[i].webTitle + "</a></li>";
            }
            document.getElementById("Tab" + tab).innerHTML = headLine;
   
          } else {
            alert('There was a problem with the request.');
          }
        }
      }
      */

      /* <div class="input-group">
              <div class="input-group-btn">
                <button type="button" class="btn btn-default dropdown-toggle" data-toggle="dropdown" aria-expanded="false">first<span class="caret"></span></button>
                <ul class="dropdown-menu" role="menu">
                  <li><a href="#">second/a></li>
                  <li class="divider"></li>
                  <li><a href="#">third</a></li>
                  <li class="divider"></li>
                  <li><a href="#">fourth</a></li>
                  <li class="divider"></li>
                  <li><a href="#">fifth</a></li>
                  <li class="divider"></li>
                </ul>
              </div><!-- /btn-group --> */