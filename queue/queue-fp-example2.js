import * as Queue from "./lib/Queue-fp.js";

const getRadixIndex = (num, digit) => {
  if (digit === 1) {
    return num % 10;
  }

  return Math.floor(num / 10);
};

const distribute = (data, digit, fn) => {
  let result = [[], [], [], [], [], [], [], [], [], []];
  for (const num of data) {
    result[getRadixIndex(num, digit)] = fn(
      result[getRadixIndex(num, digit)],
      num
    );
  }

  return result;
};

const collect = (distributeQueus) => {
  let result = [];
  for (const queue of distributeQueus) {
    let curQueue = queue;
    while (!Queue.isEmpty(curQueue)()) {
      const [newQueue, data] = Queue.dequeue(curQueue)();
      result.push(data);
      curQueue = newQueue;
    }
  }
  return result;
};

const data = [12, 34, 56, 32, 45, 67, 21, 9];
const firstRadixSort = collect(
  distribute(data, 1, (radixQueue, num) => {
    return Queue.enqueue(radixQueue)(num);
  })
);

const finalRadixSort = collect(
  distribute(firstRadixSort, 10, (radixQueue, num) => {
    return Queue.enqueue(radixQueue)(num);
  })
);

console.log(finalRadixSort);
