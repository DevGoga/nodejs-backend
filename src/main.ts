const getValue = <T1, T2>(obj1: T1, obj2: T2, key: keyof (T1 | T2)) => {
  return [obj1[key], obj2[key]];
};

const [z, x] = getValue({ name: 'z' }, { name: 'x' }, 'name');
console.log(z.toUpperCase(), x.toLowerCase()); // Z X

const [a, b] = getValue({ a: 10, b: 20 }, { a: 11, c: 20 }, 'a');
console.log(a * 1.1, b - 3); // 11 8

const [one, xxx] = getValue({ x: 1 }, { x: 'xxx' }, 'x');
console.log(one, xxx); // 1 xxx

console.log(one.toUpperCase()); // Ошибка
console.log(xxx * 1); // Ошибка

getValue({}, {}, ''); // Ошибка
getValue({ a: 1, b: 2 }, {}, ''); // Ошибка
getValue({ a: 1, b: 2 }, { c: 1, d: 3 }, 'a'); // Ошибка
getValue({ a: 1, b: 2 }, { c: 1, d: 3 }, 'c'); // Ошибка
