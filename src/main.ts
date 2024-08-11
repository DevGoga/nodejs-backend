// Напишите функцию, которая принимает на вход слово, а в ответ выдает два массива - массив букв, и массив цифр,
// которые встречаются в этом слове
const funcArray = (words: string) => {
  const numberArray = [];
  const stringArray = [];
  for (const word of words) {
    if (isNaN(Number(word))) {
      stringArray.push(word);
    } else numberArray.push(word);
  }
  return `Массив букв: ${stringArray}
Массив чисел: ${numberArray}`;
};
console.log(funcArray('goga123'));
