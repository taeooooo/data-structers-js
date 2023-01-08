const isQueue = (queue, fn) => {
  if (queue instanceof Array) {
    return fn;
  }

  throw new Error("Stack 형식이 올바르지 않습니다");
};

const enqueue = (queue) =>
  isQueue(queue, (d) => {
    const result = [...queue];
    result.push(d);
    return result;
  });

const dequeue = (queue) =>
  isQueue(queue, () => {
    const result = [...queue];
    return [result, result.shift()];
  });

const isEmpty = (queue) =>
  isQueue(queue, () => {
    return queue.length === 0;
  });

export { enqueue, dequeue, isEmpty };
