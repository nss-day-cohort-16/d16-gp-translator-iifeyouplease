var Translator = (function(oldTranslator){
	var germanPhrase = {
		"Get": "Holen Sie",
		"your": "sich Ihre",
		"fat": "fette",
		"pants": "Hose",
		"ready": "bereit",
		"it's": "es ist",
		"Christmas": "Weihnachten" 
	};

			oldTranslator.translateToGerman = function(language) {
				return germanPhrase[language];
			};

		return oldTranslator;
		

})(Translator);

console.log("Translator", Translator);