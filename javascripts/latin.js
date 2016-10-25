var Translator = (function (oldTranslator) {
		var latinPhrase = {
		"get": "tua", 
		"your": "Braccae", 
		"fat": "in", 
		"pants": "ut", 
		"ready": "adeps", 
		"it's": "est",
		"christmas": "Christus"
		};
		oldTranslator.translateToLatin = function(language) {
			return latinPhrase[language];
		};
		return oldTranslator;
})(Translator);
console.log("Translator after Latin",Translator);