// Напишите функцию merge, которая будет производить слияние двух объектов с выбранной очередностью
// с помощью оператора .... Доработайте код ниже, чтобы реальный вывод совпадал с ожидаемым.
// Порядком полей в выводе можно принебречь (то есть {a:10, b:100} все равно что {b:100, a:10}).
const merge = (a: any, b: any, order?: 1 | 2) => {
  return order === 2 ? { ...a, ...b, merged: 'YES' } : { ...a, ...b };
};

const obj1 = { a: 10, b: 'b', c: 100, child: { name: 'ch', surname: 'hc' } };
const obj2 = { a: 20, b: ['b'], d: 200, child: { aa: 'aa', bb: 'bb' }, merged: 'NO!' };

console.log(merge(obj1, obj2));
/* Вывод:
{
  a: 20,
  b: [ 'b' ],
  c: 100,
  child: { aa: 'aa', bb: 'bb' },
  d: 200,
  merged: 'NO!'
}
*/

console.log(merge(obj1, obj2, 1));
/* Вывод:
{
  a: 20,
  b: [ 'b' ],
  c: 100,
  child: { aa: 'aa', bb: 'bb' },
  d: 200,
  merged: 'NO!'
}
*/

console.log(merge(obj2, obj1, 2));
/* Вывод:
{
  a: 10,
  b: 'b',
  c: 100,
  child: { name: 'ch', surname: 'hc' },
  d: 200,
  merged: 'YES!'
}
*/
