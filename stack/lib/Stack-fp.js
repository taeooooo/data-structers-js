const isStack = (stack, fn) => {
  if (stack instanceof Array) {
    return fn;
  }

  throw new Error("Stack 형식이 올바르지 않습니다");
};

const push = (stack) =>
  isStack(stack, (d) => {
    const result = [...stack];
    result.push(d);
    return result;
  });

const pop = (stack) =>
  isStack(stack, () => {
    const result = [...stack];
    return [result, result.pop()];
  });

const isEmpty = (stack) =>
  isStack(stack, () => {
    return stack.length === 0;
  });

export { push, pop, isEmpty };
