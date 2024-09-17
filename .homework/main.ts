// в коде присутствует Promise.allSettled, он также выполняет пораллельно файлы.ю но в отличие от
// Promise.all он выполняет его вне зависимости от того пришел после статус pending успех или ошибка
// в данном случаем файлы меняют результат, так как поставлено условие, если таймер меньше 750 мс, то
// выводит с ошибкой, иначе успех, поэтому файлы могут менятся в зависимости от условия, в момент консоль лог
// в этих переменных лежит их статус и значение, если это успешный файл , иначе в нем лежит статус и причина
// если этот файл с ошибкой

const readFile = (filename: string) => {
  const time = Math.round(Math.random() * 1000) + 500;

  return new Promise((resolve, reject) => {
    console.log(`[${filename}]: Начинаю чтение`);

    setTimeout(() => {
      if (time < 750) {
        reject(`Ошибка чтения файла ${filename}`);
      }

      resolve(`Успех. Прочитали ${filename}. Время чтения: ${time}`);

      console.log(`[${filename}]: Закончил чтение`);
    }, time);
  });
};

const main = async () => {
  const start = new Date().getTime(); // Сохранит текущее время

  const [file1, file2, file3] = await Promise.allSettled([
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
