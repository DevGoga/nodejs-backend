// Используя reduce, напишите функцию, которая превращает массив в объект. Считает количество
// упоминаний первого числа и сумму значений для этого числа.
const values = [
  [1, 100],
  [2, 200],
  [3, 300],
  [1, 2],
  [3, 400],
  [4, 500],
  [1, 99],
];

let count1 = 0;
let count2 = 0;
let count3 = 0;
let count4 = 0;

let sum1 = 0;
let sum2 = 0;
let sum3 = 0;
let sum4 = 0;

const result = values.reduce((acc, cur) => {
  const key = `${cur[0]}`;
  if (cur[0] === 1) {
    count1++;
    sum1 += cur[1];
    acc[key] = { count: count1, sum: sum1 };
  }
  if (cur[0] === 2) {
    count2++;
    sum2 += cur[1];
    acc[key] = { count: count2, sum: sum2 };
  }
  if (cur[0] === 3) {
    count3++;
    sum3 += cur[1];
    acc[key] = { count: count3, sum: sum3 };
  }
  if (cur[0] === 4) {
    count4++;
    sum4 += cur[1];
    acc[key] = { count: count4, sum: sum4 };
  }

  return acc;
}, {} as any);

console.log(result);
