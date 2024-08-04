// Дан массив чисел. Необходимо посчитать количество положительных и отрицательных чисел, не учитывая последний
const arrayNumber = [12, -123, 125, -99, 50];
let positivNumber = 0;
let negativNumber = 0;
for (let i = 0; i < arrayNumber.length - 1; i++) {
  if (arrayNumber[i] > 0) {
    positivNumber++;
  } else if (arrayNumber[i] < 0) {
    negativNumber++;
  }
}
console.log(positivNumber);
console.log(negativNumber);
