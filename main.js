//Используя switch, напишите программу, которая по заданной роли пользователя выводит число - уровень его доступа
let role = "admin";
switch(role) {
    case "user":
    case "client":
        console.log("1 уровень доступа");
        break;
    case "admin":
    case "manager":
        console.log("2 уровень доступа");
        break;
    case "superadmin":
        console.log("3 уровень доступа");
        break;
}