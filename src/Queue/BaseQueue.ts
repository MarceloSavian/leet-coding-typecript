export class BaseQueueNode {
  next: null | BaseQueueNode;
  value: number;

  constructor(value: number) {
    this.value = value;
    this.next = null;
  }
}

export class BaseQueue {
  first: null | BaseQueueNode;
  last: null | BaseQueueNode;
  length: number;

  constructor(value: number) {
    this.first = new BaseQueueNode(value);
    this.last = this.first;
    this.length = 1;
  }

  enqueue(value: number) {
    const newNode = new BaseQueueNode(value);
    if (!this.last) this.first = newNode;
    else this.last.next = newNode;

    this.last = newNode;
    this.length++;
  }

  dequeue() {
    const popNode = this.first;
    if (!popNode) return undefined;

    if (!popNode.next) this.last = null;
    this.first = popNode.next;

    popNode.next = null;
    this.length--;
    return popNode;
  }
}
