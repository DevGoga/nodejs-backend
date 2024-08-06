// Дан объект, необходимо каждое его поле, содержащее число, увеличить на 20%
const person = { age: 10, name: '', child: 'Max' };
for (const key in person) {
  if (typeof person[key] === 'number') {
    person[key] *= 1.2;
  }
}
console.log(person);
