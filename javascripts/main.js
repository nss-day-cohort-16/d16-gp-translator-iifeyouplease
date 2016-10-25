// Test Irish Phrse 
irishPhrase = "HEllllllllllloooooooooo"


// Event Listners //
var clear = document.getElementById("clear")
	.addEventListener("click", reset);
var translateButton = document.getElementById("translateButton")
	.addEventListener("click", input);

function input (phrase) {
	var phraseInput = document.getElementById("phraseInput").value;
		// console.log("Text input=", phraseInput);
		if (phraseInput === "Get your fat pants ready it's Christmas") {
			selector(phrase); 
		} else if (phraseInput === "Get") { //Testing "Get"... DELETE?
			selector(phrase);
		} else {
			alert("Nah, try again");
		}
	} 

function selector(phrase){
	 var languageSelect = document.getElementById("languageSelect").value;
	 console.log(languageSelect);
	 var output = document.getElementById("outputEl");

	 if (languageSelect === "Irish") {
	 	output.innerHTML = irishPhrase; //translateToIrish
	 	// console.log("innerHTML TEST", phraseInput.innerHTML);
	 } else if (languageSelect === "German") {
	 	output.innerHTML = Translator.translateToGerman("Get");
	 } else if (languageSelect === "Latin") {
	 	output.innerHTML = latinPhrase;
	 } else if (languageSelect === "Spanish") {
	 	output.innerHTML = spanishPhrase;
	 }
}

function reset() {
// console.log("reset");
	document.getElementById("phraseInput").value = "";
	console.clear();
	var output = document.getElementById("outputEl");
	output.innerHTML = "";
}
