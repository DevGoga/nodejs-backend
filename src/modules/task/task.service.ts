import { CreateTaskDto } from './dto';

const TaskService = {
  create(dto: CreateTaskDto) {
    // Какая-то бизнес-логика

    return {
      id: 1,
      ...dto,
    };
  },
};

export default TaskService;
