import { plainToInstance } from 'class-transformer';
import { IsIn, IsInt, IsNotEmpty, IsOptional, IsPositive, IsString, Max } from 'class-validator';

export class CreateQueryDto {
  @IsOptional()
  @IsInt()
  @IsPositive()
  @Max(500)
  limit: number = 0;

  @IsOptional()
  @IsInt()
  @IsPositive()
  @Max(100)
  offset: number = 10;

  @IsString()
  @IsNotEmpty()
  key: string;

  @IsOptional()
  @IsString()
  @IsIn(['horror', 'action', 'adventure'])
  category: string = 'action';
}

const query = { key: 'myKey', limit: 250, offset: 5 };
const queryDto = plainToInstance(CreateQueryDto, query);
