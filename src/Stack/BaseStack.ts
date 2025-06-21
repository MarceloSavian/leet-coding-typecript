export class BaseStackNode {
  next: null | BaseStackNode;
  value: number;

  constructor(value: number) {
    this.next = null;
    this.value = value;
  }
}

export class BaseStack {
  top: null | BaseStackNode;
  length: number;

  constructor(value: number) {
    this.top = new BaseStackNode(value);
    this.length = 1;
  }

  push(value: number) {
    const newNode = new BaseStackNode(value);

    newNode.next = this.top;
    this.top = newNode;
    this.length++;
  }

  pop() {
    if (!this.top) return undefined;

    const oldTop = this.top;
    this.top = oldTop.next;
    oldTop.next = null;
    this.length--;
    return oldTop;
  }
}
