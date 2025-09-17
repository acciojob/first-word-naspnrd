// function firstWord(s) {
//   // your code here
// }

function firstWord (str) {
    let trimStr = str.trim();
    let words = trimStr.split(" ");
    return words[0];
}

// Do not change the code below

const s = prompt("Enter String:");
alert(firstWord(s));
