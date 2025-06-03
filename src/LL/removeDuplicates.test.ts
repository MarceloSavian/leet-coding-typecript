import test, { describe } from 'node:test';
import assert from 'node:assert/strict';
import { RemoveDuplicatesLL } from './removeDuplicates';

const list5 = new RemoveDuplicatesLL(1);
list5.push(2);
list5.push(3);
list5.push(2);
list5.push(5);

const list5Without = new RemoveDuplicatesLL(1);
list5Without.push(2);
list5Without.push(3);
list5Without.push(5);

const listMultipleEqual = new RemoveDuplicatesLL(1);
listMultipleEqual.push(2);
listMultipleEqual.push(3);
listMultipleEqual.push(2);
listMultipleEqual.push(5);
listMultipleEqual.push(5);
listMultipleEqual.push(5);
listMultipleEqual.push(5);
listMultipleEqual.push(5);
listMultipleEqual.push(5);
listMultipleEqual.push(5);
listMultipleEqual.push(5);

const list2Equal = new RemoveDuplicatesLL(1);
list2Equal.push(1);

const list10Equal = new RemoveDuplicatesLL(1);
list10Equal.push(1);
list10Equal.push(1);
list10Equal.push(1);
list10Equal.push(1);
list10Equal.push(1);
list10Equal.push(1);
list10Equal.push(1);
list10Equal.push(1);
list10Equal.push(1);
list10Equal.push(1);

const testCases = [
  { input: list5, expected: list5Without },
  { input: listMultipleEqual, expected: list5Without },
  { input: list2Equal, expected: new RemoveDuplicatesLL(1) },
  { input: list10Equal, expected: new RemoveDuplicatesLL(1) },
];

describe('removeDuplicates', () => {
  for (const { input, expected } of testCases) {
    test('removes the correct nodes from list', () => {
      input.removeDuplicates();
      assert.deepEqual(input, expected);
      assert.equal(input.length, expected.length);
    });
  }
});
