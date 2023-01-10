import Stack from "./lib/Stack.js";

function isPalindrome(word) {
  const stack = new Stack();
  for (let i = 0; i < word.length; i += 1) {
    stack.push(word[i]);
  }

  let rWord = "";
  while (stack.top > 0) {
    rWord += stack.pop();
  }

  return word === rWord;
}

const testWord1 = "hello";
if (isPalindrome(testWord1)) {
  console.log(`${testWord1} is Palindrome`);
} else {
  console.log(`${testWord1} is not a Palindrome`);
}

const testWord2 = "racecar";
if (isPalindrome(testWord2)) {
  console.log(`${testWord2} is Palindrome`);
} else {
  console.log(`${testWord2} is not a Palindrome`);
}
