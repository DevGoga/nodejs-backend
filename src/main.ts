// Напишите функцию, возвращающую другую функцию, чтобы этот код заработал
const person = (word: string) => {
  return (send: string) => {
    const random = Math.random();
    if (random > 0.5) {
      return `${send}: ${word} разраб `;
    }
    return `${send}: ${word} не разраб`;
  };
};

console.log(person('Ruslan')('goga'));
