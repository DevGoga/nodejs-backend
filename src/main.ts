// Доработайте код, используя метод map , чтобы он работал как ожидается:
const storage = [
  { age: 10, name: 'first' },
  { age: 20, name: 'second' },
  { age: 30, name: 'third' },
  { age: 40, name: 'fourth' },
];

const storage2 = storage.map((value) => {
  return { age: value.age, name: value.name, reversed: true };
});

console.log(storage2);
