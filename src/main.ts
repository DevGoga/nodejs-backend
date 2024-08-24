// Используя reduce, напишите функцию, которая (каждый пункт отдельная функция):
// - Фильтрует только положительные числа
// - Фильтрует только строки
// - Создаёт массив только с уникальными значениями
// - Создает обратный массив (у которого обратная последовательность элемента)
// - Превращает массив в объект:
const values = [1, 10, 10, 40, 40];
const myObject = values.reduce((acc: number[], cur: number, idx: number) => {
  acc.push(cur);
  acc.sort((a, b) => (a < b ? 1 : -1));
  return acc;
}, []);
console.log(myObject);
