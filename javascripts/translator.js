
var Translator = (function(){

	var phrase = {
	//value is french	
	"get": "obtenir", 
	"your": "votre", 
	"fat": "de", 
	"pants": "patalon", 
	"ready": "graisse", 
	"it's": "sur",
	"christmas": "noel"

	};

	return {
		translateTo: function (language) {
			return phrase[language];

		}
	}

})();