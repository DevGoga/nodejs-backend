// Дан объект. Необходимо сформировать два массива - в один записать все ключи объекта,
// в другой все его значения. Запрещено использовать конструкции Object.keys() и Object.values()
const person = { age: 10, name: '', child: 'Max' };
const arrayKeys = [];
const arrayValues = [];
for (const key in person) {
  arrayKeys.push(key);
  arrayValues.push(person[key]);
}
console.log(arrayKeys);
console.log(arrayValues);
