import { BaseLinkedList, ListNode } from './BaseLinkedList';

export class PartitionListLL extends BaseLinkedList {
  constructor(value: number) {
    super(value);
  }

  partitionList(x: number) {
    let currentNode = this.head;

    if (!this.head) return;

    const pLower = new ListNode(0);
    let currentPLower = pLower;
    const pHigher = new ListNode(0);
    let currentPHigher = pHigher;

    while (currentNode) {
      if (currentNode.value < x) {
        currentPLower.next = currentNode;
        currentNode = currentNode.next;
        currentPLower = currentPLower.next;
        currentPLower.next = null;
      } else if (currentNode.value >= x) {
        currentPHigher.next = currentNode;
        currentNode = currentNode.next;
        currentPHigher = currentPHigher.next;
        currentPHigher.next = null;
      }
    }

    if (!pLower.next) {
      this.head = pHigher.next;
      this.tail = currentPHigher;
      pHigher.next = null;
    } else {
      currentPLower.next = pHigher.next;
      this.head = pLower.next;
      if (pHigher.next) {
        this.tail = currentPHigher;
      } else {
        this.tail = currentPLower;
      }
    }
  }
}
