const muliply = (a: number, b: number) => a * b;
const sum = (a: number, b: number) => a + b;
const substr = (a: number, b: number) => a - b;

const array = [
  [1, 9, 9, muliply],
  [2, 3, 6, sum],
  [5, 5, 25, substr],
];

for (const args of array) {
  const [a, b, result, operation] = args;
  const not = operation(a, b) === result ? '' : 'не';
  console.log(`${not} верно`);
}
