// Используя reduce, напишите функцию, которая превращает массив в объект. Считает количество
// упоминаний первого числа и сумму значений для этого числа.
type Struct = Record<string, { count: number; sum: number }>;
const values = [
  [1, 100],
  [2, 200],
  [3, 300],
  [1, 2],
  [3, 400],
  [4, 500],
  [1, 99],
];

const result = values.reduce((acc, cur) => {
  const [a, b] = cur;
  const key = String(a);
  if (!acc[key]) {
    acc[key] = { count: 0, sum: 0 };
  }
  acc[key].count += 1;
  acc[key].sum += b;

  return acc;
}, {} as Struct);

console.log(result);
