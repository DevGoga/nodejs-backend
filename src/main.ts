// Дан массив строк. Вывести только первую половину массива (если длина не делится нацело на 2,
// значит округляем количество итераций вниз, для массива из 5 элементов первой половиной будут первый и второй элементы).
const arrayString = ['goga', 'rusla', 'slava', 'miha'];
const middleString = Math.floor(arrayString.length / 2) - 1;
for (let i = 0; i <= middleString; i++) {
  console.log(arrayString[i]);
}
