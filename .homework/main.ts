const timer = 3000;
const file = 'Rusla';


const sleep = async (file: string, time: number) => {
  const promise = await new Promise((resolve, reject) => {
    setTimeout(() => {
    resolve(`${file} Я поспал и прошло ${time}ms`);
    }, time);
  });
  console.log(promise);
}

sleep(file, timer);