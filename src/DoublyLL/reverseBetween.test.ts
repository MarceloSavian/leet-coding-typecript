import test, { describe } from 'node:test';
import assert from 'node:assert/strict';
import { ReverseDLL } from './reverse';
import { ReverseBetweenDLL } from './reverseBetween';

const list1 = new ReverseBetweenDLL(1);
list1.push(2);
list1.push(3);
list1.push(4);
list1.push(5);
list1.push(6);

const list1Solution = [1, 5, 4, 3, 2, 5];

const list2 = new ReverseBetweenDLL(1);
list2.push(2);
list2.push(3);
list2.push(4);
list2.push(5);
list2.push(6);

const list2Solution = [5, 4, 3, 2, 1, 6];

const list3 = new ReverseBetweenDLL(1);
list3.push(2);
list3.push(3);
list3.push(4);
list3.push(5);
list3.push(6);

const list3Solution = [1, 6, 5, 4, 3, 2, 1];

const list4 = new ReverseBetweenDLL(1);
list4.push(2);
list4.push(3);
list4.push(4);
list4.push(5);
list4.push(6);

const list4Solution = [6, 5, 4, 3, 2, 1];

const list5 = new ReverseBetweenDLL(1);
list5.push(2);
list5.push(3);
list5.push(4);
list5.push(5);
list5.push(6);

const list5Solution = [6, 5, 4, 3, 2, 1];

const list6 = new ReverseBetweenDLL(6);

const list6Solution = [6];

const testCases = [
  { input: list1, expected: list1Solution, startIndex: 1, endIndex: 4 },
  //   { input: list2, expected: list2Solution, startIndex: 0, endIndex: 4 },
  //   { input: list3, expected: list3Solution, startIndex: 1, endIndex: 5 },
  //   { input: list4, expected: list4Solution, startIndex: 0, endIndex: 5 },
  //   { input: list5, expected: list5Solution, startIndex: 0, endIndex: 7 },
  //   { input: list6, expected: list6Solution, startIndex: 0, endIndex: 7 },
];

describe('reverse', () => {
  for (const { input, expected, startIndex, endIndex } of testCases) {
    test(`should expect to reverse the list`, () => {
      input.reverseBetween(startIndex, endIndex);
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
