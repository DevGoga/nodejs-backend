const main = async () => {
  const promise = await new Promise((resolve, reject) => {
    const time = 3000;
    setTimeout(() => {
    resolve(`я запустился спустя ${time}ms`);
    }, 3000);
  });
  console.log(promise);
}

main();