// Напишите функцию mergeToNewObject, которая будет производить слияние двух объектов и возвращать
// новый объект. Используйте оператор ...
type Obj = Record<string, number>;
const mergeToNewObject = (a: Obj, b: Obj) => {
  return { ...a, ...b };
};

const obj1 = { a: 10, b: 100, c: 1 };
const obj2 = { a: 20, b: 200, e: 2 };
const obj3 = mergeToNewObject(obj1, obj2);

console.log(obj1); // { a: 10, b: 100, c: 1 }
console.log(obj2); // { a: 20, b: 200, e: 2 }
console.log(obj3); // { a: 20, b: 200, c: 1, e: 2 }
