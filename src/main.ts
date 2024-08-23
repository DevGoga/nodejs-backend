// Создай любой массив и с помощью filter возьмите из него случайные элементы (используйте Math.random())
const array = [1, 2, 3, 4, 5];
const convert = array.filter((num) => Math.ceil(Math.random() * 5) >= num);
console.log(convert);
