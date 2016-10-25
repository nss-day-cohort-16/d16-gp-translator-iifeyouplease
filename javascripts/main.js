// Event Listners //
var clear = document.getElementById("clear")
	.addEventListener("click", reset);
var translateButton = document.getElementById("translateButton")
	.addEventListener("click", input);

function input (phrase) {
	var phraseInput = document.getElementById("phraseInput").value;
		// console.log("Text input=", phraseInput);
		if (phraseInput === ("Get your fat pants ready it's Christmas")) {
			var phraseArray = phraseInput.split(" ");
			// console.log(typeof phraseArray);
			selector(phraseArray); 
		} else {
			alert("Nah, try again");
		}
	} 

function selector(dM){
	 var languageSelect = document.getElementById("languageSelect").value;
	 console.log(languageSelect);
	 var output = document.getElementById("outputEl");

	 if (languageSelect === "Irish") {
	 			for (var i = 0; i < dM.length; i++) {
	 		output.innerHTML += Translator.translateToIrish(dM[i]) + " ";
	 		// console.log("innerHTML TEST", phraseInput.innerHTML);
	 	}
	 } else if (languageSelect === "German") {
	 		for (var i = 0; i < dM.length; i++) {
	 		output.innerHTML += Translator.translateToGerman(dM[i]) + " ";
	 		// console.log("yo", output.innerHTML);
	 	}
	 } else if (languageSelect === "Latin") {
	 			for (var i = 0; i < dM.length; i++) {
	 		output.innerHTML += Translator.translateToLatin(dM[i]) + " ";
	 	}
	 } else if (languageSelect === "Spanish") {
	 			for (var i = 0; i < dM.length; i++) {
	 		output.innerHTML += Translator.translateToSpanish(dM[i]) + " ";
	 	}
	 }
}

function reset() {
// console.log("reset");
	document.getElementById("phraseInput").value = "";
	console.clear();
	var output = document.getElementById("outputEl");
	output.innerHTML = "";
}
