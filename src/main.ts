// Напишите функцию, которая на вход принимает массив чисел, и выводит в консоль наибольший делитель для каждого числа.
const funcArray = (numberArray: number[]) => {
  const result = [];
  for (let i = 0; i < numberArray.length; i++) {
    if (!(numberArray[i] % 2)) {
      result.push(numberArray[i] / 2);
    } else {
      result.push(numberArray[i] / 3);
    }
  }
  return result;
};
console.log(funcArray([10, 12, 21]));
