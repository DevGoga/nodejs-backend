//Напишите программу, которая для заранее известного числа выводит положительное оно или нет.
// Если число равно нулю, то вывести что оно ни положительное, ни отрицательное.
let number = 10;
if (number > 0)
{
    console.log('Положительное');
} else if (number < 0)
{
    console.log('Отрицальное');
} else
{
    console.log('Ни положительное, ни отрицательное');
}
// Дано число. Выведите:
//
// - Сумму первой и последней цифры
// - Является ли само число:
//     - Целым
//     - Четным

number = 10;
let number_first = number.toString();
number_first = Number(number_first[0])
let number_last = number % 10;
let Summ = number_first + number_last;
console.log(Summ)

if (number % 2 == 0)
{
    console.log('Четным');
} else
{
    console.log('Нечетным');
}
if (Math.floor(number) == number)
{
    console.log('Целое');
} else
{
    console.log('Дробное');
}