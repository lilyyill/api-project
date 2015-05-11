/*var SITE = SITE || {};

SITE.dribbble = {
	init.function(){
		alert('hello world');
	}
};

SITE.features = {
	init: function () {
		var features = $ ('body').data('features');
		var featuresArray = [];

		if (features) {
			featuresArray = features.split (' ');

			for (var i = 0; ; i < featuresArray.length; i++){
				var func = featuresArray[i];

				if(SITE[func] && typeof SITE[func].init ==='function'){
					SITE [func].init();

				}

			}

		}
	}

};


$(function(){
	SITE.features.init();
});
*/

var setTimeZone = function () {
	$('.timezone').on('click', function (event) {
		var timezone = $(this).data('timezone');
		event.preventDefault();

		console.log(timezone);

		// do moment.timezone.js time conversion

		//$.cookie('time', currentTime);
	})
};

setTimeZone();

var setTimeLocation = function (position) {
	console.log(position);
	var date = date || new Date();
	var hour = date.getHours();
    var minute = date.getMinutes();
	$('#currentTime').html(date.toLocaleTimeString());
		$.get("http://ipinfo.io", function (response) {
	    $("#currentLocation").html(response.city + ", " + response.region);
	}, "jsonp");
}
setTimeLocation();

// navigator.geolocation.getCurrentPosition(setTimeLocation);


var parseColor = function (start, end, now) {
    console.log(start[0] + (now * (end[0] - start[0])) | 0,
    			start[1] + now * (end[1] - start[1]) | 0,
        		start[2] + now * (end[2] - start[2]) | 0,

        (start[3] && end[3]) ? (start[3] + now * (end[3] - start[3]) | 0) : 1);

    return [
        start[0] + now * (end[0] - start[0]) | 0,
        start[1] + now * (end[1] - start[1]) | 0,
        start[2] + now * (end[2] - start[2]) | 0,
        (start[3] && end[3]) ? (start[3] + now * (end[3] - start[3]) | 0) : 1
    ];
};

var daytimeColor = function (start, end, date) {
    date = date || new Date();
    var hour = date.getHours();
    var minute = date.getMinutes();
    var now = hour * minute / 1440;
    var rgba = parseColor(start, end, now);

    return 'rgba(' + rgba.join() + ')';
};

var skyColor = function () {
	//var time = $.cookie('time')
	// tcontainer.style.backgroundColor = daytimeColor(start, end, time);
	var tcontainer = document.getElementById("tcontainer");
	var ttcontainer = document.getElementById("ttcontainer");
	var ncontainer = document.getElementById("ncontainer");
	var nncontainer = document.getElementById("nncontainer");
	var mcontainer = document.getElementById("mcontainer");
	var mmcontainer = document.getElementById("mmcontainer");
	var ocontainer = document.getElementById("ocontainer");
	var oocontainer = document.getElementById("oocontainer");
	var start = [224, 235, 255];
	var end = [0, 51, 204];

	tcontainer.style.backgroundColor = daytimeColor(start, end);
	ttcontainer.style.backgroundColor = daytimeColor(start, end);

	ncontainer.style.backgroundColor = daytimeColor(start, end);
	nncontainer.style.backgroundColor = daytimeColor(start, end);

	mcontainer.style.backgroundColor = daytimeColor(start, end);
	mmcontainer.style.backgroundColor = daytimeColor(start, end);

	ocontainer.style.backgroundColor = daytimeColor(start, end);
	oocontainer.style.backgroundColor = daytimeColor(start, end);
}

skyColor();





