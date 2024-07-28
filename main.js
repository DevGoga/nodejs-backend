`Часто при интеграции вашего API с каким-либо сторонним API, необходимо писать так называемые “мапперы” 
(”сопоставители”, от слова map - “сопоставить”), когда значения из внешних систем мы приводим 
к значениям нашей системы и наоборот.

Используя switch, напишите программу, которая мапит статусы внешнего API на наши статусы согласно этой табличке. 
Предусмотрите значение по умолчанию \`pending\`, на случай, если во внешнем API появится новый статус`

let external_status = "notaccepted";
let main_status;
switch (external_status) {
    case "approved":
        main_status = "approved";
        break;
    case "pending":
        main_status = "pending";
        break;
    case "declined":
        main_status = "declined";
        break;
    default:
        main_status = "pending";
        break;
}

console.log(main_status);