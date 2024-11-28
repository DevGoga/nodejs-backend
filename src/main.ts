const defineCase = (value: string): Case => {
  if (value.includes('-')) {
    return 'kebab-case';
  }

  if (value.includes('_')) {
    return 'snake_case';
  }

  if (value[0] === value[0].toUpperCase()) {
    return 'PascalCase';
  }

  return 'camelCase';
};

function splitWords(value: string, currentCase: Case): string[] {
  if (currentCase === 'kebab-case') {
    return value.split('-');
  }

  if (currentCase === 'snake_case') {
    return value.split('_');
  }

  const words = [];
  let word = '';

  word += value[0];

  for (let i = 1; i < value.length; i++) {
    const letter = value[i];

    if (letter === letter.toUpperCase()) {
      words.push(word);
      word = letter;
      continue;
    }

    word += letter;
  }

  if (word.length > 0) {
    words.push(word);
  }

  return words;
}

const joinWords = (words: string[], usingCase: Case): string => {
  if (usingCase === 'kebab-case') {
    return words.map((word) => word.toLowerCase()).join('-');
  }

  if (usingCase === 'snake_case') {
    return words.map((word) => word.toLowerCase()).join('_');
  }

  let result = '';

  for (let i = 0; i < words.length; i++) {
    const word = words[i].toLowerCase();

    if (i === 0) {
      const firstLetter = usingCase === 'PascalCase' ? word[0].toUpperCase() : word[0];
      const otherLetters = word.slice(1, word.length);

      result += firstLetter + otherLetters;
      continue;
    }

    const firstLetter = word[0];
    const otherLetters = word.slice(1, word.length);

    result += firstLetter.toUpperCase() + otherLetters;
  }

  return result;
};

function changeCase(input: string, targetCase: Case): string {
  const originalCase = defineCase(input);

  if (originalCase === targetCase) {
    return input;
  }

  const words = splitWords(input, originalCase);

  const result = joinWords(words, targetCase);

  return result;
}

type Case = 'PascalCase' | 'camelCase' | 'snake_case' | 'kebab-case';
type Input = string;
type ExpectedResult = string;

const input = 'example';
const camelInput = 'twoWords';
const pascalInput = 'PascalInputExample';
const kebabInput = 'it-is-just-a-kebab-input';

const tests: [Input, Case, ExpectedResult][] = [
  // Проверка работы с одним словом
  [input, 'camelCase', 'example'],
  [input, 'PascalCase', 'Example'],
  [input, 'snake_case', 'example'],
  [input, 'kebab-case', 'example'],

  // Проверка работы с двумя словами в camelCase
  [camelInput, 'camelCase', 'twoWords'],
  [camelInput, 'PascalCase', 'TwoWords'],
  [camelInput, 'snake_case', 'two_words'],
  [camelInput, 'kebab-case', 'two-words'],

  // Проверка работы с тремя словами в PascalCase
  [pascalInput, 'camelCase', 'pascalInputExample'],
  [pascalInput, 'PascalCase', 'PascalInputExample'],
  [pascalInput, 'snake_case', 'pascal_input_example'],
  [pascalInput, 'kebab-case', 'pascal-input-example'],

  // Проверка работы с шестью словами в kebab-case
  [kebabInput, 'camelCase', 'itIsJustAKebabInput'],
  [kebabInput, 'PascalCase', 'ItIsJustAKebabInput'],
  [kebabInput, 'snake_case', 'it_is_just_a_kebab_input'],
  [kebabInput, 'kebab-case', 'it-is-just-a-kebab-input'],
];

for (const test of tests) {
  const [input, toCase, expectedResult] = test;
  const result = changeCase(input, toCase);

  if (result === expectedResult) {
    console.log(`Успех! Слово "${input}" в "${toCase}": ${result}.`);
  } else {
    console.error(`Ошибка! Слово "${input}" в "${toCase}": ${result}. А ожидалось: "${expectedResult}"`);
  }
}
