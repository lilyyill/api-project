var SITE = SITE || {};

SITE.dribbble = {
	init.function(){
		alert('hello world');
	}
};

SITE.dropdown = {
	init.function(){
		alert('hello world');
	}
};

SITE.slideshow = {
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