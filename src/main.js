// Дан объект, необходимо вывести все его ключи и значения по этим ключам
const person = { age: 10, name: '', child: 'Max' };
for (const key in person) {
  console.log(key, person[key]);
}
