import { BaseLinkedList, ListNode } from './BaseLinkedList';

export class SwapPairsLL extends BaseLinkedList {
  constructor(value: number) {
    super(value);
  }

  swapPairs() {
    if (!this.head || this.length == 1) return;

    const dummy = new ListNode(0);
    dummy.next = this.head;

    let previous = dummy;
    let current1 = this.head;
    let current2 = current1.next!;
    let after = current2.next;

    for (let index = 2; index <= this.length; index = index + 2) {
      previous.next = current2;
      current1.next = after;
      current2.next = current1;

      previous = current1;
      current1 = after!;
      current2 = current1?.next!;
      after = current2?.next;
    }

    if (!(this.length % 2)) this.tail = previous;
    this.head = dummy.next;
  }
}
