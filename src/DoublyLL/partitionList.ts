import { BaseDoublyLL, DoublyLLNode } from './BaseDoublyLL';

export class PartitionListDLL extends BaseDoublyLL {
  constructor(value: number) {
    super(value);
  }

  partitionList(x: number) {
    let currentNode = this.head;

    if (!this.head) return;

    const pLower = new DoublyLLNode(0);
    let currentPLower = pLower;
    const pHigher = new DoublyLLNode(0);
    let currentPHigher = pHigher;

    while (currentNode) {
      if (currentNode.value < x) {
        currentPLower.next = currentNode;
        currentNode.prev = currentPLower;
        currentNode = currentNode.next;
        currentPLower = currentPLower.next;
        currentPLower.next = null;
      } else if (currentNode.value >= x) {
        currentPHigher.next = currentNode;
        currentNode.prev = currentPHigher;
        currentNode = currentNode.next;
        currentPHigher = currentPHigher.next;
        currentPHigher.next = null;
      }
    }

    console.log(pHigher, 'pHigher');
    console.log(pLower, 'pLower');

    if (!pLower.next) {
      this.head = pHigher.next;
      if (pHigher.next) pHigher.next.prev = null;
      this.tail = currentPHigher;
      pHigher.next = null;
    } else {
      currentPLower.next = pHigher.next;
      pLower.next.prev = null;
      this.head = pLower.next;
      if (pHigher.next) {
        this.tail = currentPHigher;
        pHigher.next.prev = currentPLower;
      } else {
        this.tail = currentPLower;
      }
    }

    this.head!.prev = null;
  }
}
