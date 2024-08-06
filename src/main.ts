// Создайте объект с несколькими полями. Выведите все ключи этого объекта,
// длина названия которых является четной. Используйте цикл for in
const user = { name: 'John', email: 'john@example.com', password: '123456' };
for (const key in user) {
  if (!(key.length % 2)) {
    console.log(key);
  }
}
