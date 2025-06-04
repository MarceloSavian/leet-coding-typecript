import test, { describe } from 'node:test';
import assert from 'node:assert/strict';
import { SwapPairsLL } from './swapPairs';

const list1 = new SwapPairsLL(1);
list1.push(2);
list1.push(3);
list1.push(4);
list1.push(5);
list1.push(6);

const list1Solution = new SwapPairsLL(2);
list1Solution.push(1);
list1Solution.push(4);
list1Solution.push(3);
list1Solution.push(6);
list1Solution.push(5);

const list2 = new SwapPairsLL(1);
list2.push(2);
list2.push(3);
list2.push(4);
list2.push(5);

const list2Solution = new SwapPairsLL(2);
list2Solution.push(1);
list2Solution.push(4);
list2Solution.push(3);
list2Solution.push(5);

const list3 = new SwapPairsLL(1);

const list3Solution = new SwapPairsLL(1);

const testCases = [
  { input: list1, expected: list1Solution },
  { input: list2, expected: list2Solution },
  { input: list3, expected: list3Solution },
];

describe('swapPairs', () => {
  for (const { input, expected } of testCases) {
    test(`should swap all pairs`, () => {
      input.swapPairs();
      assert.deepEqual(input, expected);
    });
  }
});
