/*
Создайте класс MyStorage<T>, который необходим для хранения и работы с объектами типа T.
Внутри этот класс должен хранить элементы в приватном массиве.
Для работы с элементами должны существовать 4 публичных метода:
* create - принимает на вход объект, добавляет к нему поле id - уникальный идентификатор,
  он не должен пересекаться с теми id, которые уже есть в хранилище.
  Проще всего использовать числовой id и увеличивать его - 1, 2, 3, 4, ... и так далее
* read - принимает на вход id и возвращает из хранилища элемент с этим id, или undefined, если такого элемента нет
* delete - принимает на вход id и удаляет из хранилища элемент с этим id, ничего не возращает
* update - принимает на вход id и частичную сущность. Ищет в хранилище элемент с таким id и обновляет его.

Так же для тестов необходимо предоставить публичный метод getStorage(), который будет возвращать использующийся массив

Чтобы проверить работоспособность кода, необходимо просто его запустить.
Если что-то не работает, вы увидите ошибку "It is no working as expected"
Если всё работает, вы увидите "Всё работает!"
 */

class MyStorage<T> {
  private storage: (T & { id: number })[] = [];
  private currentId: number = 1;

  create(item: T) {
    const newItem = { ...item, id: this.currentId };
    this.storage.push(newItem);
    this.currentId++;
    return newItem;
  }

  read(id: number): (T & { id: number }) | undefined {
    return this.storage.find((item) => item.id === id);
  }

  delete(id: number) {
    this.storage = this.storage.filter((item) => item.id !== id);
  }

  update(id: number, partialItem: Partial<T>) {
    const index = this.storage.findIndex((item) => item.id === id);
    this.storage[index] = { ...this.storage[index], ...partialItem };
    return this.storage[index];
  }

  getStorage(): (T & { id: number })[] {
    return this.storage;
  }
}

type User = {
  name: string;
  age: number;
};

const storage = new MyStorage<User>();
storage.create({ name: 'first', age: 1 });
storage.create({ name: 'second', age: 2 });
storage.create({ name: 'third', age: 3 });

storage.delete(2);

storage.create({ name: 'fourth', age: 4 });

let updatedFirst;
updatedFirst = storage.update(1, { name: 'first-new-name' });
updatedFirst = storage.update(1, {});
updatedFirst = storage.update(1, { age: 11 });

const updatedFourth = storage.update(4, { age: 44, name: 'fourth-new-name' });

const user1 = storage.read(1);
const user3 = storage.read(3);
const user5 = storage.read(5);

// На этих строчках должны гореть ошибки! Для запуска кода закомментируйте их!
// storage.update(1000, { age: 'a' }); // Должна гореть ошибка, что поле age должно являться числом
// storage.update(1000, { x: true }); // Должна гореть ошибка, что поля x нет в User

// Тест-кейсы
const th = () => {
  throw Error('It is no working as expected');
};
const [item1, item2, item3, item4] = storage.getStorage();

if (item1.id !== 3 || item1.age !== 3 || item1.name !== 'third') {
  th();
}

if (item2.id !== 1 || item2.age !== 11 || item2.name !== 'first-new-name') {
  th();
}

if (item3.id !== 4 || item3.age !== 44 || item3.name !== 'fourth-new-name') {
  th();
}

if (item4 !== undefined) {
  th();
}

if (updatedFirst.id !== 1 || updatedFirst.age !== 11 || updatedFirst.name !== 'first-new-name') {
  th();
}

if (updatedFourth.id !== 4 || updatedFourth.age !== 44 || updatedFourth.name !== 'fourth-new-name') {
  th();
}

if (user1?.id !== 1 || user1?.age !== 11 || user1?.name !== 'first-new-name') {
  th();
}

if (user3?.id !== 3 || user3?.age !== 3 || user3?.name !== 'third') {
  th();
}

if (user5 !== undefined) {
  th();
}

console.log('Всё работает!');
