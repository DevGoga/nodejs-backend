type Program = {
  name: string;
};

type Person = {
  age?: number;
  name?: string;
  nicknames: string[];
  programs: Program[];
};

const logProgramName = (object: Program): string => {
  // Не сам: тут код подсветил стринг, хотя
  // я думал, что у нас объект name типа стринг как раз и не должно быть проблем
  console.log(object.name); //Сам: зачем нам логировать функцию, если ее и так выводит потом?
};

const logPersonName = (object: Person): string => {
  return object.name; // Сам: вроде не сможет вернуть тип стринг, так как он необязательный и может вернуть undefind
};

const p1: Program = { name: 'programmator' };
const p2: Person = {
  nicknames: [], //Сам: он должен вроде ожидать массив типов стринг, а мы даем просто пустой массив
  programs: [p1],
};

console.log(logProgramName(p1));
console.log(logPersonName(p2));

console.log(logProgramName(p1));
console.log(logPersonName(p2)); //Сам: зачем два раза логировать одно и то же?
