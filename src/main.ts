// Дан массив из чисел.
// Необходимо найти среди этих чисел:
// - Минимальное
// - Максимальное
// - Среднее
const arrayNumbers = [1, 2, 100];
let minNumber;
let maxNumber;
let midNumber = 0;
for (const number of arrayNumbers) {
  minNumber = Math.min.apply(null, arrayNumbers);
  maxNumber = Math.max.apply(null, arrayNumbers);
  midNumber += number / arrayNumbers.length;
}
console.log(minNumber);
console.log(maxNumber);
console.log(midNumber);
