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
  return stack.top ? stack.top.data : null;
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

function is_palindrome(s) {
  s = s.toLowerCase().replace(/[^a-zA-Z0-9]/g, '');
  const regStack = new Stack();
  for (let i = 0; i < s.length; i++) {
    regStack.push(s[i]);
  }
  for (let i = 0; i < s.length; i++) {
    if (regStack.pop() !== s[i]) { return false; }
  }
  return true;
}

// console.log(is_palindrome('dad'));
// console.log(is_palindrome('A man, a plan, a canal: Panama'));
// console.log(is_palindrome('1001'));
// console.log(is_palindrome('Tauhida'));

// TODO: Finish extension exercises
// Matching parentheses in an expression
// Ex. () is valid, )() is not valid
const isValid = str => {
  const stack = new Stack();

  for (let i = 0; i < str.length; i++) {
    if (str[i] === '(' || str[i] === '[' || str[i] === '{') {
      stack.push({ val: str[i], index: i });
    }

    if (str[i] === ')') {
      const popped = stack.pop();
      if (popped.val !== '(') { return `Failed at character ${i + 1}`; }
      if (popped === 'Nothing to pop') { return `Failed at character ${[i + 1]}`; }
    }
  }

  return stack.top === null ? true : `Open paren at character ${stack.top.data.index + 1}`;
};

// console.log(isValid('()'));
// console.log(isValid('(())'));
// console.log(isValid('(()))()')); // should fail at 5
// console.log(isValid('()(()')); //shoul fail at 3
// console.log(isValid('([)]')); // should fail at 3

// Sort Stack
const checkTempStack = (originalStack, targetStack, currentNode) => {
  let nextNode = peek(targetStack);
  if (nextNode === null || nextNode <= currentNode) {
    return targetStack.push(currentNode);
  } else {
    originalStack.push(targetStack.pop());
    checkTempStack(originalStack, targetStack, currentNode);
  }

};

const sortStack = stack => {
  const tempStack = new Stack();
  let currentNode;

  while (stack.top !== null) {
    currentNode = stack.pop();
    checkTempStack(stack, tempStack, currentNode);
  }

  while (tempStack.top !== null) {
    stack.push(tempStack.pop());
  }

  return stack;
};

const unSortedStack = new Stack();
unSortedStack.push(2);
unSortedStack.push(6);
unSortedStack.push(3);
unSortedStack.push(5);
display(sortStack(unSortedStack));

module.exports = { Stack, stackDisplay: display };