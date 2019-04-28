function balancedBrackets(string) {
  const openning = "([{";
  const closing = ")]}";
  const matching = { ")": "(", "]": "[", "}": "{" };
  const stack = [];

  for (const char of string) {
    if (openning.includes(char)) {
      stack.push(char);
    } else if (closing.includes(char)) {
      if (stack.length == 0) return false;
      if (stack[stack.length - 1] === matching[char]) {
        console.log(stack);
        stack.pop();
      } else {
        return false;
      }
    }
  }

  return stack.length === 0;
}

console.log(balancedBrackets("([[]]({}))"));
