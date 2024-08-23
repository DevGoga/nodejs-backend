// ### Поиск в массиве
// Дан массив объектов, используя find, найдите объект, у которого в поле `age` лежит значение более 10

const arrayObj = [
  { name: 'goga', age: 20 },
  { name: 'rusla', age: 30 },
  { name: 'slava', age: 20 },
];

const value = arrayObj.find((person) => person.age > 10);
console.log(value);
