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

const encode = <T>(decoded: T) => {
  const object = JSON.stringify(decoded);
  let count = 0;
  let result = '';
  for (let i = 0; i < object.length; i++) {
    if (object[i] === object[i + 1]) {
      count++;
      continue;
    }
    result += object[i];
    if (count > 1) {
      result += count;
    }
    count = 1;
  }
  return result;
};

const encoded: string = encode(user);

console.log(encoded);
// Строка вида "{"name": "a3bcde4f", "surname": "h2fo3dge4rg", "fa3ng": "f2a2n2g2", "x": "x20"}"
const decode = <T>(encoded: string): T => {
  let word = '';
  let count = '';

  for (const char of encoded) {
    if (!isNaN(Number(char))) {
      count += char;
      continue;
    }
    if (count) {
      word += word[word.length - 1].repeat(Number(count));
      count = '';
    }
    word += char;
  }

  return JSON.parse(word);
};
const decoded: User = decode<User>(encoded);

console.log(decoded.name, decoded.surname, decoded.faaang, decoded.x);
