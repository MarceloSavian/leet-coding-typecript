import { BaseDoublyLL, DoublyLLNode } from './BaseDoublyLL';

export class ReverseDLL extends BaseDoublyLL {
  constructor(value: number) {
    super(value);
  }

  reverse() {
    if (!this.head || this.length === 1) return;

    let current = this.tail;

    while (current) {
      const previous = current.prev;
      const next = current.next;

      current.prev = next;
      current.next = previous;

      current = previous;
    }

    const newTail = this.head;
    this.head = this.tail;
    this.tail = newTail;
  }
}
