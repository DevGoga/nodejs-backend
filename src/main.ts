// Дан массив из чисел.
// Необходимо найти среди этих чисел:
// - Минимальное
// - Максимальное
// - Среднее
const arrayNumbers = [0, 1, 2, 10, 4, 5, 6];
let minNumber = 0;
let maxNumber = 0;
let midNumber = 0;
for (const number of arrayNumbers) {
  if (minNumber > number) {
    minNumber = number;
  }
  if (maxNumber < number) {
    maxNumber = number;
  }
  midNumber += number / arrayNumbers.length;
}
console.log(minNumber);
console.log(maxNumber);
console.log(midNumber);
