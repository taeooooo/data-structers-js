import * as Stack from "./lib/Stack-fp.js";

function isPalindrome(word) {
  let wordStack;
  wordStack = word.split("").reduce((acc, cur) => {
    return Stack.push(acc)(cur);
  }, []);

  let rWord = "";
  while (!Stack.isEmpty(wordStack)()) {
    const [newStack, data] = Stack.pop(wordStack)();
    wordStack = newStack;
    rWord += data;
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
