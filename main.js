// Даны два числа. Выведите:
// - Равны ли они
// - Одинаковое ли в них количество цифр
// - Большее из чисел
// - Меньшее из чисел
// - Делится ли одно на другое без остатка
let first_number = 10;
let second_number = 15;

if (first_number == second_number) {
    console.log(`${first_number} равке ${second_number}`);
} else{
    console.log(`${first_number} не равен ${second_number}`);
}

if (first_number.toString().length == second_number.toString().length) {
    console.log("Содержится одинаковое количество цифр");
} else{
    console.log("Количество цифр не одинаково");
}

if (first_number > second_number) {
    console.log(`Большее из чисел:${first_number}`);
} else if (first_number < second_number)
{
    console.log(`Большее из чисел:${second_number}`);
}

if (first_number > second_number) {
    console.log(`Меньшее из чисел:${second_number}`);
} else if (first_number < second_number)
{
    console.log(`Меньшее из чисел:${first_number}`);
}

if (first_number % second_number == 0) {
    console.log("Числа делятся без остатка");
} else {
    console.log("Делятся с остатком");
}
