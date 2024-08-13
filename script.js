function firstWord(str) {
	const trimmdStr = str.trim();
	const words = trimmdStr.split(" ");
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
