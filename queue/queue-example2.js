import Queue from "./lib/Queue.js";

function distribute(data, queues, digit) {
  for (let i = 0; i < data.length; i += 1) {
    if (digit == 1) {
      queues[data[i] % 10].enqueue(data[i]);
    }

    if (digit == 10) {
      queues[Math.floor(data[i] / 10)].enqueue(data[i]);
    }
  }
}

function collect(queues, data) {
  let i = 0;
  for (let digit = 0; digit < 10; digit += 1) {
    while (!queues[digit].empty()) {
      data[i++] = queues[digit].dequeue();
    }
  }
}

const data = [12, 34, 56, 32, 45, 67, 21, 9];

let queues = [];
for (let i = 0; i < 10; i += 1) {
  queues.push(new Queue());
}

distribute(data, queues, 1);
collect(queues, data);
distribute(data, queues, 10);
collect(queues, data);
console.log(data);
