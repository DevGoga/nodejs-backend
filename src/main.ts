export const generateRandomValue = (min: number, max: number) => {
  return Math.floor(Math.random() * (max - min) + min);
};

export const getManyRandomItems = <T>(items: T[], count: number): T[] => {
  const arr: T[] = [];
  for (let i = 0; i < count; i++) {
    arr.push(getOneRandomItem(items));
  }
  return arr;
};

export const getOneRandomItem = <T>(items: T[]): T => {
  return items[generateRandomValue(0, items.length)];
};

const words = ['alpha', 'bravo', 'charlie', 'delta', 'echo', 'foxtrot'];
const [first, second] = getManyRandomItems(words, 2);
console.log(first.toUpperCase()); // first должен подсвечиваться типом string
console.log(second.toUpperCase()); // second должен подсвечиваться типом string

const numbers = [1, 2, 3, 4, 5, 6];
const [digit] = getManyRandomItems(numbers, 1);
console.log(digit * 100); // digit должен подсвечиваться типом number
