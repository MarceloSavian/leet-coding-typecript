import test, { describe } from 'node:test';
import assert from 'node:assert/strict';
import { ReverseBetween } from './reverseBetween';

const list1 = new ReverseBetween(1);
list1.push(2);
list1.push(3);
list1.push(4);
list1.push(5);
list1.push(6);

const list1Solution = new ReverseBetween(1);
list1Solution.push(5);
list1Solution.push(4);
list1Solution.push(3);
list1Solution.push(2);
list1Solution.push(6);

const list2 = new ReverseBetween(1);
list2.push(2);
list2.push(3);
list2.push(4);
list2.push(5);
list2.push(6);

const list2Solution = new ReverseBetween(5);
list2Solution.push(4);
list2Solution.push(3);
list2Solution.push(2);
list2Solution.push(1);
list2Solution.push(6);

const list3 = new ReverseBetween(1);
list3.push(2);
list3.push(3);
list3.push(4);
list3.push(5);
list3.push(6);

const list3Solution = new ReverseBetween(1);
list3Solution.push(6);
list3Solution.push(5);
list3Solution.push(4);
list3Solution.push(3);
list3Solution.push(2);

const list4 = new ReverseBetween(1);
list4.push(2);
list4.push(3);
list4.push(4);
list4.push(5);
list4.push(6);

// previous = 2 current = 3 next = 4 - step 0
// previous = 2 current = 3 next = 5

const list4Solution = new ReverseBetween(6);
list4Solution.push(5);
list4Solution.push(4);
list4Solution.push(3);
list4Solution.push(2);
list4Solution.push(1);

const list5 = new ReverseBetween(1);
list5.push(2);
list5.push(3);
list5.push(4);
list5.push(5);
list5.push(6);

const list5Solution = new ReverseBetween(6);
list5Solution.push(5);
list5Solution.push(4);
list5Solution.push(3);
list5Solution.push(2);
list5Solution.push(1);

const list6 = new ReverseBetween(6);

const list6Solution = new ReverseBetween(6);

const testCases = [
  { input: list1, expected: list1Solution, startIndex: 1, endIndex: 4 },
  { input: list2, expected: list2Solution, startIndex: 0, endIndex: 4 },
  { input: list3, expected: list3Solution, startIndex: 1, endIndex: 5 },
  { input: list4, expected: list4Solution, startIndex: 0, endIndex: 5 },
  { input: list5, expected: list5Solution, startIndex: 0, endIndex: 7 },
  { input: list6, expected: list6Solution, startIndex: 0, endIndex: 7 },
];

describe('reverseBetween', () => {
  for (const { input, expected, startIndex, endIndex } of testCases) {
    test(`list should be reversed between ${startIndex} and ${endIndex}`, () => {
      input.reverseBetween(startIndex, endIndex);
      assert.deepEqual(input, expected);
    });
  }
});
