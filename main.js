` Простые условия. Одна строка.

    Дана строка. Выведите:

- Первый символ, если длина строки четная
- Последний символ, если длина строки нечетная
- Предпоследний символ, если длина строки нечетная и строка оканчивается на букву “a”
`
const name = 'Rusla';
if (!(name.length % 2)) {
    console.log(name.charAt(0));
} else if (name.length % 2 === 1  && name.charAt(-1).toLowerCase() === 'a')
{
    console.log(name.charAt(-1));
} else if (name.length % 2 === 1)
{
    console.log(name.charAt(-2));
}
