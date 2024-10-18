import { IsEnum, IsNotEmpty, IsString } from 'class-validator';

export enum Severity {
  low = 'low',
  medium = 'medium',
  high = 'high',
}

export class CreateTaskDto {
  @IsString()
  @IsNotEmpty()
  title: string;

  @IsString()
  description: string;

  @IsEnum(Severity)
  severity: Severity;
}
