const sleep = (file: string, time: number) => {
  return new Promise((resolve, reject) =>
  {
    setTimeout(() => {
    resolve(`${file} Я поспал и прошло ${time}ms`);
    }, time);
  });
}
const main = async() => {
  const promises = await Promise.all([sleep('file1', 3000), sleep('file2', 5000)]);
  for (const pr of promises) {
    console.log(pr);
  }
}

main()