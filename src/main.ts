// Дан массив строк. Вывести только вторую половину массива (если длина не делится нацело на 2, округляем вниз,
// для массива из 5 элементов второй половиной будет третий, четверый и пятый элементы).
const arrayString = ['goga', 'rusla', 'slava', 'miha', 'dana'];
const arrayLength = arrayString.length - 1;
const middleString = Math.ceil(arrayLength / 2);
for (let i = middleString; i < arrayString.length; i++) {
  console.log(arrayString[i]);
}
