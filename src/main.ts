// Напишите любую осмысленную функцию, которая на вход принимает два любых осмысленных колбэка.
// Внутри с помощью Math.random рандомит результат “успех/неуспех”,
// и в зависимости от этого вызывает один или другой колбэк.
const calltaxi = (open: any, close: any) => {
  const result = Math.random();
  if (result < 0.5) {
    return open();
  } else return close();
};
const showAccess = () => {
  console.log('Showing access...');
};
const hideAccess = () => {
  console.log('Hide access...');
};
console.log(calltaxi(showAccess, hideAccess));
