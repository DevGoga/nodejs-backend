// Напишите любую осмысленную функцию, которая на вход принимает два любых осмысленных колбэка.
// Внутри с помощью Math.random рандомит результат “успех/неуспех”,
// и в зависимости от этого вызывает один или другой колбэк.
const callback = (a: number, b: number) => {
  const result = Math.random();
  if (result < 0.5) {
    return a;
  } else return b;
};
console.log(callback(10, 5));
