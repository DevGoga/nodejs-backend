// Напишите функцию, возвращающую другую функцию, чтобы этот код заработал
const person = (word: string) => {
  const random = Math.random();
  if (random > 0.5) {
    return `${word} разраб `;
  } else return `${word} не разраб`;
};
const massage = (send: string) => {
  return `${send}: ${person('Goga')}`;
};

console.log(massage('Ruslan'));
