const main = () => {
  const result = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('Привет!');
    }, 1000);
  });

  console.log(result);
};

main(); // тут он выведет, что result Будет вечно пендинг, как так мы задаем "логирование result" - он синхронный
// а сам result является ассинхроным, но мы не задаем async await, поэтому он и будет в всегда "pending"

const main = async () => {
  const result = await new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('Привет!');
    }, 1000);
  });

  console.log(result);
};

main(); // тут у нас уже есть async/await , а это значит что результат будет логироваться только тогда,
// когда выполнится ассинхроный результат кода

