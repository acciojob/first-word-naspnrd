function firstWord(str) {
	const trimmedStr = str.trim();
	const words = trimmedStr.split(" ");
	console.log(words);
	return words[0];
}

console.log(firstWord('see and stop'))
console.log(firstWord(' Hello World!'))
console.log(firstWord('12345'));
console.log(firstWord(''));
// Do not change the code below

// const s = prompt("Enter String:");
// alert(firstWord(s));
