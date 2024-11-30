type GroupSettings = {
  startFrom: number;
  maxElements: number;
};

const defaultSettings: GroupSettings = { startFrom: 0, maxElements: 3 };

const words1: string[] = [
  'banana',
  'cat',
  'elephant',
  'apple',
  'dog',
  'carrot',
  'house',
  'sun',
  'moon',
  'star',
  'tree',
  'book',
  'flower',
  'coffee',
  'ocean',
];

const words2: string[] = ['java', 'code', 'book', 'boss', 'moon', 'face', 'tree', 'bird', 'fire', 'read'];

const group = (items: string[], customSettings?: GroupSettings) => {
  const settings = customSettings ?? defaultSettings;
  const linesCount = Math.ceil(items.length / settings.maxElements);

  console.log(`Будет выведено ${linesCount} строки`);

  for (let i = settings.startFrom; i < linesCount; i++) {
    const start = i * settings.maxElements;
    const end = start + settings.maxElements;

    const elements = items.slice(start, end);
    console.log(`Строка ${i + 1}:`, elements);
  }
};

group(words1);

console.log();

group(words2);
