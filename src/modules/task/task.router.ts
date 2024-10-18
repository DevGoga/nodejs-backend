import express from 'express';
import TaskController from './task.controller';

export const taskRouter = express.Router();

taskRouter.post('', TaskController.create);
taskRouter.delete('/:id', TaskController.delete);
