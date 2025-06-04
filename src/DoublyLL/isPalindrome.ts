import { BaseDoublyLL } from './BaseDoublyLL';

export class IsPalindromeDLL extends BaseDoublyLL {
  constructor(value: number) {
    super(value);
  }

  isPalindrome(): boolean {
    if (!this.head) return true;

    let start = this.head;
    let finish = this.tail!;

    while (start && finish) {
      if (start.value !== finish.value) return false;

      finish = finish.prev!;
      start = start.next!;
    }

    return true;
  }
}
