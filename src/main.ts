// Напишите любую осмысленную функцию, которая на вход принимает два любых осмысленных колбэка.
// Внутри с помощью Math.random рандомит результат “успех/неуспех”,
// и в зависимости от этого вызывает один или другой колбэк.
const callback = () => {
  const result = Math.random();
  if (result < 0.5) {
    return showAccess();
  } else return hideAccess();
};
const showAccess = () => {
  console.log('Showing access...');
};
const hideAccess = () => {
  console.log('Hide access...');
};
console.log(callback());
