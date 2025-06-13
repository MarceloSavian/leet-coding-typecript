import { BaseDoublyLL, DoublyLLNode } from './BaseDoublyLL';

export class ReverseBetweenDLL extends BaseDoublyLL {
  constructor(value: number) {
    super(value);
  }

  reverseBetween(startIndexInput: number, endIndexInput: number) {
    if (!this.head) return;
    if (this.length === 1) return;
    let startIndex = startIndexInput < 0 ? 0 : startIndexInput;
    let endIndex = endIndexInput >= this.length ? 0 : endIndexInput;
    console.log(startIndex, endIndex);

    if (startIndex > endIndex) {
      let dummy = startIndex;
      startIndex = endIndex;
      endIndex = dummy;
    }

    let firstNode = this.head;

    for (let i = 0; i <= startIndexInput; i++) {
      firstNode = firstNode.next!;
    }

    let lastNode = this.head;

    for (let i = 0; i <= endIndexInput; i++) {
      lastNode = lastNode.next!;
    }

    let dummy = new DoublyLLNode(0);
    let currentDummy = dummy;
    let current = firstNode;

    for (let i = startIndexInput; i <= endIndexInput; i++) {
      const nextNode = current.next!;

      current.prev = null;
      current.next = currentDummy;
      currentDummy.prev = current;

      currentDummy = current;
      current = nextNode;
    }

    let a = [];
    let b: DoublyLLNode | null = this.head;

    while (b) {
      console.log(b);
      a.push(b.value);
      b = b.next;
    }
    console.log(a);
  }
}
