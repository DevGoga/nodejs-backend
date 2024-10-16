import { plainToInstance } from 'class-transformer';
import { validateSync } from 'class-validator';
import express from 'express';
import { TaskIdDto } from './taskId.dto';

export const taskRouter = express.Router();

taskRouter.post('', (req, res) => {
  res.send('create task');
});
taskRouter.get('', (req, res) => {
  res.send('get task');
});
taskRouter.get('/:id', (req, res) => {
  const dto = plainToInstance(TaskIdDto, req.params);
  const errors = validateSync(dto);
  if (errors.length) {
    throw Error('В валидации есть ошибки!'); // Сюда совать конкретную ошибку, я для скорости просто так воткнул этот текст
  }

  res.send('Всё ок, валидация прошла, но пока никакой логики нет, поэтому просто ответим ОК!');
});
taskRouter.get('/my/authored', (req, res) => {
  res.send('get authored');
});
taskRouter.get('/my/assigned', (req, res) => {
  res.send('get assigned');
});
taskRouter.put('/:id', (req, res) => {
  res.send('update task');
});
taskRouter.delete('/:id', (req, res) => {
  res.send('delete task');
});
taskRouter.post('/:id/time', (req, res) => {
  res.send('add time in task');
});
