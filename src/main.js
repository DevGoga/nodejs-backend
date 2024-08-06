// Дан объект, выведите все его ключи, одной строкой, через запятую
const person = { age: 10, name: '', child: 'Max' };
let word = '';
for (const key in person) {
  word += key + ',';
}
console.log(word);
