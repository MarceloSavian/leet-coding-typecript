import { BaseLinkedList, ListNode } from './BaseLinkedList';

export class FindMiddleNodeLL extends BaseLinkedList {
  constructor(value: number) {
    super(value);
  }

  findMiddleNode() {
    if (!this.head) return null;

    let slow = this.head;
    let fast: ListNode | null = this.head;
    // Iterate through the list
    while (fast && fast.next && slow && slow.next) {
      // Move slow pointer one step
      slow = slow.next;
      // Move fast pointer two steps
      fast = fast.next.next;
    }
    // Return middle node when fast reaches end
    return slow;
  }
}
