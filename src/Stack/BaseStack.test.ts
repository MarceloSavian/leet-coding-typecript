import test, { describe } from 'node:test';
import assert from 'node:assert/strict';
import { BaseStack } from './BaseStack';
import { getArrayThroughNextNodes } from '../Utils/GetArray';

describe('BaseStack', () => {
  test(`should have the same list when pushing values`, () => {
    const list = new BaseStack(1);
    list.push(2);
    list.push(3);
    list.push(4);
    list.push(5);
    list.push(6);

    const listSolution = [6, 5, 4, 3, 2, 1];

    const arr = getArrayThroughNextNodes(list.top);

    assert.equal(list.length, 6);
    assert.deepEqual(arr, listSolution);
  });
  test('should have the same list when pushing and poping values', () => {
    const list = new BaseStack(1);
    const pop1 = list.pop();
    const pop2 = list.pop();
    list.push(1);
    list.push(2);
    list.push(3);
    list.push(4);
    const pop3 = list.pop();
    const pop4 = list.pop();
    list.push(5);
    list.push(6);

    const result = [6, 5, 2, 1];

    const arr = getArrayThroughNextNodes(list.top);

    assert.equal(pop1?.value, 1);
    assert.equal(pop2, undefined);
    assert.equal(pop3?.value, 4);
    assert.equal(pop4?.value, 3);
    assert.equal(list.length, 4);
    assert.deepEqual(arr, result);
  });
});
