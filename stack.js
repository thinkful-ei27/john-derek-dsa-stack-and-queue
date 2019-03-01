'use strict';

class _Node {
  constructor(data, next) {
    this.data = data;
    this.next = next;
  }
}

class Stack {
  constructor() {
    this.top = null;
  }

  push(data) {
    if (this.top === null) {
      this.top = new _Node(data, null);
      return this.top;
    }

    const node = new _Node(data, this.top);
    this.top = node;
  }

  pop() {
    if (this.top === null) {
      return 'Nothing to pop';
    }
    const node = this.top;
    this.top = node.next;
    return node.data;
  }
}

const peek = stack => {
  return stack.top.data;
};

const display = stack => {
  let currNode = stack.top;
  while (currNode !== null) {
    console.log(currNode.data);
    currNode = currNode.next;
  }
};

// const starTrekDrills = () => {
//   const starTrek = new Stack();

//   starTrek.push('Kirk');
//   starTrek.push('Spock');
//   starTrek.push('McCoy');
//   starTrek.push('Scotty');

//   // console.log(peek(starTrek));
//   starTrek.pop();
//   starTrek.pop();
//   // display(starTrek);
// };

// starTrekDrills();

// Check for palindromes using stack

// function is_palindrome(s) {
//   s = s.toLowerCase().replace(/[^a-zA-Z0-9]/g, '');
//   const regStack = new Stack();
//   for (let i = 0; i < s.length; i++) {
//     regStack.push(s[i]);
//   }
//   for (let i = 0; i < s.length; i++) {
//     if (regStack.pop() !== s[i]) { return false; }
//   }
//   return true;
// }

// console.log(is_palindrome('dad'));
// console.log(is_palindrome('A man, a plan, a canal: Panama'));
// console.log(is_palindrome('1001'));
// console.log(is_palindrome('Tauhida'));

// Matching parentheses in an expression
// Ex. () is valid, )() is not valid
const isValid = str => {
  const stack = new Stack();

  for (let i = 0; i < str.length; i++) {
    if (str[i] === '(') {
      stack.push({ val: str[i], index: i });
    }

    if (str[i] === ')') {
      const popped = stack.pop();
      if (popped === 'Nothing to pop') { return `Failed at character ${[i + 1]}`; }
    }
  }

  return stack.top === null ? true : `Open paren at character ${stack.top.data.index + 1}`;
};

console.log(isValid('()'));
console.log(isValid('(()))()'));
console.log(isValid('()(()'));
console.log(isValid('([)]'));