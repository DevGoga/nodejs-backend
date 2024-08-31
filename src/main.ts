type User = {
  name: string;
  surname: string;
  faaang: string;
  x: string;
};

const user: User = {
  name: 'aaabcdeeeef',
  surname: 'hhfooodgeeeerg',
  faaang: 'ffaanngg',
  x: 'xxxxxxxxxxxxxxxxxxxx',
};
const count = 0;
const encode = (value: User) => {
  const object = JSON.stringify(value);
  for (const key of object) {
    console.log(key ? object[count] : 0);
  }
  return object;
};

const encoded: string = encode(user);

console.log(encoded);
// Строка вида "{"name": "a3bcde4f", "surname": "h2fo3dge4rg", "fa3ng": "f2a2n2g2", "x": "x20"}"
