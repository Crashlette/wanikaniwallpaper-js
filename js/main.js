require(["api", "canvasdrawer", "settings"], function(api, canvasDrawer, settings) {
    var form = document.getElementById("api-form");
    var messageElem = document.getElementById('settingLbl');
    var messageElem2 = document.getElementById("message4")

	function makeRequest() {
		messageElem.innerHTML = "Loading...";
		api.load(function() {

			canvasDrawer.draw(api.characters);

		});

		return false;
	}
	
    //debug for tracking refresh cycles.
	//var i = 0;


    //give the page a little bit of time to load before sending off request
	setTimeout(function () {
	    makeRequest();
	}, 250);

    // submits form every X minutes.Makes interval timer that takes a given refresh time (in minutes) and converts to miliseconds.
	var refreshTime = 1;
	setInterval(function () {

        //messageElem2.innerHTML="Refresh cycle #" + i + " with API key: " + settings.api_key;
        makeRequest();
       // i += 1;
    }, refreshTime * 60000);
	
    if (settings.api_key) {
        _.debounce(function () { makeRequest(); }, 1000);
    }
    
	
});


