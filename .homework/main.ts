// в коде присутствует Promise.all, что означает код будет выполняется, пока все успешном не начнут чтение
// после того как прочитается каждый файл, он параллельно закроет чтение и выведет результат чтения для
// каждого файла

const readFile = (filename: string) => {
  const time = Math.round(Math.random() * 1000) + 500;

  return new Promise((resolve, reject) => {
    console.log(`[${filename}]: Начинаю чтение`);

    setTimeout(() => {
      resolve(`Успех. Прочитали ${filename}. Время чтения: ${time}`);

      console.log(`[${filename}]: Закончил чтение`);
    }, time);
  });
};

const main = async () => {
  const start = new Date().getTime(); // Сохранит текущее время

  const [file1, file2, file3] = await Promise.all([
    readFile('file1'),
    readFile('file2'),
    readFile('file3'),
  ]);

  console.log(file1);
  console.log(file2);
  console.log(file3);

  const end = new Date().getTime(); // Сохранит текущее время

  console.log('\nВесь процесс чтения и вывода занял ms:', end - start);
};

main();
