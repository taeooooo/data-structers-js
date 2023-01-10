const isList = (list, fn) => {
  if (list instanceof Array) {
    return fn;
  }

  throw new Error("List 형식이 올바르지 않습니다");
};

const find = (list, element) => {};

export const append = (list) =>
  isList(list, (element) => {
    const result = [...list];
    result.push(element);
    return result;
  });

export const getFrontItem = (list) =>
  isList(list, () => {
    return list[0];
  });

export const getEndItem = (list) =>
  isList(list, () => {
    return list[list.length - 1];
  });

export const getItemByIndex = (list) =>
  isList(list, (index) => {
    return list[index];
  });

export const contains = (list) =>
  isList(list, (element) => {
    return list.some((e) => {
      if (typeof element === "object") {
        return (
          Object.entries(e).toString() == Object.entries(element).toString()
        );
      }

      return e == element;
    });
  });

export const remove = (list) =>
  isList(list, (element) => {
    return list.filter((e) => {
      if (typeof element === "object") {
        return (
          Object.entries(e).toString() != Object.entries(element).toString()
        );
      }

      return e !== element;
    });
  });
