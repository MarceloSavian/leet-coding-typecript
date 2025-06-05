import test, { describe } from 'node:test';
import assert from 'node:assert/strict';
import { ReverseDLL } from './reverse';

const list1 = new ReverseDLL(1);
list1.push(2);
list1.push(3);
list1.push(4);
list1.push(5);

const list1Solution = [5, 4, 3, 2, 1];

const list2 = new ReverseDLL(1);
list2.push(2);
list2.push(3);
list2.push(2);
list2.push(2);

const list2Solution = [2, 2, 3, 2, 1];

const list3 = new ReverseDLL(1);

const list3Solution = [1];

const testCases = [
  { input: list1, expected: list1Solution },
  { input: list2, expected: list2Solution },
  { input: list3, expected: list3Solution },
];

describe('reverse', () => {
  for (const { input, expected } of testCases) {
    test(`should expect to reverse the list`, () => {
      input.reverse();
      let a = [];
      let b = input.head;

      while (b) {
        a.push(b.value);
        b = b.next;
      }

      assert.deepEqual(a, expected);
    });
  }
});
