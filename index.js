function isPalindrome(word) {
  // Write your algorithm here
}

/* 
  Add your pseudocode here
1) Define a function isPalindrome that takes a string as input.
2)Reverse the string.
3)Compare the reversed string with the original string.
)If they are the same, return true; otherwise, return false.
*/

/*
  Add written explanation of your solution here

  1) So first I defined the function isplaindrome that takes a string as input
  basically The function isPalindrome is designed to check whether a given 
  string is a palindrome. A palindrome is a word that reads the same forward and 
  backward, such as "madam" or "racecar". Reverse the String:

 2)Convert the input string into an array of characters using .split('').
Reverse the array using .reverse().
Convert the reversed array back into a string using .join('').
Compare the Original and Reversed Strings:

3)if the original string matches the reversed string, return true.
Otherwise, return false.

*/

// You can run `node index.js` to view these console logs
function isPalindrome(str) {
    if (!str) return false; // Handle edge cases where input is empty or undefined
    let reversedStr = str.split('').reverse().join('');
    return str === reversedStr;
}
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;


