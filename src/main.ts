const uniq = <T>(arr: T[]) => {
  return Array.from(new Set(arr));
};
const arr = [1, 1, 2, 3, 3, 4, 6];
const uniques = uniq(arr);

console.log(uniques);
// [1, 2, 3, 4, 6]
