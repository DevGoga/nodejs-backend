import { plainToInstance } from 'class-transformer';
import { IsIn, IsInt, IsNotEmpty, IsOptional, IsPositive, IsString, Max, validateSync } from 'class-validator';
import { Request, Response } from 'express';

enum genre {
  horror = 'horror',
  action = 'action',
  adventure = 'adventure',
}

export class CreateTaskDto {
  @IsOptional()
  @IsInt()
  @IsPositive()
  @Max(500)
  limit = 0;

  @IsOptional()
  @IsInt()
  @IsPositive()
  offset: number;

  @IsString()
  @IsNotEmpty()
  key: string;

  @IsOptional()
  @IsString()
  @IsIn([genre.horror, genre.action, genre.adventure])
  category = genre.action;
}
const taskValidate = (req: Request, res: Response) => {
  const createTaskDto = plainToInstance(CreateTaskDto, req.query);
  const errors = validateSync(createTaskDto);
  if (errors.length) {
    throw Error('Unknown validation error');
  }
};
