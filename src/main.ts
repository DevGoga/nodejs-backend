// Напишите функцию, которая принимает на вход массив объектов. Ищет объект, у которого значение поля name равно Stas
// и возвращает значение поля age  у этого объекта. Если такого объекта нет, необходимо вернуть “Объект не найден",
// если объект найден, но поле age содержит значения null или undefined, необходимо вернуть “Возраста нет”.

type ArrayObj = [
  person1: { name?: string; age?: number },
  person2: { name?: string; age?: number },
  person3: { name?: string; age?: number },
];
const user: ArrayObj = [{ name: 'Stas' }, { age: 10 }, { name: 'Stas', age: 10 }];
const funcSum = (obj: any) => {
  for (let i = 0, l = obj.length; i < l; i++) {
    if (obj[i].name && obj[i].age) {
      return 'Возраста нет';
    } else if (obj[i].name) {
      return 'Объект не найден';
    } else if (obj[i].name === 'Stas') {
      return obj[i].age;
    }
  }
};
console.log(funcSum(user));
