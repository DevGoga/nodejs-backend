// Код выводит 10 раз "10" за 1 секунду. Потому что он записывает последнее число, в нашем случае "10"
// и после чего выводит его 10 раз за 1 секунду

var i = 0;
const main = async() => {
  for (i = 0; i < 10; i++) {
    await new Promise((resolve) => {
      setTimeout(function() {
        console.log(i);
        resolve(true);
      }, 1000);
    });
  }
}

main()