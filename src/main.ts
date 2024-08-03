// Запишите в две переменные два случайных целых числа от 1 до 6, в цикле while обновляйте
// оба числа, пока не выпадет дубль (два одинаковых числа), посчитайте количество попыток и выведите их
const min = 1;
const max = 6;
let count = 0;
let randomnum1 = Math.floor(Math.random() * (max - min + 1)) + min;
let randomnum2 = Math.floor(Math.random() * (max - min + 1)) + min;
while (randomnum1 !== randomnum2) {
  randomnum1 = Math.floor(Math.random() * (max - min + 1)) + min;
  randomnum2 = Math.floor(Math.random() * (max - min + 1)) + min;
  count++;
}
console.log(`Общее количество попыток: ${count}`);
