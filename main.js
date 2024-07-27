`Напишите программу, которая для заранее известного числа выводит:

- \`Fizz\`, если число делится нацело на 3
- \`Buzz\`, если число делится нацело на 5
- \`FizzBuzz\` если число делится и на 3 и на 5`

const number = 45;
if (number % 3 == 0) {
    console.log('Fizz');
}
if (number % 5 == 0) {
    console.log('Buzz');
}
if (number % 5 == 0 && number % 3 == 0) {
    console.log('FizzBuzz');
}