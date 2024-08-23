// Доработайте функцию умного поиска, чтобы она работала как ожидается. Типы any пока оставьте.

const storage = [
  { age: 10, name: 'first' },
  { age: 20, name: 'second' },
  { age: 30, name: 'third' },
  { age: 40, name: 'fourth' },
];

const smartSearch = (arr: any[], property: any, value: any) => {
  return arr.find((person) => person.name === value || person.age === value);
};

const person1 = smartSearch(storage, 'age', 30);
// { age: 30, name: 'third' }

const person2 = smartSearch(storage, 'age', 10);
// { age: 10, name: 'first' }

const person3 = smartSearch(storage, 'name', 'second');
// { age: 20, name: 'second' }
console.log(person1, person2, person3);
