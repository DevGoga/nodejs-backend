// удаляем слова между первыми двумя точками
const word ='example.remove.example';
const regexp = word.replace(/\..*?\./,'..');
console.log(regexp);
// извлекаем имя файла и расширение
const word1 = "/a/b/c/d.txt";
const regexp1 = word1.replace(/.*\//,'');
console.log(regexp1);
// Убрать / из конца строки
const word2 = "https://site.com/"
const regexp2 = word2.replace(/\/$/,'');
console.log(regexp2);
// Убрать ./ или / из начала строки
const word3 = "./file.txt"
const regexp3 = word3.replace(/^((\.\/)|(\/))/,'');
console.log(regexp3);