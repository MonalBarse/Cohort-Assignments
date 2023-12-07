/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.
  returns true for strings with punctuation marks
  returns true for strings with spaces 
*/
/* 
function isPalindrome(str) {
  let newString = str.trim().toLowerCase();
  let inputArray = newString.split("");
  let reversedArray = [];

  // Iterate through the input array in reverse order
  for (let i = inputArray.length - 1; i >= 0; i--) {
    // Add each element to the reversed array
    reversedArray.push(inputArray[i]);
  }
  let reversedString = reversedArray.join("");
  if(reversedString === newString){
    return true;
  }else{
    return false;
  }

}

 */

function isPalindrome(str) {
  // Remove spaces, common punctuation, and trim, convert to lowercase
  let cleanedString = str.replace(/[^\w]/g, '').toLowerCase().trim();
   // [^\w] means any character that is not a word character (alphanumeric & underscore). g means global, i.e. replace all non word char, with an empty string. Like spaces or punctuation.

  // Reverse the string and compare with the original
  return cleanedString === cleanedString.split('').reverse().join('');
}



module.exports = isPalindrome;
