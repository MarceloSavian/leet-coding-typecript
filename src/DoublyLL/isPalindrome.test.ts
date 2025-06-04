import test, { describe } from 'node:test';
import assert from 'node:assert/strict';
import { IsPalindromeDLL } from './isPalindrome';

const list1 = new IsPalindromeDLL(1);
list1.push(2);
list1.push(3);
list1.push(2);
list1.push(1);

const list2 = new IsPalindromeDLL(1);
list2.push(2);
list2.push(3);
list2.push(2);
list2.push(2);

const list3 = new IsPalindromeDLL(1);

const testCases = [
  { input: list1, expected: true },
  { input: list2, expected: false },
  { input: list3, expected: true },
];

describe('isPalindrome', () => {
  for (const { input, expected } of testCases) {
    test(`should expect the result of palindrome to be ${expected}`, () => {
      const result = input.isPalindrome();
      assert.deepEqual(result, expected);
    });
  }
});
