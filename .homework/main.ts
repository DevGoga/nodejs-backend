// так как программа в момент async/await прекращает работу только синхонного кода, то есть
// когда у нас работают 2 ассинхроных кода , то в момент выполнения первого такого кода между ним может встать
// второй ассинхроный код, так как. То есть после перевода из пендинг, мы ждем некоторое время когда начнется
// резолв, а в это "окно" у нас занимает second который выводит каждую секунду в текущей минуте. После этого
// начинается резолв файлов и после него начинается опять ассинхронный бесконечный таймер

setInterval(() => {
  const second = new Date().getSeconds(); // Сюда точку остановки!
  console.log('Текущая секунда в этой минуте:', second);
}, 1000);

const readFile = (filename: string) => {
  const time = Math.round(Math.random() * 7000);

  return new Promise((resolve, reject) => {
    console.log(`[${filename}]: Начинаю чтение. Ориентировочное время чтения: ${time}`); // Сюда точку остановки!

    setTimeout(() => {
      resolve(`Успех. Прочитали ${filename}. Время чтения: ${time}`); // Сюда точку остановки!

      console.log(`[${filename}]: Закончил чтение`);
    }, time);
  });
};

const main = async () => {
  const start = new Date().getTime(); // Сюда точку остановки!

  const [file1, file2, file3] = await Promise.all([
    readFile('file1'),
    readFile('file2'),
    readFile('file3'),
  ]);

  console.log(file1);
  console.log(file2);
  console.log(file3);

  const end = new Date().getTime();

  console.log('\nВесь процесс чтения и вывода занял ms:', end - start);
};

main();
