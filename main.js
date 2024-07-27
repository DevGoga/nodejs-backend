`### Вложенные условия

Напишите программу, которая для заранее известного числа выводит символ (строку) согласно критериям. 
Для одного числа может вывестить только один символ.

- Если число 0 - вывести \`A\`
- Если число больше 1:
    - Если число четное - вывести \`B\`
    - Если число нечетное - вывести \`C\`
- Если число меньше -1:
    - Если число четное - вывести \`D\`
    - Если число нечетное - вывести \`E\`
- Иначе:
    - Если число заканчивается на 5 - вывести \`F\`
    - Если число заканчивается на четную цифру - вывести \`G\`
    - Иначе - вывести \`H\`
`
const number = -0.1;
if (number == 0) {
    console.log("A");
} else if (number > 1) {
    if (number % 2 == 0) {
        console.log("B");
    } else if (number % 2 == 1) {
        console.log("C");
    }
} else if (number < -1) {
    if (number % 2 == 0) {
        console.log("D");
    } else if (number % 2 == -1) {
        console.log("E");
    }
} else if (number.toString().slice(-1) == 5) {
        console.log("F");
    } else if (Number(number.toString().slice(-1)) % 2 == 0) {
        console.log("G");
    } else {
        console.log("H");
    }
