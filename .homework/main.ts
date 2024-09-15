// Строка начинается с заглавной или прописной буквы A
const check1 = new RegExp(/^а|^А/);
// Строка кончается числом
const check2  = new RegExp(/[0-9]$/);
// Строка включает в себя слово `example`
const check3 = new RegExp(/example/);
// Строка заканчивается на `.js` или `.ts`
const check4 = new RegExp(/\.ts$|\.js$/);
// Строка заканчивается на `.js`, `.ts`, `.tsx` или `.jsx`
const check5 = new RegExp(/\\.ts$|\.js$|\.jsx$|\.tsx$/);
// Строка содержит заглавные буквы
const check6 = new RegExp(/[A-Z]/);
// Строка содержит только числа или маленькие буквы `c`, `d`, `e`
const check7 = new RegExp(/^[1-9cde]+$/);
// Строка содержит “дату”, то есть 4 цифры + дефис + 2 цифры + дефис + 2 цифры, например `2024-06-24`
const check8 = new RegExp(/[0-9][0-9][0-9][0-9]-[0-9][0-9]-[0-9][0-9]/);
// Строка начинается с `folder/` , но не заканчивается на `/index.ts`, например `folder/sub-folder/file.txt`
const check9 = new RegExp(/^folder\/(?!.*\/index\.ts$).*/);
