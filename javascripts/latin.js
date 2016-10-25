var Translator = (function (oldTranslator) {
		var latinPhrase = {
		"Get": "tua", 
		"your": "Braccae", 
		"fat": "in", 
		"pants": "ut", 
		"ready": "adeps", 
		"it's": "est",
		"Christmas": "Christus"
		};
		oldTranslator.translateToLatin = function(language) {
			return latinPhrase[language];
		};
		return oldTranslator;
})(Translator);
console.log("Translator after Latin",Translator);