class ListNode {
  value: number;
  next: ListNode | null;
  constructor(value: number) {
    this.value = value;
    this.next = null;
  }
}

export class LinkedList {
  head: ListNode | null;
  tail: ListNode | null;
  constructor(value: number) {
    const newNode = new ListNode(value);
    this.head = newNode;
    this.tail = this.head;
  }

  printList() {
    let temp = this.head;
    while (temp !== null) {
      console.log(temp.value);
      temp = temp.next;
    }
  }

  getHead() {
    if (this.head === null) {
      console.log('Head: null');
    } else {
      console.log('Head: ' + this.head.value);
    }
  }

  getTail() {
    if (this.tail === null) {
      console.log('Tail: null');
    } else {
      console.log('Tail: ' + this.tail.value);
    }
  }

  makeEmpty() {
    this.head = null;
    this.tail = null;
  }

  push(value: number) {
    const newNode = new ListNode(value);
    if (!this.head || !this.tail) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
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
