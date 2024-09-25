import { EventEmitter } from 'node:events';

const emitter = new EventEmitter();
emitter.on('error', () => console.log('Вызвался error!'));
emitter.on('end', () => console.log('Вызвался end!'));
if (Math.random() > 0.5) {
  emitter.emit('error');
} else emitter.emit('end');
