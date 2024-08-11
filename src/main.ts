// Напишите функцию, которая на вход принимает два параметра - массив строк и число.
// И в ответ выдает отфильтрованный массив, в котором только те строки из первоначального массива,
// у которых длина короче, чем переданное число
const funcArray = (wordArray: string[], number: number) => {
  const sortArray = [];
  for (let i = 0; i < wordArray.length; i++) {
    if (wordArray[i].length < number) {
      sortArray.push(wordArray[i]);
    }
  }
  return sortArray;
};
console.log(funcArray(['goga', 'rusla', 'slavemba', 'elpaevich'], 5));
