const timer = 3000;

const sleep = async (time: number) => {
  const promise = await new Promise((resolve, reject) => {
    setTimeout(() => {
    resolve(`я запустился спустя ${time}ms`);
    }, time);
  });
  console.log(promise);
}

sleep(timer);