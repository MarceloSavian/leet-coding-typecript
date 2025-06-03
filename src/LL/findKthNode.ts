import { BaseLinkedList } from './BaseLinkedList';

export class FindKthNodeLL extends BaseLinkedList {
  constructor(value: number) {
    super(value);
  }

  findKthNodeFromEnd(k: number) {
    let slow = this.getHead();
    let fast = this.getHead();

    if (!fast || !slow || k <= 0) return null;

    for (let index = 2; index <= k; index++) {
      if (!fast?.next) return null;
      fast = fast.next;
    }

    while (fast?.next) {
      fast = fast.next;
      slow = slow!.next;
    }

    return slow;
  }
}
