// Напишите деструктуризацию, которая достаёт значения и записывает их в переменные,
// чтобы реальный вывод программы совпадал с ожидаемым. Используйте только одну деструктуризацию
const megaobject = {
  child: null,
  child1: {
    nick: 'name',
    nicknames: ['n1', 'n2', { n: 'n', b: 'b' }],
    james: {
      kates: {
        nicks: {
          nicknames: ['nn', 'vv', 'gg'],
          child: {
            nick: 'childName',
            child: undefined,
          },
        },
      },
    },
  },
  child2: {},
  child3: 'child3',
} as const;

const {
  child,
  child1: {
    nick,
    nicknames,
    james: {
      kates: {
        nicks: {
          nicknames: [nicknames1, ...otherNicks],
          child: { nick: nick1, child: child1 },
        },
      },
    },
  },
  ...otherChilds
} = megaobject;

console.log(child); // null
console.log(otherChilds); // { child2: {}, child3: 'child3' }
console.log(nick); // name
console.log(nicknames); // [ 'n1', 'n2', { n: 'n', b: 'b' } ]
console.log(nicknames1); // nn
console.log(otherNicks); // [ 'vv', 'gg' ]
console.log(nick1); // childName
console.log(child1); // undeined
