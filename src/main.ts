// Напишите программу, которая сравнивает 2 массива и выводит true,
// если в них лежат одинаковые значения (даже если в разном порядке)
const names1 = ['Ivan', 'Kovan', 'NeGogan'];
const names2 = ['Kovan', 'Ivan', 'Gogan'];
let namesCount = 0;
if (names1.length === names2.length) {
  for (const name1 of names1) {
    for (const name2 of names2) {
      if (name1 === name2) {
        namesCount++;
      }
    }
  }
  if (namesCount === names2.length) {
    console.log(true);
  } else {
    console.log(false);
  }
} else {
  console.log(false);
}
