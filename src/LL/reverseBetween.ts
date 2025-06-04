import { BaseLinkedList, ListNode } from './BaseLinkedList';

export class ReverseBetween extends BaseLinkedList {
  constructor(value: number) {
    super(value);
  }

  reverseBetween(startIndexInput: number, endIndexInput: number) {
    let endIndex = endIndexInput;
    let startIndex = startIndexInput < 0 ? 0 : startIndexInput;
    if (!this.head || this.length == 1) return;
    if (this.length - 1 < endIndexInput) endIndex = this.length - 1;

    const dummy = new ListNode(0);
    dummy.next = this.head;

    let previous = dummy;
    let current = this.head;
    let next = this.head.next;

    for (let index = 1; index <= startIndex && next; index++) {
      previous = previous.next!;
      current = current.next!;
      next = next.next;
    }

    for (let index = startIndex; index <= endIndex - 1; index++) {
      current.next = next!.next;
      next!.next = previous.next;
      previous.next = next;

      if (!current.next) this.tail = current;
      next = current.next;
    }

    this.head = dummy.next;
  }
}
