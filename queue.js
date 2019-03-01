'use strict';

const { Stack, stackDisplay } = require('./stack');

class _Node {
  constructor(value) {
    this.value = value;
    this.next = null;
    this.prev = null;
  }
}

class Queue {
  constructor() {
    this.first = null;
    this.last = null;
  }

  enqueue(data) {
    const node = new _Node(data);

    if (this.first === null) {
      this.first = node;
    }

    if (this.last) {
      node.next = this.last;
      this.last.prev = node;
    }

    this.last = node;
  }

  dequeue() {
    if (this.first === null) {
      return;
    }

    const node = this.first;
    this.first = node.prev;

    if (node === this.last) {
      this.last = null;
    }

    return node.value;
  }
}

const peek = queue => queue.first !== null ? queue.first.value : null;

const display = queue => {
  let currNode = queue.first;
  while (currNode !== null) {
    console.log(currNode.value);
    currNode = currNode.prev;
  }
};

// const starTrekDrills = () => {
//   const starTrekQ = new Queue();

//   starTrekQ.enqueue('Kirk');
//   starTrekQ.enqueue('Spock');
//   starTrekQ.enqueue('Uhura');
//   starTrekQ.enqueue('Sulu');
//   starTrekQ.enqueue('Checkov');

//   // console.log(peek(starTrekQ));
//   // display(starTrekQ);

//   starTrekQ.dequeue();
//   starTrekQ.dequeue();
//   display(starTrekQ);
// };

// starTrekDrills();

// Queue using Stack
// class StackQueue {
//   constructor() {
//     this.mainStack = new Stack();
//     this.tempStack = new Stack();
//   }

//   enqueue(value) {
//     this.mainStack.push(value);
//   }

//   dequeue() {
//     let currentNode;
//     while (this.mainStack.top !== null) {
//       console.log(this.tempStack);
//       if (currentNode !== undefined) {
//         this.tempStack.push(currentNode);
//       }
//       currentNode = this.mainStack.pop();
//     }
//     while (this.tempStack.top !== null) {
//       this.mainStack.push(this.tempStack.pop());
//     }
//   }

// }

// const stackQueueTest = new StackQueue();
// stackQueueTest.enqueue('first');
// stackQueueTest.enqueue('second');
// stackQueueTest.enqueue('third');
// // stackDisplay(stackQueueTest.mainStack);
// stackQueueTest.dequeue();
// stackDisplay(stackQueueTest.mainStack);

// TODO: Square dance pairing
const dancerArrives = (dancer, queue) => {
  const { name, gender } = dancer;
  const queuedDancer = peek(queue);
  if (queuedDancer === null || gender === queuedDancer.gender) {
    queue.enqueue(dancer);
  } else {
    queue.dequeue();
    console.log(`${gender} dancer is: ${name} and the ${queuedDancer.gender} is: ${queuedDancer.name}`);
  }
};

const squareDance = () => {
  const dancers = new Queue();
  dancerArrives({ name: 'Jane', gender: 'female' }, dancers);
  dancerArrives({ name: 'Frank', gender: 'male' }, dancers);
  dancerArrives({ name: 'John', gender: 'male' }, dancers);
  dancerArrives({ name: 'Sherlock', gender: 'male' }, dancers);
  dancerArrives({ name: 'Madonna', gender: 'female' }, dancers);
  dancerArrives({ name: 'David', gender: 'male' }, dancers);
  dancerArrives({ name: 'Christopher', gender: 'male' }, dancers);
  dancerArrives({ name: 'Beyonce', gender: 'female' }, dancers);

  let num = 0;
  let gender;
  while (dancers.first !== null) {
    num++;
    gender = peek(dancers).gender;
    dancers.dequeue();
  }

  return `There are ${num} ${gender} dancers waiting to dance`;
};

console.log(squareDance());