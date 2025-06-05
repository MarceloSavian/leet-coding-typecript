export class DoublyLLNode {
  value: number;
  next: DoublyLLNode | null;
  prev: DoublyLLNode | null;
  constructor(value: number) {
    this.value = value;
    this.next = null;
    this.prev = null;
  }
}

export class BaseDoublyLL {
  head: DoublyLLNode | null;
  tail: DoublyLLNode | null;
  length: number;
  constructor(value: number) {
    const newNode = new DoublyLLNode(value);
    this.head = newNode;
    this.tail = this.head;
    this.length = 1;
  }

  printList() {
    let temp = this.head;
    while (temp !== null) {
      console.log(temp.value);
      temp = temp.next;
    }
  }

  getHead() {
    return this.head;
  }

  getTail() {
    return this.tail;
  }

  makeEmpty() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  push(value: number) {
    const newNode = new DoublyLLNode(value);
    if (this.length === 0) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail!.next = newNode;
      newNode.prev = this.tail;
      this.tail = newNode;
    }
    this.length++;
    return this;
  }

  pop() {
    if (!this.tail) return null;

    const node = this.tail;
    this.tail = node.prev;
    this.tail!.next = null;
    node.prev = null;
    this.length--;

    if (this.length === 0) {
      this.makeEmpty();
    }

    return node;
  }

  unshift(value: number) {
    if (!this.head) return this.push(value);

    const node = new DoublyLLNode(value);

    node.next = this.head;
    this.head.prev = node;
    this.head = node;
    this.length++;
  }

  shift() {
    if (!this.head) return null;
    if (this.length == 1) return this.pop();

    const newHead = this.head.next!;
    this.head.next = null;
    newHead.prev = null;
    this.head = newHead;
    this.length--;
  }
}
