import chalk from 'chalk';
import EventEmitter from 'node:events';
class Logger {
  info(massage: string) {
    console.log(chalk.blue(massage));
  }
  success(massage: string) {
    console.log(chalk.green(massage));
  }
}
class Kitchen {
  constructor(private readonly logger: Logger) {}
  makeBurger(id: number, name: string) {
    console.log(this, id, name);
    this.logger.info('Starting burger....');
    this.logger.success('Burger complete!');
  }
}
const logger = new Logger();
const kitchen = new Kitchen(logger);
const orders = new EventEmitter();

orders.on('burger', (id, name) => kitchen.makeBurger.call(kitchen, id, name));
orders.emit('burger', 1, 'John');
