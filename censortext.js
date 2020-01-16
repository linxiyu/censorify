var censoredWords = ["sad", "bad", "mad"]

var customCensoredWords = []

function censor(inStr) {
	for (idx in censoredWords) {
		inStr = inStr.replace(censoredWords[idx], "****")
	}
	for (idx in customCensoredWords) {
		inStr = inStr.replace(customCensoredWords[idx], "1111")
	}
	return inStr
}

function addCensoredWord (word) {
	customCensoredWords.push(word)
}

function getCensoredWords (){
	return censoredWords.concat(customCensoredWords)
}

exports.censor = censor
exports.addCensoreWord = addCensoredWord
exports.getCensoredWords = getCensoredWords
