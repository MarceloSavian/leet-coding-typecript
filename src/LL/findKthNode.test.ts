import test, { describe } from 'node:test';
import assert from 'node:assert/strict';
import { FindKthNodeLL } from './findKthNode';

describe('findKthNodeFromEnd', () => {
  test('returns true the 5th node', () => {
    console.log('returns true the 5th node');
    const list = new FindKthNodeLL(1);
    list.push(2);
    list.push(3);
    list.push(4);
    list.push(5);
    list.push(6);
    list.push(7);

    const middle = list.findKthNodeFromEnd(5);
    assert.strictEqual(middle?.value, 3);
  });
  test('returns false for the 5th node if does not exists', () => {
    console.log('returns false for the 5th node if does not exists');
    const list = new FindKthNodeLL(1);
    list.push(2);
    list.push(3);

    const middle = list.findKthNodeFromEnd(5);
    assert.strictEqual(middle, null);
  });
  test('returns false if lenght is one', () => {
    console.log('returns false if lenght is one');
    const list = new FindKthNodeLL(1);

    const middle = list.findKthNodeFromEnd(5);
    assert.strictEqual(middle, null);
  });
  test('returns false if lenght is one', () => {
    console.log('returns false if lenght is one');
    const list = new FindKthNodeLL(1);

    const middle = list.findKthNodeFromEnd(1);
    assert.strictEqual(middle?.value, 1);
  });
  test('returns false if lenght is 2', () => {
    console.log('returns false if lenght is one');
    const list = new FindKthNodeLL(1);
    list.push(2);

    const middle = list.findKthNodeFromEnd(5);
    assert.strictEqual(middle, null);
  });
  test('returns false if lenght is 3', () => {
    console.log('returns false if lenght is one');
    const list = new FindKthNodeLL(1);
    list.push(2);
    list.push(3);

    const middle = list.findKthNodeFromEnd(5);
    assert.strictEqual(middle, null);
  });
  test('returns false if lenght is 3', () => {
    console.log('returns false if lenght is one');
    const list = new FindKthNodeLL(1);
    list.push(2);
    list.push(3);

    const middle = list.findKthNodeFromEnd(3);
    assert.strictEqual(middle?.value, 1);
  });
  test('returns null when k is 0', () => {
    console.log('returns false if lenght is one');
    const list = new FindKthNodeLL(1);
    list.push(2);
    list.push(3);

    const middle = list.findKthNodeFromEnd(0);
    assert.strictEqual(middle, null);
  });
  test('returns null when k is less than 0', () => {
    console.log('returns false if lenght is one');
    const list = new FindKthNodeLL(1);
    list.push(2);
    list.push(3);

    const middle = list.findKthNodeFromEnd(-1);
    assert.strictEqual(middle, null);
  });
});
