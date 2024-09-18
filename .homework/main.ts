const sleep = (file: string, time: number) => {
  return new Promise((resolve, reject) =>
  {
    if (Math.random() > 0.5) {
      reject('Непредвиденная ошибка!');
    }
    setTimeout(() => {
    resolve(`${file} Я успешно поспал!`);
    }, time);
  });
}
const main = async() => {
  const promises = await Promise.allSettled([sleep('file1', 3000), sleep('file2', 5000)]);
  for (const pr of promises) {
    console.log(pr);
  }
}

main()