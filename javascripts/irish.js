
var Translator = (function(oldTranslator) {


	var irishPhrase = {
		"get": "fhail", 
		"your": "do", 
		"fat": "saille", 
		"pants": "pants", 
		"ready": "ar", 
		"it's": "se",
		"christmas": "nollaig"
	};

	//add property to the object (dot notation)
	oldTranslator.translateToIrish = function(language) {
		return irishPhrase[language];
	};

	//return back out to Sandwich. Publicly available
	return oldTranslator;


})(Translator);
console.log("Translator after Irish", Translator);
 
