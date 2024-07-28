`Часто при интеграции вашего API с каким-либо сторонним API, необходимо писать так называемые “мапперы” 
(”сопоставители”, от слова map - “сопоставить”), когда значения из внешних систем мы приводим 
к значениям нашей системы и наоборот.

Используя switch, напишите программу, которая мапит статусы внешнего API на наши статусы согласно этой табличке. 
Предусмотрите значение по умолчанию \`pending\`, на случай, если во внешнем API появится новый статус`

let ExternalStatus = "notaccepted";
let MainStatus;
switch (ExternalStatus) {
    case "approved":
        MainStatus = "approved";
        break;
    case "pending":
    case "moderation":
    case "waiting":
        MainStatus = "pending";
        break;
    case "declined":
    case "rejected":
    case "notaccepted":
        MainStatus = "declined";
        break;
    default:
        MainStatus = "pending";
        break;
}

console.log(MainStatus);