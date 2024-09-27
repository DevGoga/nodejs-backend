import {EventEmitter} from 'node:events'
class Emitter extends EventEmitter {
  makeBurger() {
    this.emit('бургер');
  };
  makePizza(){
    this.emit('пицца');
  }
  makePasta(){
    this.emit("паста");
  }
}
class Kitchen {
   cookBurger() {console.log('делаю бургер')};
   cookPizza() {console.log('делаю пиццу')};
   cookPasta(){console.log('делаю пасту')};
}
const kitchen = new Kitchen();
const eventEmitter = new Emitter();

eventEmitter.on('бургер', () => {kitchen.cookBurger()});
eventEmitter.on('пицца', () => {kitchen.cookPizza()});
eventEmitter.on('паста', () => {kitchen.cookPasta()});

eventEmitter.makeBurger();
eventEmitter.makePizza();
eventEmitter.makePasta();