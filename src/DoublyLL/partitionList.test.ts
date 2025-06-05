import test, { describe } from 'node:test';
import assert from 'node:assert/strict';
import { PartitionListDLL } from './partitionList';

const list1 = new PartitionListDLL(1);
list1.push(4);
list1.push(3);
list1.push(2);
list1.push(5);
list1.push(2);

const list1Solution = [1, 2, 2, 4, 3, 5];

const list2 = new PartitionListDLL(4);
list2.push(5);
list2.push(6);

const list2Solution = [4, 5, 6];

const list3 = new PartitionListDLL(1);
list3.push(2);
list3.push(2);

const list3Solution = [1, 2, 2];

const list4 = new PartitionListDLL(1);

const list4Solution = [1];

const list5 = new PartitionListDLL(3);
list5.push(3);
list5.push(3);

const list5Solution = [3, 3, 3];

const list6 = new PartitionListDLL(3);
list6.push(8);
list6.push(5);
list6.push(10);
list6.push(2);
list6.push(1);

const list6Solution = [3, 2, 1, 8, 5, 10];

const testCases = [
  { input: list1, expected: list1Solution, partition: 3 },
  { input: list2, expected: list2Solution, partition: 3 },
  { input: list3, expected: list3Solution, partition: 3 },
  { input: list4, expected: list4Solution, partition: 3 },
  { input: list5, expected: list5Solution, partition: 3 },
  { input: list6, expected: list6Solution, partition: 5 },
];

describe('partitionList', () => {
  for (const { input, expected, partition } of testCases) {
    test(`list should be equal for partition ${partition}`, () => {
      input.partitionList(partition);
      let a = [];
      let b = input.tail;
      while (b) {
        a.unshift(b.value);
        b = b.prev;
      }
      assert.deepEqual(a, expected);
    });
  }
});
