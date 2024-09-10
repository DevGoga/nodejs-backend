const popularity =<T> (arr: T[]): T[] => {
  const mapper = new Map<T, number>();
  for (const item of arr) {
    mapper.set(item, (mapper.get(item) || 0) + 1);
  }
  return (Array.from(mapper.entries()).sort((a, b) => b[1] - a[1]).map(([value]) => value));


}

const arr = [8, 9, 8, 4, 9, 9];
const arr1 = popularity(arr);

console.log(arr1);
// [9, 8, 4]
// Чаще всего была цифра 9 (3 раза), чуть реже цифра 8 (2 раза) и т.д.