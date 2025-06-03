import { BaseLinkedList } from './BaseLinkedList';

export class FindLoopLL extends BaseLinkedList {
  constructor(value: number) {
    super(value);
  }

  hasLoop(): boolean {
    if (!this.head) return false;

    let slow = this.getHead();
    let fast = this.getHead();

    while (fast && fast.next) {
      fast = fast.next.next;
      slow = slow!.next;

      if (fast == slow) return true;
    }

    return false;
  }
}
