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
class stackQueue {
  constructor() {
    this.first = null;
    this.last = null;
  }


}