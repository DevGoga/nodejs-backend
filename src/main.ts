// Напишите функцию, которая на вход принимает массив чисел, и выводит в консоль наибольший делитель для каждого числа.
const funcArray = (numberArray: number[]) => {
  const result = [];
  let count = 0;
  for (const number of numberArray) {
    for (let i = 1; i < number; i++) {
      if (number % i === 0) {
        count = i;
      }
    }
    result.push(count);
  }
  return result;
};
console.log(funcArray([10, 12, 21]));
