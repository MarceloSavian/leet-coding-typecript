import test, { describe } from 'node:test';
import assert from 'node:assert/strict';
import { getArrayThroughNextNodes } from '../Utils/GetArray';
import { BaseQueue } from './BaseQueue';

describe('BaseQueue', () => {
  test(`should have the same list when enqueuing values`, () => {
    const list = new BaseQueue(1);
    list.enqueue(2);
    list.enqueue(3);
    list.enqueue(4);
    list.enqueue(5);
    list.enqueue(6);

    const listSolution = [1, 2, 3, 4, 5, 6];

    const arr = getArrayThroughNextNodes(list.first);

    assert.equal(list.length, 6);
    assert.deepEqual(arr, listSolution);
  });
  test('should have the same list when enqueueing and dequeueing values', () => {
    const list = new BaseQueue(1);
    const dequeue1 = list.dequeue();
    const dequeue2 = list.dequeue();
    list.enqueue(1);
    list.enqueue(2);
    list.enqueue(3);
    list.enqueue(4);
    const dequeue3 = list.dequeue();
    const dequeue4 = list.dequeue();
    list.enqueue(5);
    list.enqueue(6);

    const result = [3, 4, 5, 6];

    const arr = getArrayThroughNextNodes(list.first);

    assert.equal(dequeue1?.value, 1);
    assert.equal(dequeue2, undefined);
    assert.equal(dequeue3?.value, 1);
    assert.equal(dequeue4?.value, 2);
    assert.equal(list.length, 4);
    assert.deepEqual(arr, result);
  });
});
