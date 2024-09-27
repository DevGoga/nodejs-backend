import {EventEmitter} from 'node:events'
class Kitchen extends EventEmitter{
   cookingPizza() {
    this.emit('начал приготовление');
    try {
      this.emit('создание теста');
      this.emit('добавление ингридиентов')
      this.emit('добавить в печь')
      setTimeout(() => this.emit('пицца готова!'), 3000)
    }
    catch(err) {
      console.error('sorry, i dont understand', err);
    }
  }
}
const kitchen = new Kitchen();

kitchen.on('начал приготовление', () => console.log('приготовление началось!'));
kitchen.on('создание теста', () => console.log('создал тесто!'));
kitchen.on('добавление ингридиентов', () => console.log('добавил ингридиенты!'));
kitchen.on('добавить в печь', () => console.log('добавил пиццу в печь!'));
kitchen.on('пицца готова!', () => console.log('я приготовил пиццу!!!)'));
kitchen.on('sorry, i dont understand', () => console.log('я хз как готовить :('));

kitchen.cookingPizza();