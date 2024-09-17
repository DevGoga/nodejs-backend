// в коде присутствует Promise.race , то есть он обходит все файлы и если видит файл время чтение которого быстрее
// то он начинает логировать и резолвить только его, а другие файлы только логируются

const readFile = (filename: string) => {
  const time = Math.round(Math.random() * 1000) + 500;

  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log(`[${filename}]: Начинаю чтение, примерное время чтение будет: ${time}`);

      resolve(`Успех. Прочитали ${filename}. Время чтения: ${time}`);

      console.log(`[${filename}]: Закончил чтение`);
    }, time);
  });
};

const main = async () => {
  const start = new Date().getTime(); // Сохранит текущее время

  const file = await Promise.race([readFile('file1'), readFile('file2'), readFile('file3')]);

  console.log(file);

  const end = new Date().getTime(); // Сохранит текущее время

  console.log('\nВесь процесс чтения и вывода занял ms:', end - start);
};

main();
