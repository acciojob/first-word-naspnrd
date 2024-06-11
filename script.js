function firstWord(str) {
	const trimmedStr = str.trim();
	const words = trimmedStr.split(" ")
	
	return words[0];
}

// Do not change the code below

const s = prompt("Enter String:");
alert(firstWord(s));
