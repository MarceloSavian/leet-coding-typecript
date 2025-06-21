import { BaseStackNode } from '../Stack/BaseStack';

export function getArrayThroughNextNodes(node: BaseStackNode | null) {
  let a = [];
  let b: BaseStackNode | null = node;

  while (b) {
    a.push(b.value);
    b = b.next;
  }

  return a;
}
