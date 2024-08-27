const countTypes = (...args: any[]): Record<string, number> => {
  return args.reduce((acc, cur) => {
    const key = typeof cur;
    acc[key] = (acc[key] || 0) + 1;
    return acc;
  }, {});
};

// Просто пустая функция, чтобы её тоже передать как аргумент в countTypes
const func = () => {};
console.log(
  countTypes(3, true, 'a', 1, {}, func, 4, [], undefined, false, 0, undefined, func, {}, ''),
);

// Ожидаемый вывод:
// { number: 4, boolean: 2, string: 2, object: 3, function: 2, undefined: 2 }
