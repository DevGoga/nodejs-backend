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
class Kitchen extends EventEmitter {
  constructor(private logger: Logger) {
    super();
    this.on('burger', this.makeBurger);
    this.on('pizza', this.makePizza);
  }
  makeBurger() {
    this.logger.info('Starting burger....');
    this.logger.success('Burger complete!');
  }
  makePizza() {
    this.logger.info('Starting pizza...');
    this.logger.success('Pizza complete!');
  }
}
const logger = new Logger();
const kitchen = new Kitchen(logger);

kitchen.emit('burger');
kitchen.emit('pizza');
