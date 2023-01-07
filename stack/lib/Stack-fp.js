export default function createStack() {
  const isStack = (stack) => {
    return stack instanceof Array;
  };

  const stackCheck = (stack) => {
    if (!isStack(stack)) {
      throw new Error("Stack 형식이 올바르지 않습니다");
    }
  };

  const push = (stack) => (d) => {
    stackCheck(stack);
    const result = [...stack];
    result.push(d);
    return result;
  };

  const pop = (stack) => {
    stackCheck(stack);
    const result = [...stack];
    return [result, result.pop()];
  };

  return {
    push,
    pop,
  };
}
