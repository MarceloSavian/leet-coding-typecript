import test, { describe } from 'node:test';
import assert from 'node:assert/strict';
import { LinkedList } from './findMiddleNode.js';

describe('findMiddleNode', () => {
  test('returns the correct middle node (odd number of nodes)', () => {
    const list = new LinkedList(1);
    list.push(2);
    list.push(3);
    list.push(4);
    list.push(5);

    const middle = list.findMiddleNode();
    assert(middle !== null);
    assert.strictEqual(middle?.value, 3);
  });

  test('findMiddleNode returns the correct middle node (even number of nodes)', () => {
    const list = new LinkedList(1);
    list.push(2);
    list.push(3);
    list.push(4);

    const middle = list.findMiddleNode();
    assert(middle !== null);
    assert.strictEqual(middle?.value, 3); // Returns second middle in even-length list
  });

  test('findMiddleNode returns null for empty list', () => {
    const list = new LinkedList(0);
    list.makeEmpty();

    const middle = list.findMiddleNode();
    assert.strictEqual(middle, null);
  });
});
