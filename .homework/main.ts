import { EventEmitter } from 'node:events';
enum Cook {
  start = 'начал приготовление',
  create = 'создание теста',
  add = 'добавление ингридиентов',
  oven = 'добавить в печь',
  finish = 'пицца готова!',
  error = 'sorry, i dont understand',
}
class Kitchen extends EventEmitter {
  async cookingPizza() {
    this.emit(Cook.start);
    this.emit(Cook.create);
    this.emit(Cook.add);
    this.emit(Cook.oven);
    new Promise((resolve, reject) => {
      if (Math.random() > 0.5) {
        return reject(this.emit(Cook.error));
      }
      resolve(this.emit(Cook.finish));
    });
  }
}
const kitchen = new Kitchen();

kitchen.on('начал приготовление', () => console.log('приготовление началось!'));
kitchen.on('создание теста', () => console.log('создал тесто!'));
kitchen.on('добавление ингридиентов', () => console.log('добавил ингридиенты!'));
kitchen.on('добавить в печь', () => console.log('добавил пиццу в печь!'));
kitchen.on('пицца готова!', () => console.log('я приготовил пиццу!!!'));
kitchen.on('sorry, i dont understand', () => console.log('я хз как готовить :('));

kitchen.cookingPizza();
