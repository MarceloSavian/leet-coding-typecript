import { BaseLinkedList } from './BaseLinkedList';

export class BinaryToDecimal extends BaseLinkedList {
  constructor(value: number) {
    super(value);
  }

  binaryToDecimal(): number {
    let num = 0;
    let current = this.getHead();

    while (current) {
      num = num * 2 + current.value;
      current = current.next;
    }

    return num;
  }
}
