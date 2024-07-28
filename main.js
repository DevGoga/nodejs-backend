`Напишите программу, которая для заранее известного числа выводит:

- \`Fizz\`, если число делится нацело на 3
- \`Buzz\`, если число делится нацело на 5
- \`FizzBuzz\` если число делится и на 3 и на 5`
const number = 15;
if (!(number % 5) && !(number % 3)) {
    console.log('FizzBuzz');
} else if (!(number % 5)) {
    console.log('Buzz');
} else if (!(number % 3)) {
    console.log('Fizz');
}