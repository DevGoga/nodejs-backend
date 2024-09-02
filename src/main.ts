const balance = (value: number): any => {
  if (value <= 0) {
    throw Error('Balance must be greater than 0');
  }
  if (value > 1000) {
    throw Error('Balance must be greater than 1000');
  }
  return card;
};

const card = 10000; // типа твой счёт на карте

try {
  balance(card);
  console.log(`ваш счет на карте: ${balance(card)}`);
} catch (e: any) {
  if (card > 1000) {
    console.log('Критическая ошибка!');
    throw e;
  }
  console.log(`Not critical error: ${e.message}`);
}
