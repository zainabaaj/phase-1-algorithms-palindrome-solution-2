function isPalindrome(word) {
  // Write your algorithm here
  let left = 0;
  let right = word.length - 1;

  while (left < right) {
    if (word[left] !== word[right]) {
      return false;
    }
    left++;
    right--;
  }

  return true;
}

/* 
  - Initialize a variable `left` to 0, representing the left pointer starting at the beginning of the word.
  - Initialize a variable `right` to the last index of the word, representing the right pointer starting at the end of the word.
  - While `left` is less than `right`:
  - If the characters at the `left` and `right` pointers are not equal, return false.
  - Move the `left` pointer one step to the right (increment by 1).
  - Move the `right` pointer one step to the left (decrement by 1).
  - If the loop completes without finding any differences, return true as the word is a palindrome.

*/

/*
  - The function initializes two pointers, `left` and `right`, which represent the corresponding positions from the start and end of the word.
  - The function enters a while loop that continues as long as `left` is less than `right`.
  - At each iteration, the function checks if the characters at the `left` and `right` pointers are equal.
  - If any pair of characters is found to be different, the function immediately returns `false`, indicating that the word is not a palindrome.
  - If the loop completes without finding any differences, it means all pairs of characters are the same, and the function returns `true`, indicating that the word is a palindrome.

*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
