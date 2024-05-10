function firstWord(str) {
	const trimmedStr = str.trim();
	const words = trimmedStr.split(" ");

	return words.length > 0 ? words[0] : trimmedStr;
}

// Do not change the code below

const s = prompt("Enter String:");
alert(firstWord(s));
