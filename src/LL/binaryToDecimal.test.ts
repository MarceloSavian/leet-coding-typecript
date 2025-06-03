import test, { describe } from 'node:test';
import assert from 'node:assert/strict';
import { BinaryToDecimal } from './binaryToDecimal';

const list11 = new BinaryToDecimal(1);
list11.push(0);
list11.push(1);
list11.push(1);

const list12 = new BinaryToDecimal(1);
list12.push(1);
list12.push(0);
list12.push(0);

const list1 = new BinaryToDecimal(1);

const list0 = new BinaryToDecimal(0);

const testCases = [
  { input: list11, expected: 11 },
  { input: list12, expected: 12 },
  { input: list1, expected: 1 },
  { input: list0, expected: 0 },
];

describe('binaryToDecimal', () => {
  for (const { input, expected } of testCases) {
    test(`binary list should be equals to ${expected}`, () => {
      const middle = input.binaryToDecimal();
      assert.strictEqual(middle, expected);
    });
  }
});
