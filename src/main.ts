// Напишите деструктуризацию, которая достаёт значения и записывает их в переменные,
// чтобы реальный вывод программы совпадал с ожидаемым. Используйте только одну деструктуризацию
const storage = [
  'nick',
  'nack',
  'nock',
  [
    {
      first: 'forecast',
      child: null,
    },
    {
      first: 'castfore',
      child: null,
    },
    'zzz',
  ],
  'no-1',
  'no-2',
] as const;

const [a, b, c, [{ first: name1, child: name2 }, b1, ...cos], ...nos] = storage;

console.log(nos);
console.log(cos);
console.log(b1);
