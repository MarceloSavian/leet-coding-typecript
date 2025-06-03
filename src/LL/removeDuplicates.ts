import { BaseLinkedList } from './BaseLinkedList';

export class RemoveDuplicatesLL extends BaseLinkedList {
  constructor(value: number) {
    super(value);
  }

  removeDuplicates() {
    const head = this.getHead();
    if (!head) return;

    let current = head;

    while (current?.next) {
      let runner = current.next;
      let previousRunner = current;
      while (runner) {
        if (runner.value === current.value) {
          previousRunner.next = runner.next;
          runner.next = null;
          runner = previousRunner.next!;
          this.length--;
        } else {
          runner = runner.next!;
          previousRunner = previousRunner.next!;
        }
      }
      current = current.next;
    }
  }
}
