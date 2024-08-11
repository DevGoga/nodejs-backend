// Напишите функцию, которая на вход принимает массив чисел, и выводит в консоль наибольший делитель для каждого числа.
const funcArray = (numberArray: number[]) => {
  const splitterArray = [];
  for (let i = 0; i < numberArray.length; i++) {
    splitterArray.push(numberArray[i] / 2);
  }
  return splitterArray;
};
console.log(funcArray([10, 12, 20]));
