// Оставьте в массиве только совершеннолетних пользователей (используйте filter)
type User = {
  name: string;
  age: number;
};

const users: User[] = [
  { name: 'Пользователь-1', age: 1 },
  { name: 'Пользователь-21', age: 21 },
  { name: 'Пользователь-30', age: 30 },
  { name: 'Пользователь-14', age: 14 },
  { name: 'Пользователь-18', age: 18 },
  { name: 'Пользователь--1', age: -1 },
  { name: 'Пользователь-1', age: 1 },
];
const convert = users.filter((user: User) => user.age >= 18);
console.log(convert);
