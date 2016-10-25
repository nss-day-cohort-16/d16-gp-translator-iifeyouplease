var Translator = (function(oldTranslator){
	var spanishPhrase = {

		"get": "conseguir ",
		"your": "sus",
		"fat": "de grasa",
		"pants":"pantalones",
		"ready":"listo",
		"it's" : "que es",
		"Christmas":"Navidad"

	};

	oldTranslator.translateToSpanish = function(language) {
		return spanishPhrase[language];
	};

	return oldTranslator

}) (Translator);

