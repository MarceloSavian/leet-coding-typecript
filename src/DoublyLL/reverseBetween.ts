import { BaseDoublyLL, DoublyLLNode } from './BaseDoublyLL';

export class ReverseBetweenDLL extends BaseDoublyLL {
  constructor(value: number) {
    super(value);
  }

  reverseBetween(startIndexInput: number, endIndexInput: number) {
    if (!this.head) return;
    if (this.length === 1) return;
    let startIndex = startIndexInput < 0 ? 0 : startIndexInput;
    let endIndex =
      endIndexInput >= this.length ? this.length - 1 : endIndexInput;

    if (startIndex > endIndex) {
      let dummy = startIndex;
      startIndex = endIndex;
      endIndex = dummy;
    }

    let firstNode = this.head;
    let previousNode = this.head;

    for (let i = 1; i <= startIndexInput; i++) {
      firstNode = firstNode.next!;
      previousNode = firstNode.prev!;
    }

    let dummy = new DoublyLLNode(0);
    let currentDummy = dummy;
    let current = firstNode;
    for (let i = startIndexInput; i <= endIndex; i++) {
      const nextNode = current.next!;

      current.prev = null;
      current.next = currentDummy;
      currentDummy.prev = current;

      currentDummy = current;
      current = nextNode;
    }

    previousNode.next = currentDummy;
    if (current) current.prev = dummy.prev;
    dummy.prev!.next = current;

    if (this.head === dummy.prev) this.head = currentDummy;
    if (!current) this.tail = currentDummy;
  }
}
