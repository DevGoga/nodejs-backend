` Простые условия. Одна строка.

    Дана строка. Выведите:

- Первый символ, если длина строки четная
- Последний символ, если длина строки нечетная
- Предпоследний символ, если длина строки нечетная и строка оканчивается на букву “a”
`
const name = 'Ruslan';
if (name.length % 2 == 0) {
    console.log(name.charAt(0));
} else if (name.length % 2 == 1)
{
    console.log(name.slice(-1));
} else if (name.length % 2 == 1 && name.slice(-1) == 'a')
{
    console.log(name.slice(-2, -1));
}
