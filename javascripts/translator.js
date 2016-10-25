
var Translator = (function(){

	var phrase = {
	//value is french	
	"Get": "obtenir", 
	"your": "votre", 
	"fat": "de", 
	"pants": "patalon", 
	"ready": "graisse", 
	"it's": "sur",
	"Christmas": "noel"

	};

	return {
		translateTo: function (language) {
			return phrase[language];

		}
	}

})();