// До запуска кода мой ответ: startup, tick,immediate, inner immediate, timeout, inner timeout
// но как я и думал это не правильно, на что я опирался ? startup/tick - это синхронный код, далее начинается очередь
// из макрозадач timeout , после этого внутри setimmediate immediate, inner immediate - синхронный код,
// после этого ставпится в очередь макрозадача  в виде inner timeout и того у нас в стеке задач =>
// timeout и только потом inner timeout
// После запуска кода: я ошибся в порядке с timeout, видимо он третим, так как он не расположен
// внутри setImmediate, видимо выполнение функции setImmediate откладывается на потом, а сначала создается очередь
// вне функций

process.nextTick(() => {
  console.log('tick');
});

setImmediate(() => {
  console.log('immediate');

  setTimeout(() => {
    console.log('inner timeout');
  }, 0);

  setImmediate(() => {
    console.log('inner immediate');
  });
});

setTimeout(() => {
  console.log('timeout');
}, 0);

const startup = 'startup';

console.log(startup);