import test, { describe } from 'node:test';
import assert from 'node:assert/strict';
import { FindLoopLL } from './findLoop.js';

describe('hasLoop', () => {
  test('returns true when LL has no loop', () => {
    const list = new FindLoopLL(1);
    list.push(2);
    list.push(3);
    list.push(4);
    list.push(5);

    const middle = list.hasLoop();
    assert.strictEqual(middle, false);
  });
  test('returns true when LL has a loop', () => {
    const list = new FindLoopLL(1);
    list.push(2);
    list.push(3);
    list.push(4);
    list.push(5);

    list.tail!.next = list.head;

    const middle = list.hasLoop();
    assert.strictEqual(middle, true);
  });
  test('returns false when lenght is one', () => {
    const list = new FindLoopLL(1);

    const middle = list.hasLoop();
    assert.strictEqual(middle, false);
  });
});
