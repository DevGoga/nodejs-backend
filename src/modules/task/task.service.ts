import { CreateTaskDto } from './dto';
import TaskRepository from './task.repository';
import { Task } from './task.types';

const TaskService = {
  create(dto: CreateTaskDto) {
    // Какая-то бизнес-логика

    return TaskRepository.create(dto);
  },

  delete(id: Task['id']) {
    // Какая-то бизнес-логика

    return { result: TaskRepository.delete(id) };
  },
};

export default TaskService;
