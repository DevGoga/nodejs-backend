//Дан массив чисел, необходимо каждое значение увеличить на 1, если индекс этого значения не кратен 10.
// То есть для [0, 1, 2, 10, 20] должно стать [0, 2, 3, 11, 21]
const arrayNumber = [0, 1, 10, 15, 23, 40];
for (let i = 0; i <= arrayNumber.length - 1; i++) {
  if (arrayNumber[i] % 10) {
    arrayNumber[i] += 1;
  }
}
console.log(arrayNumber);
