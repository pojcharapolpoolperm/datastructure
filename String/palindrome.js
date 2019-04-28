function palindrome1(string) {
  let left = 0;
  let right = string.length - 1;

  while (left < right) {
    if (string[left] !== string[right]) {
      return false;
    }

    left++;
    right--;
  }

  return true;
}

console.log(palindrome1("abcdcbaa"));

function isPalindrome(string, i = 0) {
  const j = string.length - 1 - i;
  return i <= j ? true : string[i] === string[j] && isPalindrome(string, i + 1);
}

console.log("isPalindrome: " + isPalindrome("abcdcba"));

function longestPalindrome(string) {
  let currentlongest = [0, 1];
  for (let i = 1; i < string.length; i++) {
    let odd = palindromeHelper(string, i - 1, i + 1);
    let even = palindromeHelper(string, i - 1, i);
    const longest = odd[1] - odd[0] > even[1] - even[0] ? odd : even;
    currentlongest =
      currentlongest[1] - currentlongest[0] > longest[1] - longest[0]
        ? currentlongest
        : longest;
  }
  return string.slice(currentlongest[0], currentlongest[1] + 1);
}

function palindromeHelper(string, left, right) {
  while (left >= 0 && right < string.length) {
    if (string[left] === string[right]) {
      left--;
      right++;
    } else {
      break;
    }
  }

  return [left + 1, right - 1];
}

console.log("Longest Palindrome: " + longestPalindrome("abaxyzzyxf"));
