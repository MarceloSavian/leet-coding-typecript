import test, { describe } from 'node:test';
import assert from 'node:assert/strict';
import { PartitionListLL } from './partitionList';

const list1 = new PartitionListLL(1);
list1.push(4);
list1.push(3);
list1.push(2);
list1.push(5);
list1.push(2);

const list1Solution = new PartitionListLL(1);
list1Solution.push(2);
list1Solution.push(2);
list1Solution.push(4);
list1Solution.push(3);
list1Solution.push(5);

const list2 = new PartitionListLL(4);
list2.push(5);
list2.push(6);

const list2Solution = new PartitionListLL(4);
list2Solution.push(5);
list2Solution.push(6);

const list3 = new PartitionListLL(1);
list3.push(2);
list3.push(2);

const list3Solution = new PartitionListLL(1);
list3Solution.push(2);
list3Solution.push(2);

const list4 = new PartitionListLL(1);

const list4Solution = new PartitionListLL(1);

const list5 = new PartitionListLL(3);
list3.push(3);
list3.push(3);

const list5Solution = new PartitionListLL(3);
list3Solution.push(3);
list3Solution.push(3);

const testCases = [
  { input: list1, expected: list1Solution, partition: 3 },
  { input: list2, expected: list2Solution, partition: 3 },
  { input: list3, expected: list3Solution, partition: 3 },
  { input: list4, expected: list4Solution, partition: 3 },
  { input: list5, expected: list5Solution, partition: 3 },
];

describe('partitionList', () => {
  for (const { input, expected, partition } of testCases) {
    test(`list should be equal for partition ${partition}`, () => {
      input.partitionList(partition);
      assert.deepEqual(input, expected);
    });
  }
});
