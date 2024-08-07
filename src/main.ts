// В тип из предыдущего пункта, добавьте новое поле `createdAt` , у которого тип будет - дата (`Date`).
// Попробуйте разобраться с датами сами. Создайте объект такого типа, в поле `createdAt` запишите текущую дату.
// Далее добавьте новое поле `createdAtISO` типа `string` и
// запишите туда текущую дату в формате ISO8601 - год, месяц, день, час, минута, секунду, миллисекунда.
type Name = 'Rusla' | 'Goga' | 'Slava';
type Age = 21 | 22 | 23;
type User = {
  name: Name;
  age: Age;
  password: string | number;
  email: string;
  createdAt: string;
};

const user: User = {
  name: 'Goga',
  age: 21,
  password: '123456',
  email: 'goga@gmail.com',
  createdAt: new Date().toISOString(),
};
console.log(user);
