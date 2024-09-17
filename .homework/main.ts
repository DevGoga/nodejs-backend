// вижу, что мы выполняем ассинхроную функцию main в котором записываем сначала текущий таймер
// после чего по очереди выполняем чтением файлов, но перед этим читается текущий файл
// после его прочтения мы увидим сколько читался текущий файл и та происхоит для каждого файла
// после чего сохраняется новое время и мы выводит общее время чтения файлов

const readFile = (filename: string) => {
  const time = Math.round(Math.random() * 1000) + 500;

  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log(`[${filename}]: Начинаю чтение`);

      resolve(`Успех. Прочитали ${filename}. Время чтения: ${time}`);

      console.log(`[${filename}]: Закончил чтение`);
    }, time);
  });
};

const main = async () => {
  const start = new Date().getTime(); // Сохранит текущее время

  const file1 = await readFile('file1');
  const file2 = await readFile('file2');
  const file3 = await readFile('file3');

  console.log(file1);
  console.log(file2);
  console.log(file3);

  const end = new Date().getTime(); // Сохранит текущее время

  console.log('\nВесь процесс чтения и вывода занял ms:', end - start);
};

main();
