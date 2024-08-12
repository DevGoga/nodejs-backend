// Напишите функцию, которая на вход получает объект и выдает сумму значений его полей.
// Гарантируется, что в объекте будут содержаться только числа.
type ObjNum = {
  num1: any;
  num2: any;
  num3: any;
};
const numbers = {
  num1: 123,
  num2: undefined,
  num3: 3,
};
let sum = 0;
const funcSum = (obj: ObjNum) => {
  for (const value of Object.values(obj)) {
    if (typeof value === 'number') {
      sum += value;
    }
  }
  return sum;
};

console.log(funcSum(numbers));
