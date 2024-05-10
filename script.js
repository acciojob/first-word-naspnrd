function firstWord(str) {
 // Trim the string to remove leading and trailing whitespace
  const trimmedStr = str.trim(); 
  
  // Split the trimmed string by space
  const words = trimmedStr.split(' ');
  
  // Return the first word or the entire string if it's empty or has no space
  return words.length > 0 ? words[0] : trimmedStr;
}

// Do not change the code below

const s = prompt("Enter String:");
alert(firstWord(s));
